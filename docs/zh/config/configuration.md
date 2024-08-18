---
# This is the title of the article
title: 配置文件
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

### 初始配置

::: tip
`config.json`内配置文件修改后都需要重启 AList 才会生效

- Windows/Mac：和 AList 同级文件夹內的 `data/config.json`
- Linux：一键脚本路径,、/opt/alist/`data/config.json`，手动安装 /xx 路径/`data/config.json`
- Docker：进入 Docker 容器内`data/config.json`
- openwrt：如果使用的是 `luci-app-alist`,请在网页修改,其他自行找到 AList 执行文件同级目录`data/config.json`
- 其他：找到 AList 同级文件夹內的 `data/config.json`

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
    "ssl_mode": "",
    "dsn": ""
  },
  "meilisearch": {
    "host": "http://localhost:7700",
    "api_key": "",
    "index_prefix": ""
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
  "dist_dir": "",
  "log": {
    "enable": true,
    "name": "data\\log\\log.log",
    "max_size": 50,
    "max_backups": 30,
    "max_age": 28,
    "compress": false
  },
  "delayed_start": 0,
  "max_connections": 0,
  "tls_insecure_skip_verify": true,
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": true
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": true
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": true
    }
  },
  "cors": {
    "allow_origins": [
      "*"
    ],
    "allow_methods": [
      "*"
    ],
    "allow_headers": [
      "*"
    ]
  },
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  }
}
```

## 字段说明

### **force**

程序会优先从环境变量中读取配置，设置 `force` 为 `true` 会使程序忽略环境变量强制读取配置文件。

<br/>



### **site_url**

你的网站 URL，比如 `https://pan.nn.ci`，这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如

- 本地存储的缩略图
- 开启 web 代理后的预览
- 开启 web 代理后的下载地址
- 反向代理至二级目录
- ...

URL 链接结尾请勿携带 `/` ，参照如下示例，否则也将无法使用上述功能或出现异常

```json
# 正确写法：
"site_url": "https://al.nn.ci",
# 错误写法：
"site_url": "https://al.nn.ci/",
```

<br/>



### **cdn**

CDN 地址，如果要使用 CDN，可以设置该字段，`$version` 会被替换为 `alist-web` 的实际版本
这是动态的。 现有的 dist 资源托管在 npm 和 GitHub 上，它们的位置是：

- https://www.npmjs.com/package/alist-web
- https://github.com/alist-org/web-dist

所以你可以使用任何 npm 或 GitHub CDN 作为路径，例如：

- https://registry.npmmirror.com/alist-web/$version/files/dist/
- https://cdn.jsdelivr.net/npm/alist-web@$version/dist/
- https://unpkg.com/alist-web@$version/dist/
- https://cdn.jsdelivr.net/gh/alist-org/web-dist@$version/dist/
- https://cdn1.tianli0.top/npm/alist-web@$version/dist/
- https://cdn1.tianli0.top/gh/alist-org/web-dist@$version/dist/
- https://npm.elemecdn.com/alist-web@$version/dist/
- https://jsd.onmicrosoft.cn/npm/alist-web@$version/dist/
- https://jsd.onmicrosoft.cn/gh/alist-org/web-dist@$version/dist/

您也可以将其设置为空以使用本地 dist。

<br/>



### **jwt_secret**

用于签署 JWT 令牌的密钥，第一次启动时随机生成。

<br/>



### **token_expires_in**

用户登录过期时间，单位：小时

<br/>



### **database**

数据库配置，默认是 `sqlite3`，也可以使用 `mysql` 或者 `postgres`。

- 如果不使用 `MySQL` 或者 `postgres`，配置文件数据库选项不用修改

