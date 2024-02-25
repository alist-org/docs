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
  - "本地代理"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 曲奇云盘

曲奇云盘官网：https://quqi.com ( v3.31.0)

<br/>



### **手机号、密码**

登录手机号和密码，建议使用 [Cookie](#cookie)方式登录

<br/>



### **Cookie**

使用Cookie登录 **可保持多终端同时在线使用**，如果使用 `手机号、密码`进行挂载会顶掉其它终端登录状态

- 获取方式：随意在`F12`网络请求中找到一个携带`Cookie`参数的进行复制即可

![cookie](/img/drivers/quqi/quqi_cookie.png)

<br/>



### **根文件夹ID**

根文件夹ID为 `0`，其它子文件夹ID参考下图

![folder_id](/img/drivers/quqi/quqi_folder_id.png)

<br/>



### **CDN**

提升VIP用户单连接下载速度，解决非VIP用户下载连接数限制问题，**CDN内容需要解密，会占用一些计算资源**

<br/>



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
