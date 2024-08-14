---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 30
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

# SFTP

即通过 SSH 协议访问文件。

## **地址**

SSH 地址，需要包含端口。

## **用户名**

SSH 用户名

## **密码**

SSH 密码

## **私钥**

使用私钥验证而不是密码。

## **根文件夹ID**

挂载的根路径





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
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