```json
  "database": {
    "type": "sqlite3",  //数据库类型
    "host": "",         //数据库地址
    "port": 0,          //数据库端口号
    "user": "",         //数据库账号
    "password": "",     //数据库密码
    "name": "",         //数据库库名
    "db_file": "data\\data.db",     //数据库位置,sqlite3使用的
    "table_prefix": "x_",           //数据库表名前缀
    "ssl_mode": "",     //来控制SSL握手时的加密选项,参数自行搜索，或者查看下方来自ChatGPT的回答
    "dsn": ""           // https://github.com/alist-org/alist/pull/6031
  },
```

:::: details 展开查看 `ssl_mode` 参数选项

如果不知道如何填，默认空白即可，不用修改，不填不能用的话自行研究，无法提供太多有效的帮助

---

在 MySQL 中，`ssl_mode` 参数是用于指定 SSL 连接的验证模式。以下是几种常见的选项：

- `DISABLED`: 禁用 SSL 连接。
- `PREFERRED`: 如果服务器启用了 SSL，则使用 SSL 连接；否则使用普通连接。
- `REQUIRED`: 必须使用 SSL 连接，如果服务器不支持 SSL 连接，则连接失败。
- `VERIFY_CA`: 必须使用 SSL 连接，并验证服务器证书的可信性。
- `VERIFY_IDENTITY`: 必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。
- `true`：必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。
- `false`：禁用 SSL 连接（默认）
- `skip-verify`：必须使用 SSL 连接但跳过验证服务器证书
- `preferred`：如果服务器启用了 SSL，则使用 SSL 连接（跳过验证服务器证书）；否则使用普通连接

MySQL 5.x 和 8.x 也不一样。如果使用服务商提供的免费/收费数据库，服务商会有文档说明。自己部署的数据库那自己肯定知道。

---

在 PostgreSQL 中，`ssl_mode` 参数用于指定客户端如何使用 SSL 连接。以下是几种常见的选项：

- `disable`: 禁用 SSL 连接。
- `allow`: 允许使用 SSL 连接，但不需要。
- `prefer`: 如果服务器启用了 SSL，则使用 SSL 连接；否则使用普通连接。
- `require`: 必须使用 SSL 连接，如果服务器不支持 SSL 连接，则连接失败。
- `verify-ca`: 必须使用 SSL 连接，并验证服务器证书的可信性。
- `verify-full`: 必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。

---

::: right

:warning::warning:**以上信息来自 ChatGPT，未验证真实性/实用性/准确性:warning:**:warning:

:::

::::

:::: details 已有数据情况下修改数据库注意事项

