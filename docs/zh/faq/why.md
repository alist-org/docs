---
# This is the title of the article
title: Why
# This is the icon of the page
icon: repair
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### 为什么我在安装/升级后打开网页时出现错误 `failed get storage: can't find storage with rawPath: /`？

因为你还没有添加任何存储。

### 为什么我在 v3 中丢失了所有存储空间

新版本（V3 及更高版本）与 V2 不兼容，因此您需要重新添加存储。

### 为什么我在日志中看到 `failed get aria2 version` 错误？

因为你没有安装 aria2 或者 aria2 的设置不对。不用担心，它不会影响 AList 的使用，你可以忽略它。

### 为什么我在添加新存储时收到错误 “Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path”？

想必错误信息表达的很清楚了。因为 [挂载路径](../guide/drivers/common.md#挂载路径) 是**独一无二**的。  

如果你在添加存储时看到了这个错误，但是你并没有在管理页面看到对应的重复条目，请使用 `Ctrl` +`F5` 强制刷新页面

### 为什么我不能预览视频或音频文件？

- 需要浏览器支持的编码才可以正常预览
- 一般浏览器不支持 H.265 编码视频
- 一般浏览器不支持 AC3 编码的音频

特别是对于 Safari：

- 对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直链返回的 content-type 是 application/octet-stream，那么 Safari 就无法播放了。（PS：为什么 AliyunDrive 可以在 Safari 中播放？因为官网的视频播放不是使用的下载链接，是经过 AliyunDrive 转码后的）

### 为什么我不能预览 Office 文件？

对于 Microsoft Office 在线查看器，您需要：

- 外部网络访问
- 文档访问地址不能直接使用 IP，需要通过域名访问，端口必须是 80/443 端口
- 文件的格式（必须是以下之一）：
- Word：docx、docm、dotm、dotx
- Excel：xlsx、xlsb、xls、xlsm
- PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm
- 文档大小：Word 和 PowerPoint 文档必须小于 10 MB； Excel 必须小于 5 MB

### 为什么我不能预览 PDF 文件？

- 我们使用 `pdf.js` 作为默认的 PDF 预览器。所以它需要 HTTPS + CORS。
- HTTPS 需要自行打开，可以使用反向代理或在配置文件中提供证书
- CORS 由相关云盘提供支持，不能自行修改，除非开启代理功能，使用程序传输

### 为什么无法打包下载？

与 PDF 预览相同，需要 HTTPS 和 CORS 支持，并且：

- AList 使用浏览器的 stream API 来支持打包下载，所以需要浏览器支持。通常这个 API 会被主流浏览器支持，例如 Chrome、Firefox、Edge 等。

### 为什么我上传文件时显示 `Uploading in backend`？

本程序所有上传均使用服务器传输，会消耗服务器流量与对应存储的API通信

### 为什么我在上传文件时得到 HTTP 413 错误？

如果使用反向代理，可能需要在配置中指定最大上传文件大小(`client_max_body_size`)和超时时间

否则可能会出现上传成功但回应被web服务器阻止，导致前端超时无响应的情况

### 为什么添加了 `AliyunDrive` 存储后下载不了文件，出现 `InvalidArgument` 错误？

由于 referer 限制，如果您不打开程序的任何代理中转功能，则必须使用移动端的 `refresh token`

### 为什么上传的件不显示/删除的文件还在/修改根目录不生效？

默认有半个小时的缓存，可以在添加存储页面修改。如果需要立即刷新，在需要刷新的目录点击右下角的刷新按钮即可。

### 为什么我通过在终端输入`./alist admin`获取的密码还是不正确？

检查你运行`./alist admin`和启动alist的目录是否相同。 alist默认会读取你运行程序的当前目录下的配置，所以在不同的目录下运行会导致读取的数据不同。

### 为什么提示 System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

你的油猴答题插件冲突了，关闭了即可[**详情查看点击查看**](https://github.com/alist-org/alist/discussions/2399)

### 两个上传有什么区别?

**1️⃣ stream**直接把文件二进制内容放进body中，这样后端可以使用很少的内存，但是浏览器可能会限制大小因为要一次性把文件读进内存。

**2️⃣ form**是把文件包裹成formdata上传，后端使用的内存会多一些，但是不限制大小。  

### 两个Aria2有什么不同?

1️⃣  后台管理 --> 设置 --> 其他：**这里的Aria2是用于离线下载资源到网盘内**

2️⃣  前端界面 --> 本地设置（右下角齿轮） --> **这里的Aria2是用于将网盘内的资源下载到本地，相当于一种下载方式，人人都可以用不用担心有问题**

- 至于第一个离线下载怎么使用：
  - 例如你想在 **`/天翼云盘/电视剧/测试`** 这个文件夹离线下载点儿资源，哪你就要先在后台填写好 **地址和秘钥信息 ** 再手动进入前端界面的这个文件夹，进去后右下角能看到 **离线下载** 图标（一个磁铁样式），点击后输入你要离线下载的链接即可
  - `说明`：**离线下载，复制，上传** ，都是一样的方式都是先由资源 **下载到服务器的临时文件夹** 再由 **服务器上传到对应的网盘** 

```flow
1=>start: 准备
2=>operation: 下载到临时文件夹
3=>operation: 服务器进行上传
4=>operation: 上传到网盘
5=>end: 完毕

1(right)->2(right)->3(right)->4(right)->5
```

### RaiDrive挂载百度网盘，可以下载文件，不能上传文件。往挂载目录丢文件提示“提示“你需要权限来执行此操作”。这个怎么解决？

Raidrive 是因为上传文件会预先创建一个空文件 而百度网盘不允许创建空文件。
v2可以成功是因为v2会忽略空文件上传。

### 为什么 Terabox 挂载成功了 但是不显示内容？

因为 **`Terabox`** 限制IP，如果你是本机非海外IP访问，是无法访问的，自然不会显示内容。

（可以用海外的机器，如果非得用本机(或者国内的机器)搭建，哪你自己想办法让Alist吃到**proxy**就可以）

可能有用的案例参考：**https://github.com/alist-org/alist/discussions/3026**


### 打开 Alist 提示 System error: TypeError:n.replaceAll is not a function？

你的浏览器内核版本太低，将如下添加到自定义头部即可.

```html
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

如果嫌太慢可以换阿里云

```html
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>  
```

### Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

![11](https://gchat.qpic.cn/gchatpic_new/0/0-0-D72B5BAD55DAE6A3510ADFD2768BAF0F/0)

连续登录输入6次密码错误就会锁定，重启Alist即可重置。

