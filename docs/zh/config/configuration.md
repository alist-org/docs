---
# This is the title of the article
title: 配置文件
# This is the icon of the page
icon: json
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### 初始配置

```json
{
  "force": false,
  "address": "0.0.0.0",
  "port": 5244,
  "jwt_secret": "random generated",
  "token_expires_in": 48,
  "site_url": "",
  "cdn": "",
  "database": {
    "type": "sqlite3",
    "host": "",
    "port": 0,
    "user": "",
    "password": "",
    "name": "",
    "db_file": "data/data.db",
    "table_prefix": "x_",
    "ssl_mode": ""
  },
  "scheme": {
    "https": false,
    "cert_file": "",
    "key_file": ""
  },
  "temp_dir": "data/temp",
  "log": {
    "enable": true,
    "name": "log/log.log",
    "max_size": 10,
    "max_backups": 5,
    "max_age": 28,
    "compress": false
  }
}
```

## 字段说明

### force

程序会优先从环境变量中读取配置，设置 `force` 为 `true` 会使程序忽略环境变量强制读取配置文件。

### address

要监听的地址，默认为 0.0.0.0

### port

要监听的端口，默认为 5244

### site_url

你的网站URL，比如`https://pan.nn.ci`，这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如
- 本地存储的缩略图
- 开启web代理后的预览
- 开启web代理后的下载地址
- 反向代理至二级目录
- ...

### cdn

CDN 地址，如果要使用 CDN，可以设置该字段，`$version` 会被替换为 `alist-web` 的实际版本
这是动态的。 现有的 dist 资源托管在 npm 和 GitHub 上，它们的位置是：

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/web-dist

所以你可以使用任何 npm 或 GitHub CDN 作为路径，例如：

- https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- https://unpkg.com/alist-web@$version/dist/
- https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/
- https://cdn1.tianli0.top/npm/alist-web@$version/dist/
- https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/
- https://npm.elemecdn.com/alist-web@$version/dist/

您也可以将其设置为空以使用本地 dist。

### jwt_secret

用于签署 JWT 令牌的密钥，第一次启动时随机生成。

### token_expires_in

用户登录过期时间，单位：小时

### database

数据库配置，默认是 `sqlite3`，也可以使用 `mysql` 或者 `postgres`。

### scheme

协议配置，如果要使用 HTTPS，可以设置该字段。

### temp_dir

程序临时目录，默认 `data/temp`

### log

日志配置，如果要查看详细日志（或禁用它），可以设置该字段。
