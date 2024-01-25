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

# ChaoxingxingGroupCloud

chaoxingxing group cloud is also affiliated with chaoxingxing. After logging in to chaoxingxing, you can see a group under the left sidebar.

Official website link：**https://i.chaoxing.com**

<br/>



### **Username Password**

chaoxingxing account and password

<br/>



### **Bbsid**

Follow the example process below to obtain

![](/img/drivers/chaoxing/chaoxing_bbsid.png)

<br/>



### **Root Folder ID**

The default is `-1`. For other subfolder ID acquisition methods, see the example below.

- Search the keyword `getResourceList` in the request. For convenience, we can directly search `list` and see it. Then we enter the folder we need to mount. After entering the folder, we can find the `folder id by looking at the request.`

![](/img/drivers/chaoxing/chaoxing_folder_id.gif)

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

