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
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 超星星小组盘

超星星小组盘也是隶属于超星星，登录超星星后在左侧侧边栏下方能看到一个小组

官网链接：**https://i.chaoxing.com**

<br/>



### **用户名 密码**

超星星的帐号密码

<br/>



### **Bbsid**

按照下面示例流程获取

![](/img/drivers/chaoxing/chaoxing_bbsid.png)

<br/>



### **根文件夹ID**

默认为`-1`，其它子文件夹ID获取方式看下图示例

- 在请求中搜索关键词`getResourceList`，为了方便我们可以直接搜索 `list`也可以看到，然后我们进入我们需要挂载的文件夹，进文件夹后再去看请求就可以找到`子文件夹ID`

![](/img/drivers/chaoxing/chaoxing_folder_id.gif)

<br/>



### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

