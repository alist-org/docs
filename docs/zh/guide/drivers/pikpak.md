---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 16
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

# PikPak/分享

::: danger

1. `个人Pikpak`：谁发出请求谁能用
   
   
   
   - 例如你在 IP `1.1.1.1`服务器搭建的AList，但是你本人IP是`2.2.2.2`，无法播放下载，或者开启代理中转策略

-----
2. `分享Pikpak`：有大小限制，超出指定文件大小后只能播放40%~50%

   

   - 具体多大文件暂时未知具体数值

:::



## **PikPak挂载**

### **用户名**

邮件地址或者电话号码？

### **密码**

密码

<br/>



### **根文件夹ID**

可以通过 https://mypikpak.com/ 获取，默认为 `root`。

![image.png](/img/drivers/pikpak.png)

<br/>



### **禁用媒体链接**

- **https://github.com/alist-org/alist/issues/4735**

<br/>

### **离线下载**

<Badge text="v3.36.0" type="info" vertical="middle" /> 及以上版本支持在AList调用Pikpak离线下载功能

右下角选择  <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> 离线下载选项选择`Pikpak`

- 支持：`magne`、`http`、 `ed2k` 链接
- 也支持：X、TikTok、Facebook、TG的网址链接

仅支持使用Pikpak离线下载，非Pikpak会提示如下错误，**虽然添加离线下载提示成功但是在后台会提示错误**

- unsupported storage driver for offline download, only Pikpak is supported

![](/img/drivers/offline_download_error.png)

<br/>



## **PikPak分享挂载**

::: warning
~~截止 **2023年2月4日** 挂载分享已被官方河蟹，目前只可以看前4分钟，后续还能不能用等待即可~~ 

~~**v3.12.0修复,这次能活多久未知（20240522）**~~

已知目前pikpak分享只能看40%-50% **（v3.35.0）**

:::


只需要填写  `用户名` ，`密码`，`分享ID` 三项即可 ，**根文件夹ID** 可写可不写，不写默认为root目录（根目录）

- 根文件夹ID：如果是多层目录，你想让哪个目录展示当根目录你就写哪个根目录.
- 分享密码：分享的有密码就写，没有就不写

![pik](/img/drivers/pik/pik1.png)

<br/>



### **批量添加PikPak分享挂载**

使用的软件：**https://github.com/yzbtdiy/alist_batch**

<BiliBili bvid="BV1Ps4y1U7Zu" ratio="16:9" low-quality no-danmaku />

<br/>



## **注意事项**

**Q**：添加存储时提示：**Failed init storage: invalid_account_or_password** 怎么办，我输入的密码的对的

**A**：如果不是账号密码填错，可能是注册的时候使用了Google，FB等第三方快捷注册，虽然看起来账号是谷歌邮箱，但实际上是不能用邮箱登入，而必须使用第三方验证，**Alist** 现在还不支持这种跳转到第三方的验证，**所以你要在账号设置里绑定一个邮箱同时设置一下登录密码**，或者重新注册一个新账号

-----

**Q**：添加挂载时提示：**failed get objs: failed to list objs: Sorry, sharing is not available in the current region**

**A**：因为在国内^PikPak^是禁止访问的，给`AList`使用代理即可，如何让`AList`使用代理[**参考方案之一,此方法仅限于Windows搭建**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist%E5%A6%82%E4%BD%95-%E4%BD%BF%E7%94%A8-%E5%90%83%E5%88%B0-%E4%BB%A3%E7%90%86-proxy)

<br/>



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
