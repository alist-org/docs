---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 37
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

# Terabox(海外百度)


## **刷新令牌**

[**点此登录**](https://www.terabox.com/)进行获取刷新令牌，随意找一个请求即可找到 **`Cookie`**

![terabox](/img/drivers/terabox/terabox_cookie.png)


## **jsToken**

查看 [**主页**](https://www.terabox.com/main?category=all) 的网页源代码，按 `Ctrl` + `F` 键搜索 `jsToken`

找到字符串类似 `%20%3D%20a%7D%3Bfn%28%22xxxxxxxxxxxxxxx%22%29`

中间的 `xxxxxxxxxxxxxxx` 就是要获取的 **jsToken**


<br/>



## **下载接口**

**下载接口需要选择 ==`非官方`==** ，才可以使用 ^(v3.29)^



<br/>

#### **注意事项：根文件路径默认是 /**

- 如果你不想写根目录 **/** 要写其他目录

- 挂载其他单个子目录，放一张图参考一下吧
  - <img src="/img/drivers/terabox/terabox3.png" alt="Demo" style="zoom:50%;" />

    

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
