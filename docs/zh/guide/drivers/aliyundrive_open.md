---
# This is the icon of the page
icon: state
# This control sidebar order
order: 3
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

# 阿里云盘 Open

:::tip

阿里云盘 open，使用的是官方授权 API 开发。

:::

<script setup lang="ts">
import { ref } from "vue";
const minutes = ref<string|number>("unknown")
const max = ref<string|number>("unknown")
const getLimit = async ()=>{
  const resp = await fetch("https://api.nn.ci/alist/ali_open/limit")
  const res = await resp.json()
  minutes.value = res.minutes
  max.value = res.max
}
typeof fetch !== "undefined" && getLimit()
</script>

:::danger 请仔细阅读注意事项

1.  ==此工具获取的刷新令牌仅可以用于 **阿里云盘开放平台** 存储挂载方式== 
2. AList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以
3. 暂不适用于其他，同时也仅限用于 Alist 使用
4. 同一 IP 在 =={{ minutes }}== 分钟内请求 =={{ max }}== 次，会出现 **TooManyRequests** :no_entry_sign:避免滥用，请勿滥用:no_entry_sign:
   - 例如在 保存/编辑 的时候算一次请求，查看文件看视频下载不算。
   - 上述的分钟和次数是动态的喔~

:::

::: warning

为确保所有用户的使用体验及保护云盘系统整体性能，云盘会对下面 API 进行限流：

| API                                              | 用户级限流     |
| ------------------------------------------------ | -------------- |
| /adrive/v1.0/openFile/list（获取列表）           | 4 QPS / 1秒4次 |
| /adrive/v1.0/openFile/getDownloadUrl（下载文件） | 1 QPS / 1秒1次 |

如果有批量下载需求：建议排队下载.

**QPS够用**

:::


## 刷新令牌

前往：**https://alist.nn.ci/tool/aliyundrive/request**

#### 获取示意图

以下两种方式都可以获得 **refresh_token**

:::tabs#alitoken

@tab Go to login

![token](/img/drivers/aliyun/token1.png)

@tab Scan QrCoden

![token](/img/drivers/aliyun/token2.png)

:::

## Root folder file_id

打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串

如 https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

这个文件夹的 file_id 即为 `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)



## 客户端 ID，秘钥

正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 AList 提供的。



## 移除方式

- 回收站：在AList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。
- 删除：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删可以不能找回。
  - 注：请勿泄露自己阿里云盘Open获取的Token， ==若不小心泄露请立刻马上去  [**其他说明 ¹**](#打开%20阿里云盘%20APP%20-->%20我的%20-->右上角设置齿轮%20-->%20隐私设置%20-->%20授权管理%20-->%20点击%20AList%20进行查看) 解除授权,再重新扫码授权换新的刷新令牌，同时解除授权后之前获取的都会失效，以保护您账号的安全== 



## 其他说明

一、

> AList 仅获取了 云盘用户 (**名称 头像 ¹**)，(**访问文件权限 ²**)和(**写入文件权限 ³**)，未获取手机号权限
>
> 详情可以通过以下两种方式查看
>
> 1. 扫码获取刷新令牌时的**提示**
> 2. #### 打开 **阿里云盘 APP --> 我的 -->右上角设置齿轮 --> 隐私设置 --> 授权管理 --> 点击 AList** 进行查看
>    
>    - 若不使用了可以随时手动解除权限

二、

> 默认使用的是阿里云盘自带播放器 - **Aliyun Video Previewer**
>
> 上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）
>
> - 新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。
> - 不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。
> - 实时转码需要一定时间。
> - 画质分别为：LD|SD|HD|FHD|QHD


三、

>- 如果你挂载的阿里云盘Open，在重启，重新加载，更新后，发现提示 **TooManyRequests**
>
>- 检查你的账号是否超过 顶部红色提示的注意事项内提到成数量了，即你添加的阿里云盘open数量 >  =={{ max }}== 
>
>- 解决办法将所有挂载的阿里云盘Open全部禁用，等待 =={{ minutes }}== 分钟后，再来一个一个点击启用 数量不要超过  =={{ max }}== 次，然后再等待 =={{ minutes }}== 分钟后再来点击开启，慢慢的恢复。
>  - （小声提示：如果你是十几个账号还好，一次性直接恢复 =={{ max }}== 个问题不大，如果你是30个 50个账号那建议你每次恢复4个左右吧，因为每2小时会帮你刷新一下刷新令牌，也会调用的 防止你的次数过多导致GG...）
>
>
>
>- 另外一个问题，如果你挂载的阿里云盘Open是一个云盘账号，然后分别挂载了不同的文件夹到账添加了多个账号导致添加的阿里云盘Open账号数量过多这个好解决
>  - 解决方案：去阿里云盘官方页面将你需要挂载的文件夹都整合到一个文件夹内，然后只挂载这个整合后的文件夹即可，然后再通过 [**别名-alias**](../advanced/alias.md)分别单独挂载出来，一个路径写一个就行这样就实现了单独挂载一个路径显示，当然你也可以多个整合在一起也是可以的或者直接用 里面提到的 例3 来分别显示不同的也可以
>
>
>
>如果你是一个账号一个网盘添加的数量 >   =={{ max }}== 个，那只能通过开始的办法慢慢恢复了.

四、

>Q：阿里云盘Open怎么看不了 Office 全家桶类型的文件
>
>A：因为阿里云盘未开放相关API故暂时无法查看



## 默认使用的下载方式

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
