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

### **Initial config**

::: tip
After modifying the configuration file in `config.json`, you need to restart AList to take effect
:::

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
    "db_file": "data\\data.db",
    "table_prefix": "x_",
    "ssl_mode": ""
  },
  "scheme": {
    "https": false,
    "cert_file": "",
    "key_file": ""
  },
  "temp_dir": "data\\temp",
  "bleve_dir": "data\\bleve",
  "log": {
    "enable": true,
    "name": "data\\log\\log.log",
    "max_size": 10,
    "max_backups": 5,
    "max_age": 28,
    "compress": false
  },
  "max_connections": 0,
  "tls_insecure_skip_verify": false
}
```

## Field Description

### **force**

The program will preferentially read the configuration from the environment variable, set `force` to `true` to force the program to read the configuration file.

### **address**

The address to listen on, default `0.0.0.0`

### **port**

The port to listen on, default `5244`

### **site_url**

The url of your `alist` site, such as `https://pan.nn.ci`.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:
- thumbnail of `LocalStorage`
- Preview after opening web proxy
- The download address after opening the web proxy
- Reverse proxy to sub directory
- ...

Please do not include `/` at the end of the URL link, refer to the following example, otherwise the above function will also not be available or exceptions will occur

```json
# Correct way of writing:
"site_url": "https://pan.nn.ci",
# Wrong way of writing:
"site_url": "https://pan.nn.ci/",
```

### **cdn**

The CDN address, if you want to use CDN, you can set this field, the `$version` will be replaced with the real version of `alist-web`
This is dynamic and changeable. Existing dist resources are hosted on both npm and GitHub, and their locations are:

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/web-dist

So you can use any npm or github cdn as the path, for example:

- https://registry.npmmirror.com/alist-web/$version/files/dist/
- https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- https://unpkg.com/alist-web@$version/dist/
- https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/
- https://cdn1.tianli0.top/npm/alist-web@$version/dist/
- https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/
- https://npm.elemecdn.com/alist-web@$version/dist/

Also you can keep it empty to use local dist.

### **jwt_secret**

The secret used to sign the JWT token, random generated first time start.

### **token_expires_in**

User login expiration time, unit: `hours`.

### **database**

The database configuration, the default is `sqlite3`, you can also use `mysql` or `postgres`.

- If you do not use `MySQL` or `postgres`, the configuration file database options do not need to be modified

```json
  "database": {
    "type": "sqlite3",	//database type
    "host": "",			//database host
    "port": 0,			//database port
    "user": "",			//database account
    "password": "",		//database password
    "name": "",			//database name
    "db_file": "data\\data.db",		//Database location, used by sqlite3
    "table_prefix": "x_",			//database table name prefix
    "ssl_mode": ""		//To control the encryption options during the SSL handshake, the parameters can be searched by themselves, or check the answer from ChatGPT below
  },
```

:::: details Expand to view `ssl_mode` parameter options

If you don’t know how to fill in, fill in the default blank, no need to modify, if you can’t use it if you don’t fill it in, do your own research, and you can’t provide much effective help

-----

In MySQL, the `ssl_mode` parameter is used to specify the authentication mode of the SSL connection. Here are a few common options:

- `DISABLED`: Disable SSL connections.
- `PREFERRED`: If the server has SSL enabled, use an SSL connection; otherwise use a normal connection.
- `REQUIRED`: Must use SSL connection, if the server does not support SSL connection, the connection will fail.
- `VERIFY_CA`: Must use SSL connection and verify the authenticity of the server certificate.
- `VERIFY_IDENTITY`: must use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.

MySQL 5.x and 8.x are also different. If you use the free/fee database provided by the service provider, the service provider will have documentation. You must know the database you deploy yourself.

-----

In PostgreSQL, the `ssl_mode` parameter is used to specify how the client uses SSL connections. Here are a few common options:

- `disable`: Disable SSL connections.
- `allow`: SSL connections are allowed, but not required.
- `prefer`: If the server has SSL enabled, use an SSL connection; otherwise use a normal connection.
- `require`: Must use SSL connection, if the server does not support SSL connection, the connection will fail.
- `verify-ca`: Must use SSL connection and verify the authenticity of the server certificate.
- `verify-full`: MUST connect using SSL and verify the authenticity and name of the server certificate matches the connected hostname.

----

::: right

:warning::warning:**The above parameters are from ChatGPT, the authenticity/practicability/accuracy has not been verified**:warning::warning:

:::

::::

### **scheme**

The scheme configuration, if you want to use https, you can set this field.

- Fill in the example: Remember to throw the certificate file into the data directory to be recognized~

```json
  "scheme": {
    "https": true,
    "cert_file": "data\\public.crt",
    "key_file": "data\\key.key"
  },
```

### **temp_dir**

The temporary directory, default `data/temp`

::: danger
temp_dir is a temporary folder exclusive to alist. In order to avoid program interruption and generate garbage files, it will be cleared every time it starts, so please do not manually put any content in this folder, and do not use this folder and its subfolders when using docker Folders are mapped to folders in use.
:::

### **log**

The log configuration, if you want to setup the log level, you can set this field.

### **max_connections**

The maximum number of connections (concurrent) at the same time, the default is 0, that is, unlimited.

- 10 or 20 is recommended for general equipment such as n1
   - Use scenarios (for example, if the picture mode is turned on, the device will crash if the concurrency is not very good)

### **tls_insecure_skip_verify**

Whether to examine the SSL certificate, if there is a problem with the certificate of the website used after opening (such as not including the intermediate certificate, certificate expiration, certificate forgery, etc.), the service will not be available,Close this option, please try to run the program in a safe network environment
