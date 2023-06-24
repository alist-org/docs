---
# This is the icon of the page
icon: state
# This control sidebar order
order: 7
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 中国联通云盘

云盘地址：**https://pan.wo.cn/**

- :warning: AList 3.19.0版本及以上版本才能使用本驱动

::: tip
挂载联通云盘使用的是Web端，如果你先使用工具获取了令牌再去登录网页端会将AList挂载的挤掉

反之如果先登录Web端，再登录挂载，会将Web端挤掉

登录手机端没问题，不会被挤掉。

:::

获取令牌工具地址：**https://alist.nn.ci/tool/wopan/token.html**

- ![](/img/drivers/wopan/wopan-tool.png)



## **根文件夹ID**

- 个人云：**0**
  - 单独文件夹ID：未知(后续补充)

- 家庭云：未知(后续补充)
  - 家庭云单独文件夹ID：未知(后续补充)



## **类型**

个人云：将`Family ID`空着就是个人云

家庭云：填写`Family ID` 未知(后续补充)



### **AList挂载填写示例：**

将使用工具获取的 `refresh_token填入刷新令牌`，`access_token填入访问令牌`

![](/img/drivers/wopan/add-wopan.png)


### **默认使用的下载方式**

```mermaid
---
title: 默认使用的那种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
