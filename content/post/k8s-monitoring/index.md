---
title: 监控 Kubernetes 集群
date: 2022-03-15
description: "Monitoring Kubernetes Clusters"
categories:
    - Notes
tags:
    - kubernetes
    - observability
---

## 背景

在上一篇博客里搭建了一个具有三个节点的 k8s 集群，可以用来跑一些应用了，但是对于各个节点的健康状况、资源利用率这些信息目前还需要手动 ssh 到虚拟机上去查看，非常低效，这非常不云原生，因此这篇博客记录一下安装各种工具来以可视化的方式监控 k8s 集群。

## K8s Dashboard

首先想到的是 k8s dashboard，它是 k8s 官方提供的 Web UI，可以用来查看集群的概览信息和各个资源对象的运行情况。部署很简单，只需要执行一条命令，执行完后会默认部署在 kubernetes-dashboard 命名空间下：

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.5.0/aio/deploy/recommended.yaml
```

为了以集群管理员的身份来访问 dashboard，还需要创建一个`ServiceAccount`，并与`cluster-admin`这个`ClusterRole`绑定：

```yaml
# dashboard-sa.yaml
kind: ClusterRoleBinding
apiVersion: rbac.authoriztion.k8.io/v1
metadata:
  name: admin
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
subjects:
- kind: ServiceAccount
  name: admin
  namespace: kube-system
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin
  namespace: kube-system
```

然后执行`kubectl apply -f dashboard-sa.yaml`，创建完成后找到这个`ServiceAccount`对应的`Secret`及 token：

```bash
kubectl -n kube-system get secret | grep admin-token
admin-token-v82gm    kubernetes.io/service-account-token    3    27d

# 获取 token
kubectl describe secret admin-token-v82gm -n kube-system
```

需要注意的是，从`v1.24`开始，创建`ServiceAccount`之后不会自动生成`Secret`了，需要先手动创建：

```bash
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Secret
type: kubernetes.io/service-account-token
metadata:
  name: admin-token
  namespace: kube-system
  annotations:
    kubernetes.io/service-account.name: "admin"
EOF
```

然后再使用`kubectl describe secret admin-token -n kube-system`获取 token。

最后执行`kubectl proxy`，通过 http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/ 访问 Dashboard，在认证页面输入前面得到的 token 即可。

## Node Exporter

此外，可以通过 NodeExporter 来将节点的 CPU、内存等使用信息暴露出来供 Prometheus 采集，进而使用 Grafana 进行可视化。NodeExporter 的部署也很简单，它以`DaemonSet`的形式部署在每个节点上：

```yaml
# node-exporter.yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    app.kubernetes.io/component: exporter
    app.kubernetes.io/name: node-exporter
  name: node-exporter
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app.kubernetes.io/component: exporter
      app.kubernetes.io/name: node-exporter
  template:
    metadata:
      labels:
        app.kubernetes.io/component: exporter
        app.kubernetes.io/name: node-exporter
    spec:
      tolerations:
      # this toleration is to have the daemonset runnable on master nodes
      # remove it if your masters can't run pods
      - key: node-role.kubernetes.io/master
        operator: Exists
        effect: NoSchedule
      containers:
      - args:
        - --path.sysfs=/host/sys
        - --path.rootfs=/host/root
        - --no-collector.wifi
        - --no-collector.hwmon
        - --collector.filesystem.ignored-mount-points=^/(dev|proc|sys|var/lib/docker/.+|var/lib/kubelet/pods/.+)($|/)
        - --collector.netclass.ignored-devices=^(veth.*)$
        name: node-exporter
        image: quay.io/prometheus/node-exporter:latest
        ports:
          - containerPort: 9100
            protocol: TCP
        resources:
          limits:
            cpu: 400m
            memory: 500Mi
          requests:
            cpu: 200m
            memory: 200Mi
        volumeMounts:
        - mountPath: /host/sys
          mountPropagation: HostToContainer
          name: sys
          readOnly: true
        - mountPath: /host/root
          mountPropagation: HostToContainer
          name: root
          readOnly: true
      volumes:
      - hostPath:
          path: /sys
        name: sys
      - hostPath:
          path: /
        name: root
---
kind: Service
apiVersion: v1
metadata:
  name: node-exporter
  namespace: monitoring
  annotations:
      prometheus.io/scrape: 'true'
      prometheus.io/port:   '9100'
  labels:
      app.kubernetes.io/component: exporter
      app.kubernetes.io/name: node-exporter
spec:
  selector:
      app.kubernetes.io/component: exporter
      app.kubernetes.io/name: node-exporter
  ports:
  - name: node-exporter
    protocol: TCP
    port: 9100
    targetPort: 9100
