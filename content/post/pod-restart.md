---
title: Kubernetes 故障排查实录：Pod 连环重启
date: 2024-05-02
description: "How I Cracked the Kubernetes Pod Restart Conundrum"
categories:
    - Kubernetes
---

## 诡异的 Pod 重启现象

几个月前，我遇到了一个令人困惑的 Kubernetes 故障：在一周的时间里，我几乎每天都会收到不同 Pod 出现 `CrashLoopBackOff` 状态的告警。通过 `kubectl describe pod` 查看重启的原因均是容器异常退出。奇怪的是，虽然这些 Pod 在同一个 K8s 集群，但属于不同的 Deployment 和 Namespace，表面上无直接的关联。然而只要我执行 `kubectl delete pod` 命令删除故障 Pod，让其所属的 Deployment 重新创建，Pod 便会恢复正常。

起初，我通过简单地删除 Pod 来应对告警，但问题并没有收敛，反而持续发生，这暗示着可能存在更深层次的系统性问题。为了彻底解决问题，标本兼治，我决定深入调查，找出根本原因。

## 抽丝剥茧，循序渐进

首先，通过查看日志和 K8s events，发现均是因为网络问题导致 Pod 重启，例如：
- Pod A 日志显示：`dial tcp: lookup kube-apiserver on 172.20.0.10:53: no such host`。该应用依赖 K8s apiserver 才能正常工作，但日志表明容器无法解析 IP 地址（尽管集群内的 coredns 组件运行正常），因此异常退出进而不断重启
- Pod B 的日志为 `timeout: failed to connect service ":50051" within 5s`，其中 `50051` 是容器的 liveness probe 端口，由于 kubelet 一直探测失败所以不断重启容器

由于 Pod B 属于 DaemonSet，我注意到了这两个 Pod 都运行在 Node C 上。回顾之前的告警，发现受影响的 Pod 也都是跑在 Node C 上。而之前的 `kubectl delete pod` 操作恰好使得告警的 Pod 被重建后调度到了其他 Node 上，从而恢复了正常，这表明问题根源在 Node C。

于是我立即使用`kubectl cordon`将 Node 标记为不可调度，在接下来的几天果然没有再出现类似的告警，但根本原因还没有定位出来。

我查看了 Node 的 metrics 和 events，资源使用情况正常，未发现明显瓶颈。最后在 Node 的 `/var/log/messages` 中发现了关键的日志信息："nf_conntrack: nf_conntrack: table full, dropping packet"。

nf_conntrack 是 Linux 系统中 Netfilter 的一个关键组件，用于跟踪所有网络连接。上述日志表明连接跟踪表（conntrack table）已满，操作系统无法为新的网络连接创建条目。conntrack table 满的原因可能是 Node 上的某个异常 Pod 占用了大量连接。该 Pod 可能建立了大量连接，但未及时释放，导致 conntrack table 无法回收连接。当 Node 上的其他 Pod 尝试建立新连接时，由于 conntrack table 已满，连接失败，或是无法访问 coredns 解析 IP 地址或是 kubelet 无法探活成功，进而导致 Pod 重启。

## 拨开迷雾，找到元凶

定位到了问题，接下来就是找出 Node 上的异常 Pod。

由于 Kubernetes 使用了网络命名空间来确保 Pod 之间的网络隔离，因此直接在 Node 查看连接状态可能无法准确反映单个 Pod 的网络活动，我们需要进入到 Pod 的网络命名空间去查看连接情况。故基本思路为：逐个检查 Pod 的网络命名空间，查看当前建立的连接数量。

首先通过`kubectl describe node`拿到 Node 上所有的 Pod 信息，再使用以下命令拿到容器 ID：

```bash
# 由于 Pod 中所有容器共享同一命名空间，只需查询一个容器即可
kubectl get pod <POD-NAME> -n <NAMESPACE> -o jsonpath='{.status.containerStatuses[0].containerID}'
```

然后在 Node 上执行以下命令：

```bash
# 获取容器的 PID：
crictl inspect --template "{{ .info.pid }}" -o go-template <ContainerID>

# 统计该 Pod 网络命名空间中所有打开的网络连接数
nsenter -t <pid> -n netstat -anp | wc -l
```

最终发现，有一个 Pod 建立了异常多的连接，明显高于该 Node 上其他 Pod。

查看对应的代码，该应用是一个 K8s Operator，它在每一次 reconcile 的时候都会创建一个 `http.Client` 并发起若干次请求。由于没有进行额外的设置，下面这些配置均会使用默认值，这意味着每次 reconcile 都可能导致连接泄漏：

```go
// MaxIdleConns controls the maximum number of idle (keep-alive)
// connections across all hosts. Zero means no limit.
MaxIdleConns int

// IdleConnTimeout is the maximum amount of time an idle
// (keep-alive) connection will remain idle before closing
// itself.
// Zero means no limit.
IdleConnTimeout time.Duration

// DisableKeepAlives, if true, disables HTTP keep-alives and
// will only use the connection to the server for a single
// HTTP request.
//
// This is unrelated to the similarly named TCP keep-alives.
DisableKeepAlives bool
```

## 亡羊补牢，永绝后患

为了避免类似问题再次发生，我采取了以下措施：
- 修改代码，对闲置连接的相关配置项进行合理设置而非使用默认值
- 增加了对 Node conntrack table 使用情况的监控面板，并添加了相应的告警规则 (node-exporter 暴露了 conntrack 相关的 metrics):
```yaml
- alert: NodeHighNumberConntrackEntriesUsed
  annotations:
    description: '{{ $value }} of conntrack entries are used.'
    runbook_url: https://runbooks.prometheus-operator.dev/runbooks/node/nodehighnumberconntrackentriesused/
    summary: Number of conntrack are getting close to the limit.
  expr: node_nf_conntrack_entries / node_nf_conntrack_entries_limit > 0.7
  for: 10m
```
- （可选）根据节点的内存调整 conntrack table 大小：
```bash
vim /etc/sysctl.conf

net.netfilter.nf_conntrack_max = <value>

sysctl -p /etc/sysctl.conf
```

## 总结与反思

在本次故障排查的过程中，有两个关键行动点：

- **识别模式**：通过观察多个故障案例，找出了共同点，有效缩小了问题排查的范围
- **多角度排查**：在问题排查过程中，除了分析 Node 的 metrics、events 和 kubelet 日志外，还检查了 Node 的系统日志，这提供了额外的视角和信息

整个过程凸显了 Kubernetes 生态的复杂性。为了成功地发现和解决问题，我们不仅需要深入理解 K8s 各组件的工作原理，还需要具备深入的操作系统级别知识。这些知识帮助我们穿透表象，直击问题核心。

总的来说，尽管问题的出现带来了不小的挑战，但解决过程本身也是一次宝贵的学习经历。

## References

- https://thenewstack.io/hackers-guide-kubernetes-networking/
