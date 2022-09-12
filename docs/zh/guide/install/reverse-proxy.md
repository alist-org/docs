---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: page
# This control sidebar order
order: 11
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Install
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 反向代理

程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。

### nginx

在网站配置文件的 server 字段中添加

```nginx
location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

:::warning
如果使用bt.cn，请务必删除以下默认配置

- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\*\.(js|css)?$
  :::

### Apache

在VirtualHost字段下添加配置项ProxyPass，如：

```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

### Caddy

在Caddyfile文件下添加配置项reverse_proxy，例子：

```xml
:80 {
     reverse_proxy 127.0.0.1:5244
}
```
