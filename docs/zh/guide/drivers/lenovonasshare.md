---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 9
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

# 联想家庭储存链接分享

**https://pc.lenovo.com.cn**

- 需要购买联想设备

<br/>



## **根文件夹ID**

根文件夹ID：空着

子文件夹ID：进入需要获取子文件夹ID的文件夹，找到该请求，获取子文件夹ID

![](/img/drivers/lenovonasshare/lenovonasshare_fileid.png)

<br/>



## **分享ID和分享密码**

分享链接链接示例： https://siot-share.lenovo.com.cn/s/#/Ss.JjMaJJwcgrDT46qhVA 提取码：`fr0w`

- **分享ID**：分享链接中末尾的字符串 `Ss.JjMaJJwcgrDT46qhVA`
- **分享密码** ：提取码

<br/>



### **主机地址**

默认使用公网的：**https://siot-share.lenovo.com.cn**

如果你使用局域网的可以改成联想设备内网地址：**http://192.168.XX.XX**

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
