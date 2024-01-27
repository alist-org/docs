---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 35
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

# WebDav

### **Address**

WebDAV root address

### **Username**

username

### **Password**

password

### **Root folder path**
The path of fodler you want to mount, same as join in address

## **OneDrive/SharePoint**

Select the vendor as sharepoint, and support the international version/21Vianet.

For OneDrive/SharePoint, you can obtain the webdav root address through [this tool](https://tool.nn.ci/onedrive/webdav). If you want to mount the specified directory, you can join it later.

The username is the OneDrive account email, and the password is the OneDrive account password.



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