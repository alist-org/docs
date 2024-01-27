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

Dropbox官网：https://www.dropbox.com/



## **获取刷新令牌**

前往：**https://alist.nn.ci/tool/dropbox/request.html**

- 有两种方式，一种是直接使用AList提供的，一种是自己新建应用
  - 获取方式如下（推荐使用第二种^{右侧的}^因为AList提供的已经无法新建用户了）
  - 使用右侧自建`客户端ID`和`秘钥`时，记得授权^{第三张图}^

<div class="image-preview">  
    <img src="/img/drivers/dropbox/dropbox-1.png" alt="使用自带的获取token" title="使用自带的获取token"/>
    <img src="/img/drivers/dropbox/dropbox-2.png" alt="自己新建客户端获取token" title="自己新建客户端获取token"/>
    <img src="/img/drivers/dropbox/dropbox-2-2.png" alt="自己新建客户端获取token" title="自己新建客户端获取token"/>
</div>


- 如果使用自己新建的应用需要填写`客户端ID`和`客户端秘钥`

- 获取方式如上图右图（创建应用链接：**https://www.dropbox.com/developers/apps** ）

- 回调参数链接：**https://alist.nn.ci/tool/dropbox/callback**

参考链接：[**点击查看**](https://github.com/alist-org/alist/commit/cfee536b96f38e5ba3f3575fab4e89f6c0e1bc5b#commitcomment-119688700)



## **根文件夹ID**

空为根目录：挂载全部文件

单文件夹ID：进入你需要挂载的文件夹复制顶部链接将`/home`后面的填写进去即可

![](/img/drivers/dropbox/folder_id.png)




### **默认使用的下载方式**


```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
