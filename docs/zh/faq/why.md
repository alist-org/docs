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

### 为什么我在安装/升级后打开网页时出现错误`failed get storage: can't find storage with rawPath: /`？

因为你还没有添加存储。

### 为什么我在 v2 中丢失了所有存储空间

新版本（V3 及更高版本）与 V2 不兼容，因此您需要重新添加存储。

### 为什么我在日志中看到 `failed get aria2 version` 错误？

因为你没有安装 aria2 或者 aria2 的设置不对。不用担心，它不会影响Alist的使用，你可以忽略它。

### 为什么我不能预览视频或音频文件？

- 需要浏览器支持的编码
- 一般浏览器不支持h265编码视频
- 一般浏览器不支持ac3编码的音频

特别是对于 Safari：

- 对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直接链接返回的content-type是application/octet-stream，那么Safari就无法播放了。（PS：为什么AliyunDirve可以在Safari中播放？因为官网的视频播放不是使用的下载链接，但经过 AliyunDirve 转码后）

### 为什么我不能预览office文件？

对于 microsoft office 在线查看器，您需要：

- 外部网络访问
- 文档访问地址不能直接使用ip，需要通过域名访问，端口必须是80/443端口
- 文件的格式（必须是以下之一）：
- 单词：docx、docm、dotm、dotx
- Excel：xlsx、xlsb、xls、xlsm
- PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm
- 文档大小：Word 和 PowerPoint 文档必须小于 10 兆字节； Excel 必须小于 5 MB

### 为什么我不能预览 PDF 文件？

- 我们使用 `pdf.js` 作为默认的 PDF 预览器。所以它需要https + cors。
- https为自己打开，反向代理或在配置文件中提供证书
- cors提供对相关云盘的支持，不能自行修改，除非开启代理使用程序传输

### 为什么无法打包下载？

与 pdf 预览相同，需要 https+cors 支持，并且：

- AList使用浏览器的stream API来支持包下载，所以需要浏览器支持。通常，它被新的浏览器支持，例如 Chrome、Firefox、Edge 等。

### 为什么我上传文件时显示`Uploading in backend`？

- 本程序所有上传均使用服务器传输

### 为什么我在上传文件时得到 `413` http 代码？

- 如果使用反向代理，可能需要在配置中指定最大上传文件大小和超时时间
- 否则可能会出现上传成功但前端超时无响应的情况

### 为什么添加了`AliyunDirve`存储后下载不了文件，出现`InvalidArgument`错误？

- 由于推荐人限制，如果您不打开任何代理，则必须使用移动令牌。
