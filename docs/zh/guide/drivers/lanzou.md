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

# 蓝奏云盘

蓝奏网盘挂载有两种**模式（类型）**，分别的 **cookie** 和 **链接** 

- cookie：可以显示网盘所有文件，但是需要提供网盘的cookie
- 链接：只能显示链接里面的内容（不需要提供cookie就可以挂载）



⚠推荐使用**cookie**的方式挂载，用链接模式总是会抽风不知道怎么回事突然提示：**failed get objs:failed to list objs: not find data**



## 刷新令牌

登录自己的 [**蓝奏云盘**](https://pc.woozooo.com/) 账号，然后F12打开开发者模式，就能找到 `Cookie`，没有具体的，例如图片中左侧的随便点一个然后有右图蓝色部分的 `Cookie` 即可.

![lanzou](/img/drivers/lanzou/lanzou1.png)

## 根文件夹ID

蓝奏云盘根目录ID，默认为`-1`

- **其他文件夹ID**
  - 两种获取方式（看下图即可）
  - <img src="/img/drivers/lanzou/lanzou2.gif" alt="LanZou folder_id" style="zoom:50%;" />

## 分享链接和分享密码

- **分享链接**：在蓝奏云盘内随便生成一个分享链接
  - 小提示 ：链接里面的 **lanzouX**，最后这个默认的 **X**内容有时候有些地区打不开，可以自己更换一下试试看比如换成 i,x,u,t 等等等反正好多自己试试看就行.
- **分享密码** ：链接的密码



## Repair file info

需要 **WebDav** 服务的，需要打开它



## 挂载填写示例

![lanzou](/img/drivers/lanzou/lanzou3.png)



### 默认使用的下载方式

```mermaid
---
title: 默认使用的那种下载方式？
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
    click a1 "../drivers/common.md#webdav-策略" _blank
    click b1 "../drivers/common.md#webdav-策略" _blank
    click c1 "../drivers/common.md#webdav-策略" _blank
```
