---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 24
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 网易云音乐云盘

网易云音乐云盘需要在手机端才可以进行上传音乐等操作，网页端无法操作

<br/>



## **Cookie**

进入 **https://music.163.com** 然后打开F12开发者模式

随意打开一个请求只要携带 `Cookie` 找到以下两个参数填写进AList的 `Cookie` 中就可以使用

- **__csrf** 、**MUSIC_U**

![](/img/drivers/163/163_cookie.png)

<br/>



## **歌曲获取上限**

默认只能获取200首歌曲，如果你超出可以修改此选项

<br/>



### **注意事项**

1. 如果列表文件很多，建议开启分页加载
2. 云空间只可以上传音频格式文件，无法上传其它格式文件

<br/>



### **默认使用的下载方式**

```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```