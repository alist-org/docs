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

# Reverse proxy
The program listens to port 5244 by default. If you do `reverse proxy`, recommended you set [site_url](../../config/configuration.md#site_url) so that alist can works fine.

> If you want to use a sub folder, refer to [reverse proxy with sub folder](../../faq/howto.md#how-to-reverse-proxy-with-sub-directory)

:::tip Missing https or port / Can't Play video when reverse-proxy non-standard ports or enable https?
You need to passed correct host header, refer to [#726](https://github.com/alist-org/alist/issues/726) [#1159](https://github.com/alist-org/alist/issues/1159) [#2429](https://github.com/alist-org/alist/issues/2429) [#3644](https://github.com/alist-org/alist/issues/3644) [#4181](https://github.com/alist-org/alist/issues/4181) [#4719](https://github.com/alist-org/alist/issues/4719)
:::

### **nginx**
Add in the server field of the website configuration file
```nginx
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

:::warning
If you use the bt.cn, be sure to delete the following default configuration
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .*\.(js|css)?$
:::


Disable Nginx caching in `/www/server/nginx/conf/proxy.conf` or the corresponding website configuration file. Otherwise, with the default configuration, when accessing large files, Nginx will attempt to cache the remote file locally first, resulting in playback failures.
```conf
proxy_cache cache_one; # Remove this line
proxy_max_temp_file_size 0; # Add this line
```

### **Apache**
Add the anti-generation configuration item ProxyPass under the VirtualHost field, such as:
```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

### **Caddy**
Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:
```xml
:80 {
     reverse_proxy 127.0.0.1:5244
}
```

## **Demonstration of Setting up Reverse Proxy in BT Panel**

#### 1.Login to the BT panel and add a new website.

![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)

#### 2.Modify the website settings.

![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)

#### 3.Remove the default panel code.

![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)

![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)

#### 4.Add the reverse proxy.

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> If you need to apply for an `SSL certificate`, you can first apply for the certificate in the `SSL` option, and then set up the reverse proxy. Alternatively, you can set up the reverse proxy first, disable the proxy function, apply for an `SSL` certificate, and then enable the proxy again.