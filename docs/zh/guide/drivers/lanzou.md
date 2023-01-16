---
# This is the icon of the page
icon: state
# This control sidebar order
order: 19
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

![Lanzou Cookie](https://pic.rmb.bdstatic.com/bjh/8a00dc89a7a5dde373f89440a24c03c1.png)



## 根文件夹ID

蓝奏云盘根目录ID，默认为`-1`

- **其他文件夹ID**
  - 两种获取方式（看下图即可）
  - <img src="https://pic.rmb.bdstatic.com/bjh/86cbe731013ac6860c1029544656fa1d.gif" alt="LanZou folder_id" style="zoom:50%;" />



## 分享链接和分享密码

- **分享链接**：在蓝奏云盘内随便生成一个分享链接
  - 小提示 ：链接里面的 **lanzouX**，最后这个默认的 **X**内容有时候有些地区打不开，可以自己更换一下试试看比如换成 i,x,u,t 等等等反正好多自己试试看就行.
- **分享密码** ：链接的密码



## Repair file info

需要 **WebDav** 服务的，需要打开它



## 挂载填写示例

![Add LanZou](https://pic.rmb.bdstatic.com/bjh/0cbc0b9a0d7022d729f4208f9b0d5b80.png)
