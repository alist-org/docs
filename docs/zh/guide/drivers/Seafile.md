---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 38
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# Seafile

Seafile以资料库为单位进行版本控制和同步。

使用本驱动可以挂载一个Seafile资料库到Alist，暂不支持加密资料库。

## **Root folder path**

要挂载的Seafile资料库内的目录，默认根目录：`/`

## **Address**

你的Seafile服务器地址，形如：
- `https://seacloud.cc`
- `http://192.168.1.24:8000`

## **Username**

用于登录你的Seafile服务器的邮箱或用户名。

## **Password**

邮箱或用户名对应的密码。

## **RepoId**

Seafile资料库ID，形如：`86fc6316-3f2a-4c64-b6f5-d4d2b341bc9a`

> 在浏览器中打开Seafile资料库，即可在地址栏中看到资料库ID。



### **默认使用的下载方式**

```mermaid
---
title: 默认使用的那种下载方式？
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
