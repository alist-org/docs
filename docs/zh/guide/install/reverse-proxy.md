---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: iconfont icon-page
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

> 如果你想使用子目录，参考[这里](../../faq/howto.md#如何对子目录进行反向代理)

:::tip 反向代理非标准端口或启用https后丢失https或端口号/无法播放视频?
你需要通过正确的Host头,请参考 [#726](https://github.com/alist-org/alist/issues/726) [#1159](https://github.com/alist-org/alist/issues/1159) [#2429](https://github.com/alist-org/alist/issues/2429) [#3644](https://github.com/alist-org/alist/issues/3644) [#4181](https://github.com/alist-org/alist/issues/4181) [#4719](https://github.com/alist-org/alist/issues/4719)
:::

## **nginx**

在网站配置文件的 server 字段中添加

```conf
location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
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

如果需要使用HTTP/3，需要将对应`HOST`行修改为：

```conf
proxy_set_header Host $host:$server_port;
```

这样修改后的配置同时也可以兼容HTTP/2及更低版本的请求。

:::warning
如果使用宝塔面板，请务必删除以下默认配置

```conf
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\*\.(js|css)?$
```

并在`/www/server/nginx/conf/proxy.conf`中或对应网站配置文件中设置禁用Nginx缓存，否则默认配置下访问较大文件时Nginx会先尝试将远程文件缓存至本机，导致播放失败

```conf
proxy_cache cache_one; # 删除这一行
proxy_max_temp_file_size 0; #加上这一行
```

:::

## **Apache**

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

## **Caddy**

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

```
## **宝塔设置反向代理示范**

#### 1.登录宝塔面板，添加站点；

![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)

#### 2.修改站点设置；

![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)

#### 3.删除面板默认代码；

![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)

![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)

#### 4.添加反向代理；

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> 如需申请`SSL`证书，可先在`SSL`选项中申请证书，然后在设置反向代理。或者设置反向代理之后，关闭反向代理功能，申请`SSL`证书后再次开启代理。
