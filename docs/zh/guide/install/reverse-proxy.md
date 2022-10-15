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

程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置[site_url](../../config/configuration.md#site_url)，以帮助alist更好的工作。

## nginx

在网站配置文件的 server 字段中添加

```conf
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
如果使用宝塔面板，请务必删除以下默认配置

```conf
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\*\.(js|css)?$
```

:::

## Apache

在 VirtualHost 字段下添加配置项 ProxyPass，如：

```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

## Caddy

在 Caddyfile 文件下添加 reverse_proxy，如：

```
:80 {
  reverse_proxy 127.0.0.1:5244
}
```

如果部署在 443 端口正常使用的服务器上且使用域名进行访问，建议使用这种配置让 Caddy 自动申请证书：

```
example.com {
  reverse_proxy 127.0.0.1:5244
}

将 `example.com` 替换为你自己解析后的域名。
