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

# Terabox


## **refresh token**

~~[**Click here to log in**](https://www.terabox.com/) to obtain a refresh token~~

Since F12 is currently disabled on the web page, we can first open F12 on another page and turn on the `Network` → `Preserve log` option.

<img src="/img/drivers/terabox/terabox_f12.png" alt="f12" style="zoom:150%;" /><br/>

Then enter https://www.terabox.com in the address bar of this tab to enter the webpage, you can see the reserved request, and then find **`Cookie`** from the reserved request.

![terabox](/img/drivers/terabox/terabox_cookie.png)

<br/>



## **Download api**

**Download api needs to choose ==`Crack`==** ，before you can use ^(v3.29)^

<br/>



## **Root folder id**

- Root folder id is `/`
- Mount other single subdirectories, put a picture for reference
   - <img src="/img/drivers/terabox/terabox3.png" alt="Demo"/>

<br/>



## **Download error using Proxy Url link**

Using [**Proxy Url**](common.md#download-proxy-url) to download error

```json
{
"error_code": 31211,
"error_msg": "access denied"
}
```

View specific reasons：**[https://github.com/alist-org/alist/issues/6508](https://github.com/alist-org/alist/issues/6508#issuecomment-2171762705)**

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
