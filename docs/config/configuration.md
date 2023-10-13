---
# This is the title of the article
title: Configuration file
# This is the icon of the page
icon: iconfont icon-json
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
After modifying the configuration file, restart AList for changes to take effect

- Windows/MacOS: `<alist dir>/data/config.json`
- Linux: one-click script directory, `/opt/alist/data/config.json` or `<alist dir>/data/config.json`
- Docker: `<docker container dir>/data/config.json`
- openwrt: modify config on server if using `luci-app-alist` , otherwise `<alist dir>/data/config.json`
- Other: `<alist dir>/data/config.json`

:::

```json
{
  "force": false,
  "site_url": "",
  "cdn": "",
  "jwt_secret": "random_generated",
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
    "address": "0.0.0.0",
    "http_port": 5244,
    "https_port": -1,
    "force_https": false,
    "cert_file": "",
    "key_file": "",
    "unix_file": "",
    "unix_file_perm": ""
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
  "delayed_start": 0,
  "max_connections": 0,
  "tls_insecure_skip_verify": true
}
```

## Field Explanation

### **force**

By default AList will read the configuration from environment variables, set `force` to `true` to force the program to read config from the configuration file.

### **site_url**

The address of your AList server, such as `https://pan.nn.ci`. This address is essential for some features, and thus thry may not work properly if unset:

- thumbnailing `LocalStorage`
- previewing site after setting web proxy
- displaying download address after setting web proxy
- reverse-proxying to site sub directories
- ...

Do not include the slash \(`/`\) at the end of the address. For example:

```json
# correct:
"site_url": "https://al.nn.ci",
# incorrect (exceptions occur):
"site_url": "https://al.nn.ci/",
```

### **cdn**

The address of the CDN. Included `$version` values will be dynamically replaced by the version of AList. Existing dist resources are hosted on both npm and GitHub, which can be found at:

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/web-dist

Thus it is possible to use any npm or GitHub CDN path for this field. For example:

- https://registry.npmmirror.com/alist-web/$version/files/dist/
- https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- https://unpkg.com/alist-web@$version/dist/
- https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/
- https://cdn1.tianli0.top/npm/alist-web@$version/dist/
- https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/
- https://npm.elemecdn.com/alist-web@$version/dist/
- https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/
- https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/

Keep empty to use local dist resources.

### **jwt_secret**

The secret used to sign the JWT token, randomly generated on first run.

### **token_expires_in**

User login expiration time, in hours.

### **database**

The database configuration, which is by default `sqlite3`. Available options are `sqlite3`, `mysql` and `postgres`.

- The database options do not need to be modified if using `sqlite3`.

```json
  "database": {
    "type": "sqlite3",  //database type
    "host": "",         //database host
    "port": 0,          //database port
    "user": "",         //database account
    "password": "",     //database password
    "name": "",         //database name
    "db_file": "data\\data.db",     //Database location, used by sqlite3
    "table_prefix": "x_",           //database table name prefix
    "ssl_mode": ""      //To control the encryption options during the SSL handshake, the parameters can be searched by themselves, or check the answer from ChatGPT below
  },
```

:::: details Expand to view details of `ssl_mode`

Leave blank if you do not understand what this is; no effective help can be given easily.

---

In MySQL, the `ssl_mode` parameter is used to specify the authentication mode of the SSL connection. Here are a few common options:

- `DISABLED`: Disable SSL connections.
- `PREFERRED`: Use an SSL connection if server has SSL enabled; otherwise use a normal connection.
- `REQUIRED`: Must use SSL connection, fail if the server does not support SSL connection
- `VERIFY_CA`: Must use SSL connection and verify the authenticity of the server certificate.
- `VERIFY_IDENTITY`: must use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.

MySQL 5.x and 8.x are also different. If you use the free/fee database provided by the service provider, the service provider will have documentation. You must know the database you deploy yourself.

---

In PostgreSQL, the `ssl_mode` parameter is used to specify how the client uses SSL connections. Here are a few common options:

- `disable`: Disable SSL connections.
- `allow`: SSL connections are allowed, but not required.
- `prefer`: If the server has SSL enabled, use an SSL connection; otherwise use a normal connection.
- `require`: Must use SSL connection, if the server does not support SSL connection, the connection will fail.
- `verify-ca`: Must use SSL connection and verify the authenticity of the server certificate.
- `verify-full`: MUST connect using SSL and verify the authenticity and name of the server certificate matches the connected hostname.

---

::: right

:warning::warning:**The above parameters are from ChatGPT, the authenticity/practicability/accuracy has not been verified**:warning::warning:

:::

::::

### **scheme**

The scheme configuration, if you want to use https, you can set this field.

- Fill in the example: Remember to throw the certificate file into the data directory to be recognized~

```json
  "scheme": {
    "address": "0.0.0.0",   // The http/https address to listen on, default `0.0.0.0`
    "http_port": 5244,      // The http port to listen on, default `5244`, if you want to disable http, set it to `-1`
    "https_port": -1,       // The https port to listen on, default `-1`, if you want to enable https, set it to non `-1`
    "force_https": false,   // Whether the HTTPS protocol is forcibly, if it is set to True, the user can only access the website through HTTPS
    "cert_file": "data\\cert.crt",  // Path of cert file
    "key_file": "data\\key.key",    // Path of key file
    "unix_file": "",        // Unix socket file path to listen on, default empty, if you want to use unix socket, set it to non empty
    "unix_file_perm": ""    // Unix socket file permission, set to the appropriate permissions
  },
```

### **temp_dir**

The temporary directory, default `data/temp`

::: danger
temp_dir is a temporary folder exclusive to alist. In order to avoid program interruption and generate garbage files, it will be cleared every time it starts, so please do not manually put any content in this folder, and do not use this folder and its subfolders when using docker Folders are mapped to folders in use.
:::

### **bleve_dir**

When you use **`bleve`** indexes, the location of the data storage

### **log**

The log configuration, if you want to setup the log level, you can set this field.

```json
  "log": {
    "enable": true,					//Whether to turn on the log record function, the default is to open the status true
    "name": "data\\log\\log.log",	//The path and name of the log file
    "max_size": 10,					//the maximum size of a single log file, in MB. After reaching the specified size, the file will be automatically split.
    "max_backups": 5,				//the number of log backups to keep. Old backups will be deleted automatically when the limit is exceeded.
    "max_age": 28,					//The maximum number of days preserved in the log file, the log file that exceeds the number of days will be deleted
    "compress": false				//Whether to enable log file compression functions. After compression, the file size can be reduced, but you need to decompress when viewing, and the default is to close the state false
  },
```

### **delayed_start**

**Unit: s** (V3.19.0 new function)

Whether to delay start, generally this function is often used in Alist to start the self -startup option

Because sometimes the network connection is slow, the driver that needs to be connected after the Alist is launched is too fast, so that it cannot be opened normally.

### **max_connections**

The maximum number of connections (concurrent) at the same time, the default is 0, that is, unlimited.

- 10 or 20 is recommended for general equipment such as n1
  - Use scenarios (for example, if the picture mode is turned on, the device will crash if the concurrency is not very good)

### **tls_insecure_skip_verify**

Whether to examine the SSL certificate, if there is a problem with the certificate of the website used after opening (such as not including the intermediate certificate, certificate expiration, certificate forgery, etc.), the service will not be available,Close this option, please try to run the program in a safe network environment