```

## Prometheus Operator

然后通过 Prometheus Operator 来部署 Prometheus 实例来采集 NodeExporter 的数据。

需要注意的是，必须使用`create`而不是`apply`，否则会报错。因为 yaml 中的 CRD 内容本来就很长，使用`apply`会在`kubectl.kubernetes.io/last-applied-configuration`这个注解里填入整个 CRD 使得内容长度超过限制。

```bash
kubectl create -f https://raw.githubusercontent.com/prometheus-operator/prometheus-operator/master/bundle.yaml
```

Prometheus Operator 部署成功后，需要创建一个`ServiceMonitor`的CR，用来通过标签来选中`Service`对象进行爬取 metrics。以爬取 NodeExporter 为例：

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: node-exporter
  namespace: monitoring
  labels:
    layer: infra
spec:
  # NodeExporter Service 所在的 namespace
  namespaceSelector:
    matchNames:
    - monitoring
  selector:
    # NodeExporter Service 的 label
    matchLabels:
      app.kubernetes.io/component: exporter
      app.kubernetes.io/name: node-exporter
  endpoints:
  # NodeExporter Service metrics port 名称
  - port: node-exporter
    relabelings:
    - sourceLabels: [__meta_kubernetes_pod_node_name]
      targetLabel: instance
```

最后部署 Prometheus 类型的 CR 部署 Prometheus 实例，通过标签来选中对应的`ServiceMonitor`对象：

```yaml
apiVersion: monitoring.coreos.com/v1
kind: Prometheus
metadata:
  name: instance
spec:
  serviceAccountName: prometheus
  # 选中 ServiceMonitor
  serviceMonitorSelector:
    matchLabels:
      layer: infra
  resources:
    requests:
      memory: 500Mi
      cpu: "0.5"
```

此外需要为该实例使用的`ServiceAccount`配置相关的权限（略）。

## Grafana

Prometheus 采集到监控数据后，可以通过 Grafana 进行展示。

这里通过以下 YAML 部署使用 emptyDir 的 Grafana （`pod`从节点上删除时，数据会丢），并通过`NodePort`的方式暴露服务：

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: grafan
  name: grafana
spec:
  selector:
    matchLabels:
      app: grafana
  template:
    metadata:
      labels:
        app: grafana
    spec:
      securityContext:
        fsGroup: 472
        supplementalGroups:
          - 0
      containers:
        - name: grafana
          image: grafana/grafana:8.4.4
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3000
              name: http-grafana
              protocol: TCP
          readinessProbe:
            failureThreshold: 3
            httpGet:
              path: /robots.txt
              port: 3000
              scheme: HTTP
            initialDelaySeconds: 10
            periodSeconds: 30
            successThreshold: 1
            timeoutSeconds: 2
          livenessProbe:
            failureThreshold: 3
            initialDelaySeconds: 30
            periodSeconds: 10
            successThreshold: 1
            tcpSocket:
              port: 3000
            timeoutSeconds: 1
          resources:
            requests:
              cpu: 250m
              memory: 750Mi
          volumeMounts:
            - mountPath: /var/lib/grafana
              name: grafana-pv
      volumes:
        - name: grafana-pv
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: grafana
spec:
  selector:
    app: grafana
  sessionAffinity: None
  type: NodePort
  ports:
    - targetPort: 3000
      nodePort: 32000
      port: 3000
```

进入 Grafana 的页面，初始账号和密码都是`admin`。

## 参考

- [使用 kubeconfig 或 token 进行用户身份认证 · Kubernetes 中文指南——云原生应用架构实战手册](https://jimmysong.io/kubernetes-handbook/guide/auth-with-kubeconfig-or-token.html)

- [部署和访问 Kubernetes 仪表板（Dashboard） | Kubernetes](https://kubernetes.io/zh/docs/tasks/access-application-cluster/web-ui-dashboard/)

- [什么是Prometheus Operator - prometheus-book](https://yunlzheng.gitbook.io/prometheus-book/part-iii-prometheus-shi-zhan/operator/what-is-prometheus-operator)

- [How To Setup Grafana On Kubernetes - Beginners Guide](https://devopscube.com/setup-grafana-kubernetes/)

- https://github.com/prometheus-operator/prometheus-operator/issues/1166

- https://blog.container-solutions.com/prometheus-operator-beginners-guide

- [监控 Kubernetes 集群节点-阳明的博客|Kubernetes|Istio|Prometheus|Python|Golang|云原生](https://www.qikqiak.com/post/promethues-monitor-k8s-nodes/)

- https://itnext.io/big-change-in-k8s-1-24-about-serviceaccounts-and-their-secrets-4b909a4af4e0
