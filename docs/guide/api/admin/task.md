---
# This is the icon of the page
icon: iconfont icon-file
# This control sidebar order
order: 6
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

# task

alist中的任务管理可以分为：

| 接口名          | 说明          |
| --------------- | ------------- |
| /upload         | 上传任务      |
| /copy           | 复制任务      |
| /aria2_down     | aria2下载任务 |
| /aria2_transfer | aria2转存任务 |
| /qbit_down      | qbit下载任务  |
| /qbit_transfer  | qbit转存任务  |

每种任务都有以下接口：

- info
- done
- undone
- delete
- cancel
- clear_done
- clear_succeeded
- retry

下面将以upload任务为例，说明每个接口的作用。

## POST 获取任务信息

POST /api/admin/task/upload/info

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | no   | 任务id |
| Authorization | header | string | yes  | none   |

### 返回示例

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
    }
  ]
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称        | 类型     | 必选  | 约束 | 中文名       | 说明 |
| ----------- | -------- | ----- | ---- | ------------ | ---- |
| » code      | integer  | true  | none | 状态码       | none |
| » message   | string   | true  | none | 信息         | none |
| » data      | [object] | true  | none |              | none |
| »» id       | string   | false | none | id           | none |
| »» name     | string   | false | none | 任务名       | none |
| »» state    | string   | false | none | 任务完成状态 | none |
| »» status   | string   | false | none |              | none |
| »» progress | integer  | false | none | 进度         | none |
| »» error    | string   | false | none | 错误信息     | none |

## GET 获取已完成任务

GET /api/admin/task/upload/done

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
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
    }
  ]
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称        | 类型     | 必选  | 约束 | 中文名       | 说明 |
| ----------- | -------- | ----- | ---- | ------------ | ---- |
| » code      | integer  | true  | none | 状态码       | none |
| » message   | string   | true  | none | 信息         | none |
| » data      | [object] | true  | none |              | none |
| »» id       | string   | false | none | id           | none |
| »» name     | string   | false | none | 任务名       | none |
| »» state    | string   | false | none | 任务完成状态 | none |
| »» status   | string   | false | none |              | none |
| »» progress | integer  | false | none | 进度         | none |
| »» error    | string   | false | none | 错误信息     | none |

## GET 获取未完成任务

GET /api/admin/task/upload/undone

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
  "data": [
    {
      "id": "1",
      "name": "upload 1.png to [/s](/test)",
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "error": ""
    }
  ]
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

状态码 **200**

| 名称        | 类型     | 必选  | 约束 | 中文名       | 说明 |
| ----------- | -------- | ----- | ---- | ------------ | ---- |
| » code      | integer  | true  | none | 状态码       | none |
| » message   | string   | true  | none | 信息         | none |
| » data      | [object] | true  | none |              | none |
| »» id       | string   | false | none | id           | none |
| »» name     | string   | false | none | 任务名       | none |
| »» state    | string   | false | none | 任务完成状态 | none |
| »» status   | string   | false | none |              | none |
| »» progress | integer  | false | none | 进度         | none |
| »» error    | string   | false | none | 错误信息     | none |

## POST 删除任务

POST /api/admin/task/upload/delete

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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

## POST 取消任务

POST /api/admin/task/upload/cancel

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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

## POST 清除已完成任务

POST /api/admin/task/upload/clear_done

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

## POST 清除已成功任务

POST /api/admin/task/upload/clear_succeeded

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

## POST 重试任务

POST /api/admin/task/upload/retry

### 请求参数

| 名称          | 位置   | 类型   | 必选 | 说明   |
| ------------- | ------ | ------ | ---- | ------ |
| tid           | query  | string | 是   | 任务id |
| Authorization | header | string | 是   | none   |

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
