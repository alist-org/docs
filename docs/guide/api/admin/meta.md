---
# This is the icon of the page
icon: iconfont icon-token
# This control sidebar order
order: 2
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

# meta

## GET 列出元信息

GET /api/admin/meta/list

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明     |
| ------------- | ------ | ------ | ---- | -------- |
| page          | query  | string | 否   | 页数     |
| per_page      | query  | string | 否   | 每页个数 |
| Authorization | header | string | 是   | none     |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "id": 1,
        "path": "/a",
        "password": "i",
        "p_sub": false,
        "write": false,
        "w_sub": false,
        "hide": "",
        "h_sub": false,
        "readme": "",
        "r_sub": false
      }
    ],
    "total": 1
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称         | 类型     | 必选  | 约束 | 中文名                     | 说明 |
| ------------ | -------- | ----- | ---- | -------------------------- | ---- |
| » code       | integer  | true  | none | 状态码                     | none |
| » message    | string   | true  | none | 信息                       | none |
| » data       | object   | true  | none | 数据                       | none |
| »» content   | [object] | true  | none | 内容                       | none |
| »»» id       | integer  | false | none | id                         | none |
| »»» path     | string   | false | none | 路径                       | none |
| »»» password | string   | false | none | 密码                       | none |
| »»» p_sub    | boolean  | false | none | 密码是否应用到子文件夹     | none |
| »»» write    | boolean  | false | none | 是否允许写入               | none |
| »»» w_sub    | boolean  | false | none | 是否允许写入引用到子文件夹 | none |
| »»» hide     | string   | false | none | 隐藏                       | none |
| »»» h_sub    | boolean  | false | none | 隐藏是否应用到子文件夹     | none |
| »»» readme   | string   | false | none | 说明                       | none |
| »»» r_sub    | boolean  | false | none | 说明是否应用到子文件夹     | none |
| »» total     | integer  | true  | none | 总数                       | none |

## GET 获取元信息

GET /api/admin/meta/get

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明     |
| ------------- | ------ | ------ | ---- | -------- |
| id            | query  | string | 是   | 元信息id |
| Authorization | header | string | 是   | none     |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "path": "/a",
    "password": "c",
    "p_sub": false,
    "write": false,
    "w_sub": false,
    "hide": "",
    "h_sub": false,
    "readme": "",
    "r_sub": false
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称        | 类型    | 必选 | 约束 | 中文名                     | 说明 |
| ----------- | ------- | ---- | ---- | -------------------------- | ---- |
| » code      | integer | true | none | 状态码                     | none |
| » message   | string  | true | none | 信息                       | none |
| » data      | object  | true | none |                            | none |
| »» id       | integer | true | none | id                         | none |
| »» path     | string  | true | none | 路径                       | none |
| »» password | string  | true | none | 密码                       | none |
| »» p_sub    | boolean | true | none | 密码是否应用到子文件夹     | none |
| »» write    | boolean | true | none | 开启写入                   | none |
| »» w_sub    | boolean | true | none | 开启写入是否应用到子文件夹 | none |
| »» hide     | string  | true | none | 隐藏                       | none |
| »» h_sub    | boolean | true | none | 隐藏是否应用到子文件夹     | none |
| »» readme   | string  | true | none | 说明                       | none |
| »» r_sub    | boolean | true | none | 说明是否应用到子文件夹     | none |

## POST 新增元信息

POST /api/admin/meta/create

> Body 请求参数

```json
{
  "id": 0,
  "path": "/a",
  "password": "c",
  "p_sub": false,
  "write": false,
  "w_sub": false,
  "hide": "",
  "h_sub": false,
  "readme": "",
  "r_sub": false
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名                     | 说明 |
| ------------- | ------ | ------- | ---- | -------------------------- | ---- |
| Authorization | header | string  | 是   |                            | none |
| body          | body   | object  | 否   |                            | none |
| » id          | body   | integer | 是   | id                         | none |
| » path        | body   | string  | 是   | 路径                       | none |
| » password    | body   | string  | 是   | 密码                       | none |
| » p_sub       | body   | boolean | 是   | 密码是否应用到子文件夹     | none |
| » write       | body   | boolean | 是   | 开启写入                   | none |
| » w_sub       | body   | boolean | 是   | 开启写入是否应用到子文件夹 | none |
| » hide        | body   | string  | 是   | 隐藏                       | none |
| » h_sub       | body   | boolean | 是   | 隐藏是否应用到子文件夹     | none |
| » readme      | body   | string  | 是   | 说明                       | none |
| » r_sub       | body   | boolean | 是   | 说明是否应用到子文件夹     | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none |        | none |
| » message | string  | true | none |        | none |
| » data    | null    | true | none |        | none |

## POST 更新元信息

POST /api/admin/meta/update

> Body 请求参数

```json
{
  "id": 0,
  "path": "/a",
  "password": "c",
  "p_sub": false,
  "write": false,
  "w_sub": false,
  "hide": "",
  "h_sub": false,
  "readme": "",
  "r_sub": false
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名                     | 说明 |
| ------------- | ------ | ------- | ---- | -------------------------- | ---- |
| Authorization | header | string  | 是   |                            | none |
| body          | body   | object  | 否   |                            | none |
| » id          | body   | integer | 是   | id                         | none |
| » path        | body   | string  | 是   | 路径                       | none |
| » password    | body   | string  | 是   | 密码                       | none |
| » p_sub       | body   | boolean | 是   | 密码是否应用到子文件夹     | none |
| » write       | body   | boolean | 是   | 开启写入                   | none |
| » w_sub       | body   | boolean | 是   | 开启写入是否应用到子文件夹 | none |
| » hide        | body   | string  | 是   | 隐藏                       | none |
| » h_sub       | body   | boolean | 是   | 隐藏是否应用到子文件夹     | none |
| » readme      | body   | string  | 是   | 说明                       | none |
| » r_sub       | body   | boolean | 是   | 说明是否应用到子文件夹     | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none |        | none |
| » message | string  | true | none |        | none |
| » data    | null    | true | none |        | none |

## POST 删除元信息

POST /api/admin/meta/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| id            | query  | string | 是   |        | none |
| Authorization | header | string | 是   |        | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称      | 类型    | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code    | integer | true | none | 状态码 | none |
| » message | string  | true | none | 信息   | none |
| » data    | null    | true | none |        | none |
