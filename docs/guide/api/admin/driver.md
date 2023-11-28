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
|Authorization|header|string| 是 |token

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

