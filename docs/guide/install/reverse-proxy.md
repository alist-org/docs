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

# Reverse proxy
The program listens to port 5244 by default. If you do `reverse proxy`, recommended you set [site_url](../../config/configuration.md#site_url) so that alist can works fine.

### nginx
Add in the server field of the website configuration file
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
If you use the bt.cn, be sure to delete the following default configuration
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .*\.(js|css)?$
:::


### Apache
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

### Caddy
Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:
```xml
:80 {
     reverse_proxy 127.0.0.1:5244
}
```