---
title: mirrord 实战指南: 如何让云原生开发效率提升 10 倍？
date: 2025-12-20
description: "how to speed up cloud native development 10x with mirrord"
categories:
    - Notes
tags:
    - kubernetes
---

## 前言

## 技术原理

## 案例分享

### sidecar 应用开发

开发一个通用的收集审计日志的 sidecar 应用，负责日志的收集，轮转和发送。收集的日志需要发送到 s3 等云存储。

- 需要使用云环境 node role 权限
- 配置网络 outgoing，过滤 ec2 metadata ip 地址
- 配置环境变量，metadata timeout
- 

## 踩坑

- 有一部分路径默认从本机访问，需要显式配置
  - 期望访问 remote，但实际访问的本机路径，导致总是出现权限错误
- 若远程 k8s node 是 bottlerocker，需要开启特权模式

## 参考
