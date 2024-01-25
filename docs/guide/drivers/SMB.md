---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 28
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
# SMB

It is to mount smb to Alist, instead of sharing Alist through smb, instead of sharing smb like webdav.



Because there are no related equipment and services, it is impossible to test. You can test it yourself according to the method provided in the **`GitHub Discussions`** discussion

**https://github.com/alist-org/alist/discussions/2215#discussioncomment-4104018**



Wait for the more detailed tutorials to be supplemented after the relevant equipment or services are available, or wait for the PR of the boss who has no problem with the test.



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
