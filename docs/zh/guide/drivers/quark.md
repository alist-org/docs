---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 18
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "本地代理"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 夸克网盘

:::danger
由于夸克网盘限速问题，夸克网盘现在只能使用本地代理进行传输，[说明详见](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)
:::

## **Cookie 和 根文件夹ID**

从请求中获取 Cookie 和根文件夹 ID：
方法：按F12打开“调试”，选中“网络”，找到一个以“sort”开头的文件即可找到
![quark](/img/drivers/quark.png)

或者根目录id也可以从地址栏获取（根目录为0）：

![url](/img/drivers/quark-rootid.png)

注意：请使用Chrome浏览器来获取Cookies，使用Firefox获取的Cookies或仍将停留在访客并请求登录。

## **[在线预览/下载]很慢?**

夸克云盘下载很慢是因为夸克云盘需要开通**会员**，并且挂载只能^(强制)^使用`本地代理`方式，就需要你搭建AList的机器有一个很高的带宽速度

- 什么是`本地代理`？

  - `本地代理`就是你搭建AList的机器来中转,就是先下载到你搭建AList的机器，在由机器转发给你，你搭建AList的机器速度不够快，再转发给你的速度自然也不够快
1. 换带宽高的服务器来中转
   
2. 在自己家里电脑搭建
   
3. 直接放弃不用.



### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==强制===>a2[用户设备]
    classDef someclass fill:#f96
    click c1 "../drivers/common.html#webdav-策略"
```

说明：[**alist/issues/4318**](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)
