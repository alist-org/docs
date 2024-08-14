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

# LenovoNasShare

**https://pc.lenovo.com.cn**

- Need to buy Lenovo equipment

<br/>



## **root folder ID**

Root folder ID: Empty

Subfolder ID：After entering the folder where you need to obtain the subfolder ID, find the request and obtain the subfolder ID.

![](/img/drivers/lenovonasshare/lenovonasshare_fileid.png)

<br/>



## **Share id and Share pwd**

Share Link Example： https://siot-share.lenovo.com.cn/s/#/Ss.JjMaJJwcgrDT46qhVA   Share pwd：`fr0w`

- **Share id**：The string at the end of the shared link`Ss.JjMaJJwcgrDT46qhVA`
- **Share pwd** ：fr0w

<br/>



### **Host**

The public network is used by default: **https://siot-share.lenovo.com.cn**

If you use a LAN, you can change it to the internal network address of the Lenovo device: **http://192.168.XX.XX**

<br/>



### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
