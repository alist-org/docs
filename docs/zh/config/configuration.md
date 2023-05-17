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

在填写链接时结尾请勿携带`/`,否则无法使用或其他问题
```json
#正确写法：
"site_url": "https://pan.nn.ci",
#错误写法：
"site_url": "https://pan.nn.ci/",
```

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
- https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/
- https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/

您也可以将其设置为空以使用本地 dist。

### jwt_secret

用于签署 JWT 令牌的密钥，第一次启动时随机生成。

### token_expires_in

用户登录过期时间，单位：小时

### database

数据库配置，默认是 `sqlite3`，也可以使用 `mysql` 或者 `postgres`。

- 如果不使用`MySQL`或者`postgres`，配置文件数据库选项不用修改

```json
  "database": {
    "type": "sqlite3",	//数据库类型
    "host": "",			//数据库地址
    "port": 0,			//数据库端口号
    "user": "",			//数据库账号
    "password": "",		//数据库密码
    "name": "",			//数据库库名
    "db_file": "data\\data.db",		//数据库位置,sqlite3使用的
    "table_prefix": "x_",			//数据库表名前缀
    "ssl_mode": ""		//来控制SSL握手时的加密选项,参数自行搜索，或者查看下方来自ChatGPT的回答
  },
```

:::: details 展开查看`ssl_mode`参数选项

如果不知道如何填，默认空白即可，不用修改，不填不能用的话自行研究，无法提供太多有效的帮助

-----

在MySQL中，`ssl_mode`参数是用于指定SSL连接的验证模式。以下是几种常见的选项：

- `DISABLED`: 禁用SSL连接。
- `PREFERRED`: 如果服务器启用了SSL，则使用SSL连接；否则使用普通连接。
- `REQUIRED`: 必须使用SSL连接，如果服务器不支持SSL连接，则连接失败。
- `VERIFY_CA`: 必须使用SSL连接，并验证服务器证书的可信性。
- `VERIFY_IDENTITY`: 必须使用SSL连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。

MySQL 5.x和8.x也不一样。如果使用服务商提供的免费/收费数据库，服务商会有文档说明。自己部署的数据库那自己肯定知道。

-----

在PostgreSQL中，`ssl_mode`参数用于指定客户端如何使用SSL连接。以下是几种常见的选项：

- `disable`: 禁用SSL连接。
- `allow`: 允许使用SSL连接，但不需要。
- `prefer`: 如果服务器启用了SSL，则使用SSL连接；否则使用普通连接。
- `require`: 必须使用SSL连接，如果服务器不支持SSL连接，则连接失败。
- `verify-ca`: 必须使用SSL连接，并验证服务器证书的可信性。
- `verify-full`: 必须使用SSL连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。

----

::: right

:warning::warning:**以上参数来自ChatGPT，未验证真实性/实用性/准确性:warning:**:warning:

:::

::::

### scheme

协议配置，如果要使用 HTTPS，可以设置该字段。

- 填写示例：记得把证书文件丢到data目录里面才会识别到喔~

```json
  "scheme": {
    "https": true,
    "cert_file": "data\\public.crt",
    "key_file": "data\\key.key"
  },
```

### temp_dir

程序临时目录，默认 `data/temp`

::: danger
temp_dir为alist独占的临时文件夹，为避免程序中断产生垃圾文件会在每次启动时清空，故请不要手动在此文件夹内放置任何内容，也不要在使用docker时将此文件夹及其子文件夹映射至正在使用的文件夹。
:::

### log

日志配置，如果要查看详细日志（或禁用它），可以设置该字段。

### max_connections

同时最多的连接数(并发)，默认为0即不限制.

- 对于一般的设备比如n1推荐10或者20
  - 使用场景（例如打开图片模式会并发不是很好的设备就会崩溃）

### tls_insecure_skip_verify

是否检查SSL证书，开启后如使用的网站的证书出现问题（如未包含中级证书、证书过期、证书伪造等），将不能使用该服务，关闭该选项请尽量在安全的网络环境下运行程序

