---
title: Hello Hugo
description: "An awesome geeker should has a blog."
date: 2020-12-28
slug: hello-hugo
image: helena-hertz-wWZzXlDpMog-unsplash.jpg
categories:
    - Life
tags:
    - hexo
    - hugo
    - github actions
---

## 前言

2017年，我在知乎受到启发，决定动手搭建一个自己的博客。一番搜索之后，得知 Github 的每一个用户都可以定制一个自己的 github page。当时正好看到了 [黄玄](https://github.com/huxpro) 大佬的简洁精致的博客，遂决定照猫画虎，照着他写的教程一步一步搭建环境，摸索修改各种参数，最后有了第一个博客。

然而最近我想要在博客上发表新的文章的时候，碰到了一个问题：如果我想要在发表前在本地预览效果，我必须重配环境，因为当时是在原来的电脑上搭建的，否则只能 push 到 GitHub 上预览，这样十分麻烦。

于是在2018年决定使用 Hexo 重新搭建一个博客，它只需要 Node.js 环境和 git，而之前的 Jekyll 需要安装 Ruby 环境。把 Hexo 官网上几乎所有主题都看了一遍以后，我最后选择了 [raytaylorism](https://github.com/raytaylorlin/hexo-theme-raytaylorism) 主题。   

现在是2020年12月，在我的2020年的 flag 中有这么一条：`Perfect blog`，眼看2020年即将过去，于是决定抓住2020的尾巴，用 Hugo 重构一下博客。

## 正文

实现这个博客大概分成以下几个步骤(以 MacOS 为例)：

### 1.安装 [Hugo](http://gohugo.io/)

```bash
brew install hugo
```

### 2.建站

``` bash
hugo new site Blog/ -f "yaml"
cd Blog
```

### 3.下载主题并配置

```bash
git clone https://github.com/CaiJimmy/hugo-theme-stack/ themes/hugo-theme-stack
```

### 4.本地预览

经过以上步骤的折腾摸索，博客的框架已经搭好，接下来使用以下命令来启动服务器以预览博客:

``` bash
hugo server
```

### 5.配置 GitHub Actions 自动部署

主要参考了[这篇文章](https://blog.humblepg.com/post/2020/02/log-hugo-github-actions.html)。

GitHub Actions 配置文件如下：

```yaml
name: GitHub Pages Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout master
        uses: actions/checkout@v2
        with:
          submodules: true
          fetch-depth: 0
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.79.0'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          publish_dir: ./public
```

## 后记

有了前两次的经历，这次还是非常高效的，大部分时间都用在了挑选主题上了。我觉得以后应该不会再变了，Hugo 还是挺香的。
