---
# This is the icon of the page
icon: iconfont icon-link
# This control sidebar order
order: 10
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 离线下载


::: warning  请仔细阅读以下提示

有两款离线下载功能软件  

两款用法都一样，提前设置好软件配置(具体配置看下面说明)，

然后回到前端界面， ==找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹== 

然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)



如果你使用 **docker**，请自行映射以下两个默认路径（映射至宿主机相同的目录）

- **/opt/alist/data/temp/aria2**

- **/opt/alist/data/temp/qbittorrent**

:::

## **1.Aria2**

[**点击查看使用说明**](../../config/other.md)

## **2.qBittorrent**

（这里以Windows端举例，Linux端不清楚有没有）

首先我们先要在 **`qBittorrent`** 客户端配置好预设值

根据[源码](https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162)我们知道预设值分别是 admin:adminadmin@localhost:8080/

- **ip**：localhost
- **port**：8080
- **user**：admin
- **password**：adminadmin

1. 将以上参数我们填写到 **`qBittorrent`** 客户端，配置好后我们去Alist前端进行离线下载（**方法参考开头的说明**）
   - 若提交离线链接后提示：**Qbittorrent not ready** 将Alist和qBittorrent都重启试试看


2. 预设值配置查看地址：
   - **https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162**

   - ```{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ```


3.  使用 **`qBittorrent`** 来离线 `.torrent` 类型的文件
   - 虽然不可以直接添加离线`.torrent` 类型的文件，可以曲线救国 参考:[查看方法](https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010)

4.  可以自行配置下载完毕后不进行删除，进行做种，默认为`0`会上传完毕后立即删除
   - 修改位置：**Alist后台** --> **设置** --> **Qbittorrent 做种时间** 选项，设置你自己需要配置的时间单位是`分钟`，到了设置的做种时间后会自动删除

5.  ==我们也可以自定义，不使用默认的预设值==
   - 修改位置：**Alist后台** --> **设置** --> **Qbittorrent url** 选项，照着修改即可


![Offline download](/img/advanced/offline-download.png)



### **注意事项**

1. 在后台qBittorrent任务中出现：**`torrent parse timeout`**，解析超时
2. 可以解析种子下载，但是在上传的时候出现 **`The system cannot find the path specified.`** 找不到路径

以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）

- **qBittorrent**官网：**https://www.qbittorrent.org/**
- **qBittorrent增强版**GitHub：**https://github.com/c0re100/qBittorrent-Enhanced-Edition**

3. 因为用到了 `v2.8.3` 的 API，所以 qBittorrent 的版本最低应该是 `4.4.0beta2` 或者 `4.3.8` 正式版
4. 如果 **qBittorrent** 设置了 alist 所在的 ip 免验证的话可以直接省略 `@` 前面的用户名和密码（在**qBittorrent**客户端配置）
   - 3 和 4 是视频中没有提到的.



**qBittorrent**视频教程

<BiliBili bvid="BV1NT411q7EN" />

**视频若失效可以前往观看：https://b23.tv/J34qDiG**
