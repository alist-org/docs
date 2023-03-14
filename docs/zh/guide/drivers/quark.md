---
# This is the icon of the page
icon: state
# This control sidebar order
order: 18
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

# 夸克网盘

:::tip
由于夸克网盘的限制，下载必须携带 Cookies，所以只能使用本程序中的代理功能进行传输。 （可以用其他机器转）
:::

## Cookie 和 根文件夹ID

从请求中获取 Cookie 和根文件夹 ID：
方法：按F12打开“调试”，选中“网络”，找到一个以“sort”开头的文件即可找到
![quark](/img/drivers/quark.png)

或者根目录id也可以从地址栏获取（根目录为0）：

![url](/img/drivers/quark-rootid.png)



### 默认使用的下载方式


```mermaid
---
title: 默认使用的那种下载方式？
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认==>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```
