---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 25
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

# 115 网盘分享

挂载115网盘分享链接，可供下载，无上传编辑等功能。

:::tip

由于 115 网盘的限制，获取下载直链必须携带 Cookies，所以必须登陆。
:::

## **根文件夹 ID**

默认 "" 则为挂载分享链接的全部内容

## **登录**

同 115 网盘

## **分享码/访问码获取**

115网盘分享链接： [https://115.com/s/sw60op83nux?password=y908#](https://115.com/s/sw60op83nux?password=y908#)

**分享码** 为：**sw60op83nux**
**访问码** 为：**y908**

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