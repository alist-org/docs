---
# This is the title of the article
title: 为什么
# This is the icon of the page
icon: iconfont icon-repair
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

### **为什么我在安装/升级后打开网页时出现错误 `failed get storage: can't find storage with rawPath: /`？**

因为你还没有添加任何存储，点击底部登录后再次点击管理进入后台在存储页面添加存储。

### **为什么我在 v3 中丢失了所有存储空间**

新版本（V3 及更高版本）与 V2 不兼容，因此您需要重新添加存储。

### **为什么我在日志中看到 `failed get aria2 version` 错误？**

因为你没有安装 aria2 或者 aria2 的设置不对。不用担心，它不会影响 AList 的使用，你可以忽略它。

### **为什么我在添加新存储时收到错误 “Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path”？**

想必错误信息表达的很清楚了。因为 [挂载路径](../guide/drivers/common.md#挂载路径) 是**独一无二**的。  

如果你在添加存储时看到了这个错误，但是你并没有在管理页面看到对应的重复条目，请使用 `Ctrl` +`F5` 强制刷新页面

### **为什么我不能预览视频或音频文件？**

- 需要浏览器支持的编码才可以正常预览
- 一般浏览器不支持 H.265 编码视频
- 一般浏览器不支持 AC3 编码的音频

特别是对于 Safari：

- 对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直链返回的 content-type 是 application/octet-stream，那么 Safari 就无法播放了。（PS：为什么 AliyunDrive 可以在 Safari 中播放？因为官网的视频播放不是使用的下载链接，是经过 AliyunDrive 转码后的）
- 阿里云盘开发平台驱动支持在线播放视频（也仅限于阿里云盘开放平台驱动并且是 **Aliyun Video Previewer** 选项播放器）

### **为什么我不能预览 Office 文件？**

对于 Microsoft Office 在线查看器，您需要：

- 外部网络访问
- 文档访问地址不能直接使用 IP，需要通过域名访问，端口必须是 80/443 端口
- 文件的格式（必须是以下之一）：
- Word：docx、docm、dotm、dotx
- Excel：xlsx、xlsb、xls、xlsm
- PowerPoint：pptx、ppsx、ppt、pps、pptm、potm、ppam、potx、ppsm
- 文档大小：Word 和 PowerPoint 文档必须小于 10 MB； Excel 必须小于 5 MB

### **为什么我不能预览 PDF 文件？**

- 我们使用 `pdf.js` 作为默认的 PDF 预览器。所以它需要 HTTPS + CORS。
- HTTPS 需要自行打开，可以使用反向代理或在配置文件中提供证书
- CORS 由相关云盘提供支持，不能自行修改，除非开启代理功能，使用程序传输

### **为什么无法打包下载？**

与 PDF 预览相同，需要 HTTPS 和 CORS 支持，并且：

- AList 使用浏览器的 stream API 来支持打包下载，所以需要浏览器支持。通常这个 API 会被主流浏览器支持，例如 Chrome、Firefox、Edge 等。

### **为什么我上传文件时显示 `Uploading in backend`？**

本程序所有上传均使用服务器传输，会消耗服务器流量与对应存储的API通信

### **为什么我在上传文件时得到 HTTP 413 错误？**

如果使用反向代理，可能需要在配置中指定最大上传文件大小(`client_max_body_size`)和超时时间

否则可能会出现上传成功但回应被web服务器阻止，导致前端超时无响应的情况

### **为什么添加了 `AliyunDrive` 存储后下载不了文件，出现 `InvalidArgument` 错误？**

由于 referer 限制，如果您不打开程序的任何代理中转功能，则必须使用移动端的 `refresh token`

### **为什么上传的件不显示/删除的文件还在/修改根目录不生效？**

默认有半个小时的缓存，可以在添加存储页面修改。如果需要立即刷新，在需要刷新的目录点击右下角的刷新按钮即可。

### **为什么我通过在终端输入`./alist admin`获取的密码还是不正确？**

检查你运行`./alist admin`和启动alist的目录是否相同。 alist默认会读取你运行程序的当前目录下的配置，所以在不同的目录下运行会导致读取的数据不同。

----

- **这里拿Windows举例**：例如你的Alist文件在 **`D:\Test\Alist\`** 这个文件夹里面，然后你直接在桌面启动了CMD命令运行窗口，然后把D盘里面的Alist拖动到命令运行窗口里面启动，然后它生成的配置文件实际上你现在的目录是在 **`C:\Windows\System32`** 这里（因为CMD默认是在这里），然后你获取密码也是获取了这个文件夹里面的密码，同时呢因为Alist它读取的是和Alist同级目录下的配置文件里面的密码，你去登录密码自然不对。
  - ![faq](/img/faq/alist-admin.png)
- 解决办法：你要到Alist所在的文件夹里面去在启动或者查看密码，例如上面的是在 **`D:\Test\Alist\`** ，你就要手动去这个文件夹里面然后在输入启动命令或者查看密码的命令即可获取正确的密码
  - **Windows**：去Alist所在的目录后在顶部地址栏输入 CMD回车这样然后再使用命令获取密码
    - ![faq](/img/faq/alist-admin.gif)
  - **Linux**：使用CD命令 到Alist所在的目录即可获取正确密码

### **为什么提示 System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat**

你的油猴答题插件冲突了，关闭了即可[**详情查看点击查看**](https://github.com/alist-org/alist/discussions/2399)

### **两个上传有什么区别?**

**1️⃣ stream**直接把文件二进制内容放进body中，这样后端可以使用很少的内存，似乎没有什么其他的缺点。

**2️⃣ form**是把文件包裹成formdata上传，后端使用的内存会多一些，但是不限制大小。  

### **两个Aria2有什么不同?**

1️⃣  后台管理 --> 设置 --> 其他：**这里的Aria2是用于离线下载资源到网盘内**

2️⃣  前端界面 --> 本地设置（右下角齿轮） --> **这里的Aria2是用于将网盘内的资源下载到本地，相当于一种下载方式，人人都可以用不用担心有问题**

- 至于第一个离线下载怎么使用：
  - 例如你想在 **`/天翼云盘/电视剧/测试`** 这个文件夹离线下载点儿资源，哪你就要先在后台填写好 **地址和秘钥信息** 再手动进入前端界面的这个文件夹，进去后右下角能看到 **离线下载** 图标（一个磁铁样式），点击后输入你要离线下载的链接即可
  - `说明`：**离线下载，复制，上传** ，都是一样的方式都是先由资源 **下载到服务器的临时文件夹** 再由 **服务器上传到对应的网盘** 
    - “复制”对于 **部分不需要** 计算Hash值的上传是可以不临时保存的，直接由服务器中转。

```flow
1=>start: 准备
2=>operation: 下载到临时文件夹
3=>operation: 服务器进行上传
4=>operation: 上传到网盘
5=>end: 完毕

1(right)->2(right)->3(right)->4(right)->5
```

### **RaiDrive挂载百度网盘，可以下载文件，不能上传文件。往挂载目录丢文件提示“提示“你需要权限来执行此操作”。这个怎么解决？**

Raidrive 是因为上传文件会预先创建一个空文件 而百度网盘不允许创建空文件。
v2可以成功是因为v2会忽略空文件上传。

### **为什么 Terabox 挂载成功了 但是不显示内容？**

因为 **`Terabox`** 限制IP，如果你是本机非海外IP访问，是无法访问的，自然不会显示内容。

（可以用海外的机器，如果非得用本机(或者国内的机器)搭建，哪你自己想办法让Alist吃到**proxy**就可以）

可能有用的案例参考：**https://github.com/alist-org/alist/discussions/3026**


### **打开 Alist 提示 System error: TypeError:n.replaceAll is not a function？**

你的浏览器内核版本太低，将如下添加到自定义头部即可.

```html
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

如果嫌太慢可以换阿里云

```html
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>  
```

### **Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.**

![faq](/img/faq/error.png)

连续登录输入6次密码错误就会锁定，重启Alist即可重置。

### **添加文件上传时，有一个“添加为任务“的选项，是做什么的?**

- 勾选后上传到服务器(搭建Alist的机器)，再由服务器上传时到网盘时后台似乎能看到（好像是这样的）
- 未勾选不会看到，具体的大家可以看下图应该能看出什么问题.

![faq](/img/faq/add.jpeg)

### **登陆时要求输入OTP代码，请问是什么原因?**

你是不是在登录别人的账号？如果是自己的请输入2FA(两步验证)验证码

什么？不知道验证码？[**点击查看这篇说明**](../guide/advanced/2fa.md)

### **使用 **`sqlite3`** 发现 data 文件夹里面出现 data.db-shm、data.db-wal 两个多的文件**

[**点击查看详细说明**](https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases)

### **想让游客登录后才能看到内容怎么设置?**

以下三种版本总有一款适合你 快速速食用吧！！

1. 将  **`guest`** 用户看到的目录 指向一个空文件夹，然后写一个readme说明，别问怎么弄自行操作[点击查看](#如何新建一个完全空白的文件夹)
2. 在元信息直接将根目录加密码
3. 直接将  **`guest`** 用户停用，这样会强制跳转到登录页面（3.10.1及以上版本）
   - 自行寻找办法 欢迎提供新的办法~~

### **百度云盘非官方下载报错出现"hit black userlist , hit illeage dlna"**

应该是和谐修复了，但是接口发现者说等待24小时试试看，如果还是不行就是真的和谐修复了。

```json
{"error_code":31329,"error_msg":"hit black userlist , hit illeage dlna","request_id":8942439159334999112}
```

### **如何新建一个完全空白的文件夹**

两种方法

1. 挂载一个本地存储，选择文件夹里面是空的就可以
2. 选择虚拟存储直接将 =="文件数量" "文件夹数量"== 改成0 保存即可弹出的界面直接忽略
   - **虚拟存储**是做什么的？一般是测试的时候用的 正常生产环境不懂别乱用....

空文件夹怎么加 **`Readme`** 说明

	1. 选择本地存储的话可以考虑丢一个 Readme.md 文件进去，要是有更新但是刷新的慢，嫌慢用第二条办法
	1. 元信息 选择这个文件夹，下面有说明自己写就行

建这个空白文件夹有啥用？可以配合[**想让游客登录后才能看到内容怎么设置的第一条办法使用**](#想让游客登录后才能看到内容怎么设置)使用

### **lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)或者 accept: function not implemented**

考虑使用 **musl** 版本作为替代，因为在您的平台上的 **glibc** 版本太低

参考说明：[#2295](https://github.com/alist-org/alist/discussions/2295)，[#322](https://github.com/alist-org/alist/issues/322#issuecomment-1010601181)

### **现在文件后面多了个 sign 的参数是干嘛的？**

加密了为了账号安全一些，查看详情可以[点击查看](../config/global.md#签名所有)

### **添加阿里云盘(分享)时提示 提示Post "https://auth.aliyundrive.com/v2/account/token": net/http: TLS handshake timeout**

原因：VPS在中国大陆境外，且启用了IPv6
解决方法：
方法一：在vps的hosts中添加以下三条并重启网络或者重启vps

- 47.94.245.197 api.aliyundrive.com

- 47.94.245.197 auth.aliyundrive.com

- 121.89.3.30 cn-beijing-data.aliyundrive.net

方法二：关闭并且禁用vps的IPv6

### **123云盘挂载时出现  json: cannot unmarshal string into Go struct field TokenResp.data of type struct { Token string "json:\"token\"" }**

![faq](/img/faq/123error.png)

大概率是你的这台搭建Alist的设备 暂时被 拉黑，冻结，封禁，限制了。先不要挂载了，等几个小时再试试看或者等一天

（以上问题已经经过测试得出的结论）

### **为何 PikPak 下载文件不显示文件名？**
因为 PikPak 的服务器在 content-disposition 头中没有设置文件名，所以这是 PikPak 的问题 而不是 AList，故无法解决

### **如何查询自己的AList版本号**

1. 使用命令 `alist version`，控制台会输出
2. AList后台 --> 设置 --> 站点 --> `版本`选项

为什么更新后还是旧版的AList，一般遇到这个问题的都是docker，可以[**参考这个 下面提到的QA回答**](../guide/install/docker.md#docker安装怎么更新)

### **AList的下载"Download"选项突然空白,没有内容**

检查你的插件，是否有广告拦截插件，例如：**AdGuard**等其他的

通过控制台发现"**https://g.alicdn.com/IMM/office-js/1.1.5/aliyun-web-office-sdk.min.js**" 被拦截了，

也许拦截了其它链接，手动将被拦截域名添加到白名单或者关闭插件，也可能是插件抽风了

![faq](/img/faq/download.png)

### **为什么文本文件乱码?**

仅支持utf-8编码。相关: [#4131](https://github.com/alist-org/alist/issues/4131)
