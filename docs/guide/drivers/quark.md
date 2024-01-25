---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 18
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

# Quark

:::danger
Due to the speed limit of Quark Cloud,Quick Cloud must use local agents for transmission now,[For details, see](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)
:::

### **Cookie and Root folder ID**

The cookie and root folder ID are obtained from the request:

![quark](/img/drivers/quark.png)
Or the root directory id can also be obtained from the address bar:

![url](/img/drivers/quark-rootid.png)

Note that only Cookies captured in Chrome is available, use Firefox's Cookies may remain in guest and still require login.

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
    c1[local proxy]:::someclass==mandatory===>a2[user equipment]
    classDef someclass fill:#f96
    click b1 "../drivers/common.html#webdav-policy"
```

illustrate：[**alist/issues/4318**](https://github.com/alist-org/alist/issues/4318#issuecomment-1536214188)