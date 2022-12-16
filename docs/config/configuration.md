---
# This is the title of the article
title: Configuration file
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

### Initial config

```json
{
  "force": false,
  "address": "0.0.0.0",
  "port": 5244,
  "site_url": "",
  "cdn": "",
  "jwt_secret": "random generated",
  "token_expires_in": 48,
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

## Field Description

### force

The program will preferentially read the configuration from the environment variable, set `force` to `true` to force the program to read the configuration file.

### address

The address to listen on, default `0.0.0.0`

### port

The port to listen on, default `5244`

### site_url

The url of your `alist` site, such as `https://pan.nn.ci`.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:
- thumbnail of `LocalStorage`
- Preview after opening web proxy
- The download address after opening the web proxy
- Reverse proxy to sub directory
- ...

### cdn

The CDN address, if you want to use CDN, you can set this field, the `$version` will be replaced with the real version of `alist-web`
This is dynamic and changeable. Existing dist resources are hosted on both npm and GitHub, and their locations are:

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/web-dist

So you can use any npm or github cdn as the path, for example:

- https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- https://unpkg.com/alist-web@$version/dist/
- https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/
- https://cdn1.tianli0.top/npm/alist-web@$version/dist/
- https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/
- https://npm.elemecdn.com/alist-web@$version/dist/

Also you can keep it empty to use local dist.

### jwt_secret

The secret used to sign the JWT token, random generated first time start.

### token_expires_in

User login expiration time, unit: `hours`.

### database

The database configuration, the default is `sqlite3`, you can also use `mysql` or `postgres`.

### scheme

The scheme configuration, if you want to use https, you can set this field.

### temp_dir

The temporary directory, default `data/temp`

### log

The log configuration, if you want to setup the log level, you can set this field.
