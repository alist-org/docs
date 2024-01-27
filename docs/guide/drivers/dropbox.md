---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 34
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

# Dropbox

Dropbox Official：https://www.dropbox.com/



## **Get refresh token**

Go to：**https://alist.nn.ci/tool/dropbox/request.html**

- There are two ways, one is provided directly using AList, and the other is to create a new application by yourself
  - The method of getting as follows (Recommend the first type^{right}^Because the AList provided can no longer create new users)
  - When using the self-built `client ID` and `secret key` on the right, remember to authorize^{the_third_picture}^

<div class="image-preview">  
    <img src="/img/drivers/dropbox/dropbox-1.png" alt="Use AList default to get token" title="Use AList default to get token"/>
    <img src="/img/drivers/dropbox/dropbox-2.png" alt="Create your own new application to obtain the client to get token" title="Create your own new application to obtain the client to get token"/>
    <img src="/img/drivers/dropbox/dropbox-2-2.png" alt="Create your own new application to obtain the client to get token" title="Create your own new application to obtain the client to get token"/>
</div>



- If you use your own new applications, you need to fill in the `client id` and the `client secret key`

- The method is shown in the right side of the example above(Create an application link：**https://www.dropbox.com/developers/apps**)

- Redirect URLs：**https://alist.nn.ci/tool/dropbox/callback**

Reference link: [**Click to view**](https://github.com/alist-org/alist/commit/cfee536b96f38e5ba3f3575fab4e89f6c0e1bc5b#commitcomment-119688700)



## **Root folder file_id**

**Empty is the root directory**：display all files

**Single folder ID**：Enter the folder you need to display, copy the top link to fill in `/home` behind

![](/img/drivers/dropbox/folder_id.png)




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