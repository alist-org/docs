---
# This is the icon of the page
icon: iconfont icon-set
# This control sidebar order
order: 7
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 元信息

元信息内的配置仅对`访客`生效，如果想让新建的普通用户有相应的权限请前往 `用户`-->`用户账号` 进行修改相对的权限

## **路径**

此元信息生效的路径

<br/>



## **密码**

访问此路径需要密码

- 元信息密码在使用`WebDav`访问时不会生效

<br/>



## **写入**

允许访客新建目录、新文件和上传文件。

<br/>



## **隐藏**

此路径要隐藏的对象，每行一个正则表达式（在 `Golang` 中）

- 元信息隐藏在使用`WebDav`访问时可以生效

<br/>



## **说明**

进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。

- 在列表底部显示

- 自动渲染的文件名为：**`readme.md`**

<br/>



## **顶部说明**

（v3.29.0 新增）进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。

- 在列表顶部显示
- 自动渲染的文件名为：**`top.md`**
  - 可以在列表中不显示文件，例如`readme.md`不在列表显示
  - 后台 --> 设置 --> 全局 --> 隐藏文件 --> 换行添加 `/\/top.md/i`

<br/>



## **应用到子文件夹**

将此元应用于特定路径的子文件夹

<br/>





## :warning: Tips

> 关于隐藏，没有权限的用户可以搜索到隐藏的文件夹/文件，解决方案

:white_check_mark:如果你要隐藏某个文件夹內的文件夹，要单独新建一条元信息，路径选择我们要隐藏的文件夹，隐藏如果你要隐藏所有直接写 `.*`即可

:x: 不可以直接在选择根目录`/`的元信息內填写，然后隐藏位置填写我们要隐藏的文件夹，错误案例[查看详情](https://github.com/alist-org/alist/issues/4494)

![](/img/advanced/hide-tips.png)
