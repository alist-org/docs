---
# This is the icon of the page
icon: state
# This control sidebar order
order: 1
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

# 通用项

### 挂载路径

唯一标识，即要挂载到的位置，如果要挂载到根目录，就是`/`

### 顺序

当有多个账户时，用于排序，越小越靠前

### 备注

随便你想填什么，只是提醒你这个存储是什么

### 缓存过期

目录结构的缓存时间。

### Web代理

网页预览、下载和直接链接是否通过中转。

### Webdav 策略

- 302 重定向：重定向到真实链接
- 使用代理 URL：重定向到代理 URL
- 本机代理：直接通过本地中转返回数据（最佳兼容性）

### 下载代理URL

开启代理时不填写此字段，默认使用本机进行传输。提供了两种代理方式：

:::tabs
@tab cloudflare workers
可以使用`cloudflare workers`做代理，这里填写`cloudflare workers`地址即可。
工人代码可以在 https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js 找到。 在：

- ADDRESS: 你的Alist地址，必须加上协议头，后面不能跟/。 如`https://pan.nn.ci`；
- TOKEN: 您可以在 Alist 管理页面中进入“其他设置”得到。

@tab 通用二进制
您也可以使用另一台机器进行代理，下载程序在 https://github.com/alist-org/alist-proxy/releases

`./alist-proxy -help` 看看如何使用它。

:::

你甚至可以开发自己的代理程序，一般步骤是：

- 下载时会请求`PROXY_URL/path?sign=sign_value`
- 在代理程序中验证sign，sign的计算方法为：

```js
const name = path.split("/").pop();
const sign = hmac(name, TOKEN);
```

- 验证签名正确后，请求`HOST/api/fs/link`，可以得到文件的URL和要携带的请求头
- 使用信息请求和返回

### 排序相关
- 排序方式：按什么排序
- 排序方向：排序方向是升序还是降序
:::info
有些驱动器使用自己的排序方法，可能会有所不同。
:::

### 提取文件夹

- 提取到前面：排序时将所有文件夹放在前面
- 提取到后面：排序时将所有文件夹放在后面
