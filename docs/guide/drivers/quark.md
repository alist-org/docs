---
# This is the icon of the page
icon: state
# This control sidebar order
order: 18
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

# Quark

:::tip
Due to the limitation of Quark network disk, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)
:::

### Cookie and Root folder ID

The cookie and root folder ID are obtained from the request:

![quark](/img/drivers/quark.png)
Or the root directory id can also be obtained from the address bar:

![url](/img/drivers/quark-rootid.png)



### The default download method used


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
    c1[local proxy]:::someclass==default==>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```