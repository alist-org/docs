---
# This is the icon of the page
icon: state
# This control sidebar order
order: 9
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

# LanZou Cloud

There are two **modes (types)** of Lanzuo network disk mount, respectively **cookie** and **link**

- cookie: All files in the network disk can be displayed, but the cookie of the network disk needs to be provided
- Link: only display the content in the link (you can mount it without providing a cookie)



⚠It is recommended to use the **cookie** method to mount. Using the link mode will always cause convulsions. I don’t know what’s going on and suddenly prompts: **failed get objs:failed to list objs: not find data**



## refresh token

Log in to your [**Lanzuo Cloud Disk**](https://pc.woozooo.com/) account, then F12 to open the developer mode, you can find `Cookie`, there is no specific one, such as the left side of the picture Just click one and there will be `Cookie` in the blue part of the right picture.

![lanzou](/img/drivers/lanzou/lanzou1.png)

## root folder ID

Lanzuo cloud disk root directory ID, the default is `-1`

- **Additional Folder ID**
   - Two ways to obtain (see the picture below)
   - <img src="/img/drivers/lanzou/lanzou2.gif" alt="LanZou folder_id" style="zoom:50%;" />

## Share link and share password

- **Share link**: Randomly generate a share link in the Lanzuo cloud disk
   - Small tip: **lanzouX** in the link, the last default **X** content sometimes cannot be opened in some areas, you can try to change it yourself, for example, change to i, x, u, t, etc. Anyway, try it out for yourself.
- **Share password**: the password for the link



## Repair file info

If you need **WebDav** service, you need to open it



## Mount and fill in the example

![lanzou](/img/drivers/lanzou/lanzou3.png)



### The default download method used

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
    click a1 "../drivers/common.md#webdav-policy" _blank
    click b1 "../drivers/common.md#webdav-policy" _blank
    click c1 "../drivers/common.md#webdav-policy" _blank
```
