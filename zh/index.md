---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AList"
  text: "🗂️ 一个支持多种存储的文件列表程序"
  tagline: 使用 Gin 和 Solidjs
  image:
    src: /logo.png
    alt: AList
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/alist-org/alist

features:
  - title: 使用简单
    icon: ⚒️
    details: AList 从一开始就设计为易于安装，并且可以在所有平台上使用。

  - title: 多种存储
    icon: 💾
    details: AList 支持多个存储提供商，包括本地存储、阿里云盘、OneDrive、Google Drive 等，且易于拓展。

  - title: WebDAV 支持
    icon: 🗃️
    details: AList 支持所有 WebDAV 存储，这是一种用于访问文件的标准。

  - title: 暗黑模式
    icon: 🌗
    details: 在浅色和深色模式之间自由切换

  - title: 受保护的路由
    icon: 🔑
    details: 为特定路径添加密码保护和身份验证

  - title: 文件预览
    icon: 📄
    details: 支持视频、音频、文档、PDF、图片预览等，甚至支持 ipa 安装

  - title: 打包下载/批量下载
    icon: 📦
    details: 使用浏览器的 stream api 支持打包下载，无需使用服务器 / 使用Aria2进行批量下载支持文件夹

  - title: (Rapid) Copy between different storage
    icon: 📤
    details: Support (Rapid) copy between different storage

  - title: 单点登录
    icon: 🕹️
    details: 使用单点登录快速登录AList

  - title: 离线下载
    icon: 🧲
    details: 将种子内容离线下载到指定的目录內,需要苛刻的网络环境

  - title: 保险箱加密/解密 文件
    icon: 🔐
    details: 任何人都可以安全地将加密数据存储在远程存储提供商上。数据存储在保险箱中，提供商只能看到保险箱，看不到您的数据。

  - title: 更多新功能
    icon: 📝
    details: 包括文本编辑器、README/HTML 渲染、文件永久链接、Cloudflare Workers 代理等
---