1. 如果将`sqlite`数据库改为`mysql`数据库优先推荐使用备份再恢复的方法
2. 如果直接将`sqlite`的数据导入到`mysql`可以查看此视频教程：[查看教程](https://www.bilibili.com/video/BV1iV4y1T7kh)
   - 因为直接导入云盘数据库表时`sqlite`的时间和`mysql`的时间填写方式不同会提示报错 [请查看注意事项如何解决](https://www.bilibili.com/video/BV1iV4y1T7kh?t=343.7)

::::

<br/>



### **meilisearch**

```json
  "meilisearch": {
    "host": "http://localhost:7700",    //使用`meilisearch`的链接，默认使用的是本机
    "api_key": "",                      //请查阅`meilisearch`文档
    "index_prefix": ""                  //请查阅`meilisearch`文档
  },
```

文档链接：https://www.meilisearch.com/docs



<br/>



### **scheme**

协议配置，如果要使用 HTTPS，可以设置该字段。

- 填写示例：记得把证书文件丢到 data 目录里面才会识别到喔~

```json
  "scheme": {
    "address": "0.0.0.0",   // 要监听的 http/https 地址，默认为 0.0.0.0
    "http_port": 5244,      // 监听的 http 端口,默认的 '5244',如果你想禁用 http,将其设置为 '-1'
    "https_port": -1,       // https 端口监听,默认的 '-1',如果你想启用 https,将其设置为非 '-1'
    "force_https": false,   // 是否强制使用 HTTPS 协议,如果设置为 true ,则用户只能通过 HTTPS 访问该网站
    "cert_file": "data\\cert.crt",  // 证书文件路径
    "key_file": "data\\key.key",    // 证书密钥文件路径
    "unix_file": "",         // Unix 监听套接字文件路径,默认的空的,如果你想使用 Unix socket,将其设置为非空
    "unix_file_perm": ""     // Unix 监听套接字文件，设置为合适的权限
  },
```

<br/>



### **temp_dir**

程序临时目录，默认 `data/temp`

::: danger
temp_dir 为 alist 独占的临时文件夹，为避免程序中断产生垃圾文件会在每次启动时清空，故请不要手动在此文件夹内放置任何内容，也不要在使用 docker 时将此文件夹及其子文件夹映射至正在使用的文件夹。
:::

<br/>



### **bleve_dir**

你使用 **`bleve`** 索引时,数据存放的位置

<br/>



### **dist_dir**

如果设置此项，优先使用本前端文件进行渲染，支持使用其它前端文件，后端继续使用原版应用

- https://github.com/alist-org/alist/issues/5531
- https://github.com/alist-org/alist/discussions/6110

将前端文件(dist)上传到应用的`data`文件夹下，然后按照下方这样填写，缺点就是如果每次更新都得需要手动更新一次

```json
  "dist_dir": "data\\dist",
```

<br/>



### **log**

日志配置，如果要查看详细日志（或禁用它），可以设置该字段。

```json
  "log": {
    "enable": true,					//开启日志记录功能，默认为开启状态 true
    "name": "data\\log\\log.log",	//日志文件的路径和名称
    "max_size": 10,					//单个日志文件的最大大小，单位为 MB。达到指定大小后会自动切分文件
    "max_backups": 5,				//保留的日志备份数量，超过数量会自动删除旧的备份
    "max_age": 28,					//日志文件保存的最大天数，超过天数的日志文件会被删除
    "compress": false				//是否启用日志文件压缩功能。压缩后可以减小文件大小，但查看时需要解压缩，默认为关闭状态 false
  },
```

<br/>



### **delayed_start**

**单位：秒** (v3.19.0 新增功能)

是否延时启动，一般此功能常用于 AList 开机自启动选项

因为有时候网络连接的慢，导致 AList 启动过快后需要网络连接的驱动无法连接导致无法正常打开

<br/>



### **max_connections**

同时最多的连接数(并发)，默认为 0 即不限制.

- 对于一般的设备比如 n1 推荐 10 或者 20
  - 使用场景（例如打开图片模式会并发不是很好的设备就会崩溃）

<br/>



### **tls_insecure_skip_verify**

是否不检查 SSL 证书，关闭后如使用的网站的证书出现问题（如未包含中级证书、证书过期、证书伪造等），将不能使用该服务，开启该选项请尽量在安全的网络环境下运行程序

<br/>



### **tasks**

后台任务线程数量配置

```json
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": true
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": true
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": true
    }
  },
```

- **workers**：任务线程数量
- **max_retry**：重试次数
  - 0：禁用重试
- **download**：离线下载时的下载任务
- **transfer**：离线下载时上传中转的任务
- **upload**：上传任务
- **copy**：复制任务
- **task_persistant**：任务持久化，重启 `AList` 后任务不会取消
  - **download**：true
  - **transfer**：true
  - **upload**：false
  - **copy**：true


<br/>



### **cors**

**跨源资源共享**配置

```json
  "cors": {
    "allow_origins": [
      "*"
    ],
    "allow_methods": [
      "*"
    ],
    "allow_headers": [
      "*"
    ]
  }
```

- **allow_origins**：允许的源
- **allow_methods**：允许的请求方法
- **allow_headers**：允许的请求头

具体使用方式自行了解进行配置，如果不了解请勿随意修改，使用默认配置就可以。

<br/>



### **S3**

```json
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  }
```

- `enable`：S3功能是否启用，默认未启用
- `port`：端口号
- `SSL`：启用HTTPS证书，默认未启用

功能介绍：[点击查看](../guide/advanced/s3.md)
