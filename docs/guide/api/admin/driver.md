---
# This is the icon of the page
icon: iconfont icon-file
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - ADMIN
  - API
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# driver

## GET 查询所有驱动配置模板列表

GET /api/admin/driver/list

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |token|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "115 Cloud": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "cookie",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": "one of QR code token and cookie required"
        },
        {
          "name": "qrcode_token",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": "one of QR code token and cookie required"
        },
        {
          "name": "page_size",
          "type": "number",
          "default": "56",
          "options": "",
          "required": false,
          "help": "list api per page size of 115 driver"
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "115 Cloud",
        "local_sort": false,
        "only_local": true,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "123Pan": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "file_name",
          "options": "file_name,size,update_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "123Pan",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "123PanShare": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "sharekey",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "sharepassword",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "file_name",
          "options": "file_name,size,update_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "123PanShare",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "139Yun": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "authorization",
          "type": "text",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "type",
          "type": "select",
          "default": "personal",
          "options": "personal,family",
          "required": false,
          "help": ""
        },
        {
          "name": "cloud_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "139Yun",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "189Cloud": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Fill in the cookie if need captcha"
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "-11",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "189Cloud",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "-11",
        "alert": "info|You can try to use 189PC driver if this driver does not work."
      }
    },
    "189CloudPC": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "validate_code",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "-11",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "filename",
          "options": "filename,filesize,lastOpTime",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "type",
          "type": "select",
          "default": "personal",
          "options": "personal,family",
          "required": false,
          "help": ""
        },
        {
          "name": "family_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "upload_method",
          "type": "select",
          "default": "stream",
          "options": "stream,rapid,old",
          "required": false,
          "help": ""
        },
        {
          "name": "no_use_ocr",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "189CloudPC",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "-11",
        "alert": ""
      }
    },
    "AList V2": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "url",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "access_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "AList V2",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "AList V3": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "url",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "meta_password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "AList V3",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Alias": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "paths",
          "type": "text",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "Alias",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": true,
        "no_upload": true,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Aliyundrive": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "root",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,updated_at,created_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "ASC,DESC",
          "required": false,
          "help": ""
        },
        {
          "name": "rapid_upload",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "internal_upload",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Aliyundrive",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "root",
        "alert": "warning|There may be an infinite loop bug in this driver.\nDeprecated, no longer maintained and will be removed in a future version.\nWe recommend using the official driver AliyundriveOpen."
      }
    },
    "AliyundriveOpen": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "drive_type",
          "type": "select",
          "default": "default",
          "options": "default,resource,backup",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "root",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,updated_at,created_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "ASC,DESC",
          "required": false,
          "help": ""
        },
        {
          "name": "oauth_token_url",
          "type": "string",
          "default": "https://api.xhofe.top/alist/ali_open/token",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Keep it empty if you don't have one"
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Keep it empty if you don't have one"
        },
        {
          "name": "remove_way",
          "type": "select",
          "default": "",
          "options": "trash,delete",
          "required": true,
          "help": ""
        },
        {
          "name": "rapid_upload",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": "If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect"
        },
        {
          "name": "internal_upload",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": "If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed"
        },
        {
          "name": "livp_download_format",
          "type": "select",
          "default": "jpeg",
          "options": "jpeg,mov",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "AliyundriveOpen",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "root",
        "alert": ""
      }
    },
    "AliyundriveShare": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "share_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "share_pwd",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "root",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,updated_at,created_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "ASC,DESC",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "AliyundriveShare",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "root",
        "alert": ""
      }
    },
    "BaiduNetdisk": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "name",
          "options": "name,time,size",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "download_api",
          "type": "select",
          "default": "official",
          "options": "official,crack",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "custom_crack_ua",
          "type": "string",
          "default": "netdisk",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "BaiduNetdisk",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "BaiduPhoto": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "show_type",
          "type": "select",
          "default": "root",
          "options": "root,root_only_album,root_only_file",
          "required": false,
          "help": ""
        },
        {
          "name": "album_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "delete_origin",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "BaiduPhoto",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "BaiduShare": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "surl",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "pwd",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "BDUSS",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "BaiduShare",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Cloudreve": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Cloudreve",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Crypt": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "filename_encryption",
          "type": "select",
          "default": "off",
          "options": "off,standard,obfuscate",
          "required": true,
          "help": ""
        },
        {
          "name": "directory_name_encryption",
          "type": "select",
          "default": "false",
          "options": "false,true",
          "required": true,
          "help": ""
        },
        {
          "name": "remote_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "This is where the encrypted data stores"
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "the main password"
        },
        {
          "name": "salt",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "If you don't know what is salt, treat it as a second password'. Optional but recommended"
        },
        {
          "name": "encrypted_suffix",
          "type": "string",
          "default": ".bin",
          "options": "",
          "required": true,
          "help": "encrypted files will have this suffix"
        }
      ],
      "config": {
        "name": "Crypt",
        "local_sort": true,
        "only_local": false,
        "only_proxy": true,
        "no_cache": true,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Dropbox": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "oauth_token_url",
          "type": "string",
          "default": "https://api.xhofe.top/alist/dropbox/token",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Keep it empty if you don't have one"
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Keep it empty if you don't have one"
        }
      ],
      "config": {
        "name": "Dropbox",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "FTP": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "FTP",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "GoogleDrive": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "root",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "such as: folder,name,modifiedTime"
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "202264815644.apps.googleusercontent.com",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "X4Z3ca8xfWDb1Voo-F9a7ZxJ",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "chunk_size",
          "type": "number",
          "default": "5",
          "options": "",
          "required": false,
          "help": "chunk size while uploading (unit: MB)"
        }
      ],
      "config": {
        "name": "GoogleDrive",
        "local_sort": false,
        "only_local": false,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "root",
        "alert": ""
      }
    },
    "GooglePhoto": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "root",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "202264815644.apps.googleusercontent.com",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "X4Z3ca8xfWDb1Voo-F9a7ZxJ",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "show_archive",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "GooglePhoto",
        "local_sort": true,
        "only_local": false,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "root",
        "alert": ""
      }
    },
    "IPFS API": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "endpoint",
          "type": "string",
          "default": "http://127.0.0.1:5001",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "gateway",
          "type": "string",
          "default": "https://ipfs.io",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "IPFS API",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Lanzou": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "type",
          "type": "select",
          "default": "cookie",
          "options": "account,cookie,url",
          "required": false,
          "help": ""
        },
        {
          "name": "account",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "about 15 days valid, ignore if shareUrl is used"
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "-1",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "share_password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "baseUrl",
          "type": "string",
          "default": "https://pc.woozooo.com",
          "options": "",
          "required": true,
          "help": "basic URL for file operation"
        },
        {
          "name": "shareUrl",
          "type": "string",
          "default": "https://pan.lanzouo.com",
          "options": "",
          "required": true,
          "help": "used to get the sharing page"
        },
        {
          "name": "repair_file_info",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": "To use webdav, you need to enable it"
        }
      ],
      "config": {
        "name": "Lanzou",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "-1",
        "alert": ""
      }
    },
    "Local": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "thumbnail",
          "type": "bool",
          "default": "",
          "options": "",
          "required": true,
          "help": "enable thumbnail"
        },
        {
          "name": "thumb_cache_folder",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "show_hidden",
          "type": "bool",
          "default": "true",
          "options": "",
          "required": false,
          "help": "show hidden directories and files"
        },
        {
          "name": "mkdir_perm",
          "type": "string",
          "default": "777",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Local",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": true,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "MediaTrack": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "access_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "project_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "title",
          "options": "updated_at,title,size",
          "required": false,
          "help": ""
        },
        {
          "name": "order_desc",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "MediaTrack",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "Mega_nz": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "email",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "Mega_nz",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "MoPan": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "phone",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "-11",
          "options": "",
          "required": true,
          "help": "be careful when using the -11 value, some operations may cause system errors"
        },
        {
          "name": "cloud_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "filename",
          "options": "filename,filesize,lastOpTime",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "device_info",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "MoPan",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": "warning|This network disk may store your password in clear text. Please set your password carefully"
      }
    },
    "Onedrive": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "region",
          "type": "select",
          "default": "global",
          "options": "global,cn,us,de",
          "required": true,
          "help": ""
        },
        {
          "name": "is_sharepoint",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "redirect_uri",
          "type": "string",
          "default": "https://alist.nn.ci/tool/onedrive/callback",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "site_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "chunk_size",
          "type": "number",
          "default": "5",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Onedrive",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "OnedriveAPP": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "region",
          "type": "select",
          "default": "global",
          "options": "global,cn,us,de",
          "required": true,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "tenant_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "email",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "chunk_size",
          "type": "number",
          "default": "5",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "OnedriveAPP",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "PikPak": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "disable_media_link",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "PikPak",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "PikPakShare": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "share_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "share_pwd",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "PikPakShare",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": true,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "Quark": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "none",
          "options": "none,file_type,file_name,updated_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Quark",
        "local_sort": false,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "S3": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "bucket",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "endpoint",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "region",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "access_key_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "secret_access_key",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "session_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "custom_host",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "sign_url_expire",
          "type": "number",
          "default": "4",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "placeholder",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "force_path_style",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "list_object_version",
          "type": "select",
          "default": "v1",
          "options": "v1,v2",
          "required": false,
          "help": ""
        },
        {
          "name": "remove_bucket",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": "Remove bucket name from path when using custom host."
        },
        {
          "name": "add_filename_to_disposition",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": "Add filename to Content-Disposition header."
        }
      ],
      "config": {
        "name": "S3",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "SFTP": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "private_key",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "SFTP",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "SMB": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": ".",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "share_name",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "SMB",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": true,
        "no_upload": false,
        "need_ms": false,
        "default_root": ".",
        "alert": ""
      }
    },
    "Seafile": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "repoId",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "Seafile",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Teambition": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "region",
          "type": "select",
          "default": "",
          "options": "china,international",
          "required": true,
          "help": ""
        },
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "project_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "fileName",
          "options": "fileName,fileSize,updated,created",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "Asc",
          "options": "Asc,Desc",
          "required": false,
          "help": ""
        },
        {
          "name": "use_s3_upload_method",
          "type": "bool",
          "default": "true",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Teambition",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "Terabox": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "download_api",
          "type": "select",
          "default": "official",
          "options": "official,crack",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "name",
          "options": "name,time,size",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Terabox",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "Thunder": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "captcha_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "Thunder",
        "local_sort": true,
        "only_local": false,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "ThunderExpert": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "login_type",
          "type": "select",
          "default": "user",
          "options": "user,refresh_token",
          "required": false,
          "help": ""
        },
        {
          "name": "sign_type",
          "type": "select",
          "default": "algorithms",
          "options": "algorithms,captcha_sign",
          "required": false,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "login type is user,this is required"
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "login type is user,this is required"
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "login type is refresh_token,this is required"
        },
        {
          "name": "algorithms",
          "type": "string",
          "default": "HPxr4BVygTQVtQkIMwQH33ywbgYG5l4JoR,GzhNkZ8pOBsCY+7,v+l0ImTpG7c7/,e5ztohgVXNP,t,EbXUWyVVqQbQX39Mbjn2geok3/0WEkAVxeqhtx857++kjJiRheP8l77gO,o7dvYgbRMOpHXxCs,6MW8TD8DphmakaxCqVrfv7NReRRN7ck3KLnXBculD58MvxjFRqT+,kmo0HxCKVfmxoZswLB4bVA/dwqbVAYghSb,j,4scKJNdd7F27Hv7tbt",
          "options": "",
          "required": true,
          "help": "sign type is algorithms,this is required"
        },
        {
          "name": "captcha_sign",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "sign type is captcha_sign,this is required"
        },
        {
          "name": "timestamp",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "sign type is captcha_sign,this is required"
        },
        {
          "name": "captcha_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "device_id",
          "type": "string",
          "default": "9aa5c268e7bcfc197a9ad88e2fb330e5",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "Xp6vsxz_7IYVw2BB",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "Xp6vsy4tN9toTVdMSpomVdXpRmES",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_version",
          "type": "string",
          "default": "7.51.0.8196",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "package_name",
          "type": "string",
          "default": "com.xunlei.downloadprovider",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "user_agent",
          "type": "string",
          "default": "ANDROID-com.xunlei.downloadprovider/7.51.0.8196 netWorkType/4G appid/40 deviceName/Xiaomi_M2004j7ac deviceModel/M2004J7AC OSVersion/12 protocolVersion/301 platformVersion/10 sdkVersion/220200 Oauth2Client/0.9 (Linux 4_14_186-perf-gdcf98eab238b) (JAVA 0)",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "download_user_agent",
          "type": "string",
          "default": "Dalvik/2.1.0 (Linux; U; Android 12; M2004J7AC Build/SP1A.210812.016)",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "use_video_url",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "ThunderExpert",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "Trainbit": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0_000",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "AUSHELLPORTAL",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "apikey",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "Trainbit",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0_000",
        "alert": ""
      }
    },
    "UC": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "cookie",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "none",
          "options": "none,file_type,file_name,updated_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "UC",
        "local_sort": false,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "USS": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "bucket",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "endpoint",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "operator_name",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "operator_password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "sign_url_expire",
          "type": "number",
          "default": "4",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "USS",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "UrlTree": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "url_structure",
          "type": "text",
          "default": "https://jsd.nn.ci/gh/alist-org/alist/README.md\nhttps://jsd.nn.ci/gh/alist-org/alist/README_cn.md\nfolder:\n  CONTRIBUTING.md:1635:https://jsd.nn.ci/gh/alist-org/alist/CONTRIBUTING.md\n  CODE_OF_CONDUCT.md:2093:https://jsd.nn.ci/gh/alist-org/alist/CODE_OF_CONDUCT.md",
          "options": "",
          "required": true,
          "help": "structure:FolderName:\n  [FileName:][FileSize:][Modified:]Url"
        },
        {
          "name": "head_size",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": false,
          "help": "Use head method to get file size, but it may be failed."
        }
      ],
      "config": {
        "name": "UrlTree",
        "local_sort": true,
        "only_local": false,
        "only_proxy": false,
        "no_cache": true,
        "no_upload": true,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "Virtual": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "num_file",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "num_folder",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "max_file_size",
          "type": "number",
          "default": "1073741824",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "min_file_size",
          "type": "number",
          "default": "1048576",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "Virtual",
        "local_sort": true,
        "only_local": true,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": true,
        "default_root": "",
        "alert": ""
      }
    },
    "WebDav": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "",
          "options": "name,size,modified",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "vendor",
          "type": "select",
          "default": "other",
          "options": "sharepoint,other",
          "required": false,
          "help": ""
        },
        {
          "name": "address",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "username",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "password",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "WebDav",
        "local_sort": true,
        "only_local": false,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    },
    "WeiYun": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "native_proxy",
          "options": "use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cookies",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "name",
          "options": "name,size,updated_at",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "WeiYun",
        "local_sort": false,
        "only_local": false,
        "only_proxy": true,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "",
        "alert": ""
      }
    },
    "WoPan": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "root_folder_id",
          "type": "string",
          "default": "0",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "family_id",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": "Keep it empty if you want to use your personal drive"
        },
        {
          "name": "sort_rule",
          "type": "select",
          "default": "name_asc",
          "options": "name_asc,name_desc,time_asc,time_desc,size_asc,size_desc",
          "required": false,
          "help": ""
        },
        {
          "name": "access_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        }
      ],
      "config": {
        "name": "WoPan",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "0",
        "alert": ""
      }
    },
    "YandexDisk": {
      "common": [
        {
          "name": "mount_path",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": "The path you want to mount to, it is unique and cannot be repeated"
        },
        {
          "name": "order",
          "type": "number",
          "default": "",
          "options": "",
          "required": false,
          "help": "use to sort"
        },
        {
          "name": "remark",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "cache_expiration",
          "type": "number",
          "default": "30",
          "options": "",
          "required": true,
          "help": "The cache expiration time for this storage"
        },
        {
          "name": "web_proxy",
          "type": "bool",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "webdav_policy",
          "type": "select",
          "default": "302_redirect",
          "options": "302_redirect,use_proxy_url,native_proxy",
          "required": true,
          "help": ""
        },
        {
          "name": "down_proxy_url",
          "type": "text",
          "default": "",
          "options": "",
          "required": false,
          "help": ""
        },
        {
          "name": "extract_folder",
          "type": "select",
          "default": "",
          "options": "front,back",
          "required": false,
          "help": ""
        },
        {
          "name": "enable_sign",
          "type": "bool",
          "default": "false",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "additional": [
        {
          "name": "refresh_token",
          "type": "string",
          "default": "",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "order_by",
          "type": "select",
          "default": "name",
          "options": "name,path,created,modified,size",
          "required": false,
          "help": ""
        },
        {
          "name": "order_direction",
          "type": "select",
          "default": "asc",
          "options": "asc,desc",
          "required": false,
          "help": ""
        },
        {
          "name": "root_folder_path",
          "type": "string",
          "default": "/",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_id",
          "type": "string",
          "default": "a78d5a69054042fa936f6c77f9a0ae8b",
          "options": "",
          "required": true,
          "help": ""
        },
        {
          "name": "client_secret",
          "type": "string",
          "default": "9c119bbb04b346d2a52aa64401936b2b",
          "options": "",
          "required": true,
          "help": ""
        }
      ],
      "config": {
        "name": "YandexDisk",
        "local_sort": false,
        "only_local": false,
        "only_proxy": false,
        "no_cache": false,
        "no_upload": false,
        "need_ms": false,
        "default_root": "/",
        "alert": ""
      }
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none|状态码|状态码|
|» message|string|true|none|信息|信息|
|» data|object|true|none||none|
|»» 115 Cloud|object|true|none|115网盘|none|
|»»» common|[object]|true|none|通用配置|none|
|»»»» name|string|true|none|配置名|none|
|»»»» type|string|true|none|类型|none|
|»»»» default|string|true|none|默认值|none|
|»»»» options|string|true|none|选项|none|
|»»»» required|boolean|true|none|是否必须|none|
|»»»» help|string|true|none|帮助信息|none|
|»»» additional|[object]|true|none|额外配置|none|
|»»»» name|string|true|none|配置名|none|
|»»»» type|string|true|none|类型|none|
|»»»» default|string|true|none|默认值|none|
|»»»» options|string|true|none|选项|none|
|»»»» required|boolean|true|none|是否必须|none|
|»»»» help|string|true|none|帮助信息|none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none|配置名|none|
|»»»» local_sort|boolean|true|none|本地排序|none|
|»»»» only_local|boolean|true|none|仅本地|none|
|»»»» only_proxy|boolean|true|none|仅代理|none|
|»»»» no_cache|boolean|true|none|无缓存|none|
|»»»» no_upload|boolean|true|none|无上传|none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none|默认基本路径|none|
|»»»» alert|string|true|none|警告信息|none|
|»» 123Pan|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» 123PanShare|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» 139Yun|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» 189Cloud|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» 189CloudPC|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» AList V2|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» AList V3|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Alias|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|false|none||none|
|»»»» type|string|false|none||none|
|»»»» default|string|false|none||none|
|»»»» options|string|false|none||none|
|»»»» required|boolean|false|none||none|
|»»»» help|string|false|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Aliyundrive|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» AliyundriveOpen|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» AliyundriveShare|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» BaiduNetdisk|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» BaiduPhoto|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» BaiduShare|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Cloudreve|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Crypt|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Dropbox|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» FTP|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» GoogleDrive|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» GooglePhoto|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» IPFS API|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Lanzou|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Local|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» MediaTrack|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Mega_nz|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» MoPan|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Onedrive|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» OnedriveAPP|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» PikPak|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» PikPakShare|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Quark|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» S3|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» SFTP|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» SMB|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Seafile|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Teambition|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Terabox|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Thunder|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» ThunderExpert|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Trainbit|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» UC|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» USS|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» UrlTree|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» Virtual|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» WebDav|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» WeiYun|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» WoPan|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|
|»» YandexDisk|object|true|none||none|
|»»» common|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» additional|[object]|true|none||none|
|»»»» name|string|true|none||none|
|»»»» type|string|true|none||none|
|»»»» default|string|true|none||none|
|»»»» options|string|true|none||none|
|»»»» required|boolean|true|none||none|
|»»»» help|string|true|none||none|
|»»» config|object|true|none||none|
|»»»» name|string|true|none||none|
|»»»» local_sort|boolean|true|none||none|
|»»»» only_local|boolean|true|none||none|
|»»»» only_proxy|boolean|true|none||none|
|»»»» no_cache|boolean|true|none||none|
|»»»» no_upload|boolean|true|none||none|
|»»»» need_ms|boolean|true|none||none|
|»»»» default_root|string|true|none||none|
|»»»» alert|string|true|none||none|

## GET 列出驱动名列表

GET /api/admin/driver/names

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |token|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    "AliyundriveShare",
    "MediaTrack",
    "Onedrive",
    "PikPak",
    "Thunder",
    "Virtual",
    "AliyundriveOpen",
    "IPFS API",
    "Seafile",
    "SMB",
    "Terabox",
    "Aliyundrive",
    "BaiduShare",
    "FTP",
    "Local",
    "OnedriveAPP",
    "S3",
    "115 Cloud",
    "123Pan",
    "BaiduPhoto",
    "Crypt",
    "GoogleDrive",
    "ThunderExpert",
    "WoPan",
    "UC",
    "Teambition",
    "AList V3",
    "Alias",
    "Cloudreve",
    "Dropbox",
    "Lanzou",
    "139Yun",
    "SFTP",
    "UrlTree",
    "WebDav",
    "PikPakShare",
    "Quark",
    "Trainbit",
    "189Cloud",
    "189CloudPC",
    "AList V2",
    "BaiduNetdisk",
    "MoPan",
    "YandexDisk",
    "123PanShare",
    "GooglePhoto",
    "Mega_nz",
    "USS",
    "WeiYun"
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none|状态码|状态码|
|» message|string|true|none|信息|信息|
|» data|[string]|true|none||none|

## GET 列出特定驱动信息

GET /api/admin/driver/info

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|driver|query|string| 是 |none|
|Authorization|header|string| 是 |token|

> 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "common": [
      {
        "name": "mount_path",
        "type": "string",
        "default": "",
        "options": "",
        "required": true,
        "help": "The path you want to mount to, it is unique and cannot be repeated"
      },
      {
        "name": "order",
        "type": "number",
        "default": "",
        "options": "",
        "required": false,
        "help": "use to sort"
      },
      {
        "name": "remark",
        "type": "text",
        "default": "",
        "options": "",
        "required": false,
        "help": ""
      },
      {
        "name": "cache_expiration",
        "type": "number",
        "default": "30",
        "options": "",
        "required": true,
        "help": "The cache expiration time for this storage"
      },
      {
        "name": "webdav_policy",
        "type": "select",
        "default": "native_proxy",
        "options": "use_proxy_url,native_proxy",
        "required": true,
        "help": ""
      },
      {
        "name": "down_proxy_url",
        "type": "text",
        "default": "",
        "options": "",
        "required": false,
        "help": ""
      },
      {
        "name": "extract_folder",
        "type": "select",
        "default": "",
        "options": "front,back",
        "required": false,
        "help": ""
      },
      {
        "name": "enable_sign",
        "type": "bool",
        "default": "false",
        "options": "",
        "required": true,
        "help": ""
      }
    ],
    "additional": [
      {
        "name": "cookie",
        "type": "string",
        "default": "",
        "options": "",
        "required": true,
        "help": ""
      },
      {
        "name": "root_folder_id",
        "type": "string",
        "default": "0",
        "options": "",
        "required": true,
        "help": ""
      },
      {
        "name": "order_by",
        "type": "select",
        "default": "none",
        "options": "none,file_type,file_name,updated_at",
        "required": false,
        "help": ""
      },
      {
        "name": "order_direction",
        "type": "select",
        "default": "asc",
        "options": "asc,desc",
        "required": false,
        "help": ""
      }
    ],
    "config": {
      "name": "UC",
      "local_sort": false,
      "only_local": true,
      "only_proxy": false,
      "no_cache": false,
      "no_upload": false,
      "need_ms": false,
      "default_root": "0",
      "alert": ""
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none|状态码|状态码|
|» message|string|true|none|信息|信息|
|» data|object|true|none||none|
|»» common|[object]|true|none|通用配置|none|
|»»» name|string|true|none|配置名|none|
|»»» type|string|true|none|类型|none|
|»»» default|string|true|none|默认值|none|
|»»» options|string|true|none|选项|none|
|»»» required|boolean|true|none|是否必须|none|
|»»» help|string|true|none|帮助信息|none|
|»» additional|[object]|true|none|额外配置|none|
|»»» name|string|true|none|配置名|none|
|»»» type|string|true|none|类型|none|
|»»» default|string|true|none|默认值|none|
|»»» options|string|true|none|选项|none|
|»»» required|boolean|true|none|是否必须|none|
|»»» help|string|true|none|帮助信息|none|
|»» config|object|true|none|配置|none|
|»»» name|string|true|none|配置名|none|
|»»» local_sort|boolean|true|none|本地排序|none|
|»»» only_local|boolean|true|none|仅本地|none|
|»»» only_proxy|boolean|true|none|仅代理|none|
|»»» no_cache|boolean|true|none|无缓存|none|
|»»» no_upload|boolean|true|none|无上传|none|
|»»» need_ms|boolean|true|none||none|
|»»» default_root|string|true|none|默认基本路径|none|
|»»» alert|string|true|none|警告信息|none|

# 数据模型

