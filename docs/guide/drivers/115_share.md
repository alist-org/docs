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

# 115 Cloud Share Link

Driver for 115 share link, supports downloading but not uploading.

:::tip

Due to the restrictions of 115 Cloud Drive, to get the direct download link, you must carry Cookies, so you must log in.

:::

## **Root folder ID**

Default "" is for all content of the shared link

## **Login**

Same as 115 Cloud Drive

## **Share Code/Access Code Acquisition**

115 Cloud Drive share link:  [https://115.com/s/sw60op83nux?password=y908#](https://115.com/s/sw60op83nux?password=y908#)

The Share Code is: **sw60op83nux**
The Access Code is: **y908**

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
