---
# This is the title of the article
title: How to
# This is the icon of the page
icon: study
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

### 如何为文件/文件夹添加密码？

添加 [meta](../guide/advanced/meta.md) 记录。

### 如何使用子目录进行反向代理？

使用 nginx 反向代理到 https://nn.ci/alist 的示例：

- 正常安装
- 将 [Api url](../config/site.md#api-url) 设置为 `https://nn.ci/alist`, [Base path](../config/site.md#base-path) 到 `alist` 并点击保存按钮
- 在 nginx 中添加反向代理记录

```nginx
location /alist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

### 忘记密码怎么办？

如果您是站点的所有者，您可以通过在终端中运行`./alist admin` 来获取管理员信息。
否则，您可以要求所有者重置密码。

### 如何修改监听端口 ​

参考[config](../config/configuration.md#port)

### 如何更新

除了 changelog 中标注的不兼容版本，可以直接替换二进制文件进行更新。
对于 docker 用户，只需删除旧容器并拉取新图像，然后运行它。

### 如何允许访客上传文件

添加一个 [meta](../guide/advanced/meta.md) 记录，并打开 `write` 字段。

### 如何去掉底部的`powered_by`？​

请尊重开发者的劳动，谢谢。如果你真的想删除它，你可以使用自定义 css 来隐藏它。

### 添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​

可能是触发了防控。更改密码后，再次添加。
