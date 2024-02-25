---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 16
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "Native Rroxy"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Quqi Cloud

Quqi Cloud：https://quqi.com ( v3.31.0)

<br/>



### **Phone、Password**

Log in with your mobile phone number and password. It is recommended to use [Cookie](#cookie) to log in.

<br/>



### **Cookie**

Login using cookies **can keep multiple terminals online at the same time**. If you use `mobile phone number, password` to mount, the login status of other terminals will be forced offline.

- Obtaining method: Just find one carrying the `Cookie` parameter in the `F12` network request and copy it

![cookie](/img/drivers/quqi/quqi_cookie.png)

<br/>



### **Root folder id**

The root folder ID is `0`, other subfolder IDs refer to the figure below

![folder_id](/img/drivers/quqi/quqi_folder_id.png)

<br/>



### **CDN**

Improve the single-connection download speed for VIP users and solve the problem of limiting the number of download connections for non-VIP users. **CDN content needs to be decrypted, which will occupy some computing resources**

<br/>



### **The default download method used**


```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
