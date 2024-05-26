---
# This is the icon of the page
icon: iconfont icon-people
# This control sidebar order
order: 1
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

# user

## GET 列出所有用户

GET /api/admin/user/list

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是   | none |

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
        "username": "admin",
        "password": "",
        "base_path": "/",
        "role": 2,
        "disabled": false,
        "permission": 0,
        "sso_id": ""
      },
      {
        "id": 2,
        "username": "guest",
        "password": "",
        "base_path": "/",
        "role": 1,
        "disabled": true,
        "permission": 0,
        "sso_id": ""
      },
      {
        "id": 3,
        "username": "N",
        "password": "",
        "base_path": "/",
        "role": 0,
        "disabled": false,
        "permission": 256,
        "sso_id": ""
      }
    ],
    "total": 3
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称           | 类型     | 必选 | 约束 | 中文名   | 说明 |
| -------------- | -------- | ---- | ---- | -------- | ---- |
| » code         | integer  | true | none | 状态码   | none |
| » message      | string   | true | none | 信息     | none |
| » data         | object   | true | none |          | none |
| »» content     | [object] | true | none |          | none |
| »»» id         | integer  | true | none | id       | none |
| »»» username   | string   | true | none | 用户名   | none |
| »»» password   | string   | true | none | 密码     | none |
| »»» base_path  | string   | true | none | 基本路径 | none |
| »»» role       | integer  | true | none | 角色     | none |
| »»» disabled   | boolean  | true | none | 是否禁用 | none |
| »»» permission | integer  | true | none | 权限     | none |
| »»» sso_id     | string   | true | none | sso id   | none |
| »» total       | integer  | true | none | 总数     | none |

## GET 列出某个用户

GET /api/admin/user/get

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| id            | query  | string | 是   | none |
| Authorization | header | string | 是   | none |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "username": "admin",
    "password": "",
    "base_path": "/",
    "role": 2,
    "disabled": false,
    "permission": 0,
    "sso_id": ""
  }
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称          | 类型    | 必选 | 约束 | 中文名   | 说明 |
| ------------- | ------- | ---- | ---- | -------- | ---- |
| » code        | integer | true | none |          | none |
| » message     | string  | true | none |          | none |
| » data        | object  | true | none |          | none |
| »» id         | integer | true | none | id       | none |
| »» username   | string  | true | none | 用户名   | none |
| »» password   | string  | true | none | 密码     | none |
| »» base_path  | string  | true | none | 基本路径 | none |
| »» role       | integer | true | none | 角色     | none |
| »» disabled   | boolean | true | none | 是否禁用 | none |
| »» permission | integer | true | none | 权限     | none |
| »» sso_id     | string  | true | none | sso id   | none |

## POST 新建用户

POST /api/admin/user/create

> Body 请求参数

```json
{
  "id": 0,
  "username": "a",
  "password": "123456",
  "base_path": "/",
  "role": 0,
  "permission": 60,
  "disabled": false,
  "sso_id": ""
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名   | 说明 |
| ------------- | ------ | ------- | ---- | -------- | ---- |
| Authorization | header | string  | 是   |          | none |
| body          | body   | object  | 否   |          | none |
| » id          | body   | integer | 否   | id       | none |
| » username    | body   | string  | 是   | 用户名   | none |
| » password    | body   | string  | 否   | 密码     | none |
| » base_path   | body   | string  | 否   | 基本路径 | none |
| » role        | body   | integer | 否   | 角色     | none |
| » permission  | body   | integer | 否   | 权限     | none |
| » disabled    | body   | boolean | 否   | 是否禁用 | none |
| » sso_id      | body   | string  | 否   | sso id   | none |

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

## POST 更新用户信息

POST /api/admin/user/update

> Body 请求参数

```json
{
  "id": 0,
  "username": "a",
  "password": "123456",
  "base_path": "/",
  "role": 0,
  "permission": 60,
  "disabled": false,
  "sso_id": ""
}
```

### 请求参数

| 名称          | 位置   | 类型    | 必选 | 中文名   | 说明 |
| ------------- | ------ | ------- | ---- | -------- | ---- |
| Authorization | header | string  | 是   |          | none |
| body          | body   | object  | 否   |          | none |
| » id          | body   | integer | 是   | id       | none |
| » username    | body   | string  | 是   | 用户名   | none |
| » password    | body   | string  | 否   | 密码     | none |
| » base_path   | body   | string  | 否   | 基本路径 | none |
| » role        | body   | integer | 否   | 角色     | none |
| » permission  | body   | integer | 否   | 权限     | none |
| » disabled    | body   | boolean | 否   | 是否禁用 | none |
| » sso_id      | body   | string  | 否   | sso id   | none |

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

## POST 取消某个用户的两步验证

POST /api/admin/user/cancel_2fa

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

## POST 删除用户

POST /api/admin/user/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| id            | query  | string | 是   |        | none |
| Authorization | header | string | 否   |        | none |

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

## POST 删除用户缓存

POST /api/admin/user/del_cache

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| username      | query  | string | 是   |        | none |
| Authorization | header | string | 否   |        | none |

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
