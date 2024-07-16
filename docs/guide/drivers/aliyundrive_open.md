---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Aliyundrive Open

:::tip

Aliyundrive Open, using the official authorization API development.

:::

<script setup lang="ts">
import { ref } from "vue";
import { api } from "@Api"
const minutes = ref<string|number>("unknown")
const max = ref<string|number>("unknown")
const getLimit = async ()=>{
  const resp = await fetch(`${api()}/alist/ali_open/limit`)
  const res = await resp.json()
  minutes.value = res.minutes
  max.value = res.max
}
typeof fetch !== "undefined" && getLimit()
</script>
::: info Aliyundrive VIP

**Aliyundrive VIP**：[https://www.alipan.com/cpx/member](https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES)

- <i class="fa-solid fa-lightbulb fa-bounce" style="color: orange;"></i> Click the link to get [**Coupon**](https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES),  [**immediately buy**](https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES) 

<img src="https://r2.izyt.cc/ali/vip.png" alt="vip" style="zoom:30%;" />

:::

:::danger Read the precautions carefully

1. ==The refresh token obtained by this tool can only be used for **Aliyundrive open platform** storage mount method==

   

2. The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available

   

3. Not applicable to others, but only for Alist

   

4. If the same IP requests =={{ max }}== times within =={{ minutes }}== minutes, **Too Many Requests** will appear. :no_entry_sign:So please do not abuse:no_entry_sign:
   - and viewing files and watching video downloads is not counted，The number of times and time mentioned above are dynamic~
   - New optimization: **will only refresh the token when the request finds that the token is expired, update restart editing if the token is still valid will not refresh.**

   

5. Online playback video reminder: **`ExceedCapacityForbidden`** error, the capacity exceeds restrictions, implements restrictions, needs to be expanded or deleted unnecessary file saving space to save space,[View details](#four、)

   

6. <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> **==Do not share the Alibaba cloud disk publicly, and the account is prohibited from being accessed by multiple IPs. If the account is frozen after sharing, you will be responsible for the consequences== <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i>  After adding storage, please set up meta information and other measures in time to prevent the account from being frozen by {other people/crawlers} malicious [access/sharing]，Other cloud disks also need to be prevented from being frozen/banned**

   

7. It is prohibited to use Alibaba Cloud Disk to build distribution services including but not limited to **`picture bed, software bed`** and **`video external link to video website playback`**, as well as some non-standard usage methods not mentioned above. If you violate the rules and are `frozen/banned`, you will be responsible for the consequences and it cannot be lifted.

:::

:::danger About Alibaba Cloud OAUTH verification API cannot be connected

1. Since the original API `https://api.nn.ci` is blocked by SNI, resulting in the case that cannot be connected, two new APIs are provided for use:
   - `https://api-cf.nn.ci` (A layer of Cloudflare)
   - `https://api.xhofe.top` (LiaoNing multi -line， Sponsored by [Asia Cloud](https://www.asiayun.com/aff/QQCOOQKZ))

2. You need to replace the OAUTH token link in the ALIYUNDRIVE_OPEN configuration to
   - `https://api-cf.nn.ci/alist/ali_open/token`
   - `https://api.xhofe.top/alist/ali_open/token`
   - ![](/img/drivers/aliyun/aliyun_api.png)

3. check the details：https://github.com/alist-org/alist/discussions/4572

4. Can I create an authorized OAUTH verification API by themselves?
    - You need to use your own developer account to build



:::



## **refresh token**

Go to：**https://alist.nn.ci/tool/aliyundrive/request**

#### **Get example graph**

**refresh_token** can be obtained in the following two ways

<div class="image-preview">  
    <img src="/img/drivers/aliyun/token1.png" alt="Go to login" title="Go to login"/>
    <img src="/img/drivers/aliyun/token2.png" alt="Scan QrCode" title="Scan QrCode"/>
</div>


### **Root folder file_id**

The default is `root`, which displays all cloud disk contents. If you only want to display the contents of a certain folder, you can change it to `file_id`

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)

<br/>



### **Client id，Client secret**

Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by Alist.

- If you use your own developer account, the Oauth token link must also be modified, and you must also use your own developer account ID and secret key to obtain the refresh token.

<br/>



## **Rapid upload**

- **v.3.22.1** version New add

It is Rapid upload. When adding the driver, you need to check Rapid upload to enable it. The premise of Rapid upload is that the Aliyun disk already has this file before you can perform Rapid upload, otherwise it is a normal upload.

Rapid upload calculates the `sha1` value of the file (should be correct), you don’t need to calculate it, you just need to upload it and upload it, it will automatically calculate it for you and upload it

- The interface provided by the official API of Alibaba Cloud Disk is used, check :point_right: [**Rapid upload logic**](https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH)

-----

- **v.3.27.0** version enhanced Rapid upload: you can directly transfer files with `115 network disk` by copying
  - The premise is that the file to be transferred from the Alibaba Cloud disk to 115 in seconds, 115 already exists, otherwise it is a normal copy task.
  - If you want to transfer 115 cloud disk files to Alibaba Cloud Disk in seconds, you need to turn on the Rapid upload option of Alibaba Cloud Disk, otherwise it will be uploaded in normal mode.

If you want to upload files using Second Transmission, it is recommended to build an AList locally on your home computer and add a `Local Storage` and `Alibaba Cloud Disk` to copy Second Transmission to save resources.

<br/>



## **Remove way**

If you don’t set it, it will be deleted to the recycle bin by default. If there is not enough space, you need to manually clean up the recycle bin. If you delete the wrong file, please go to the Alibaba Cloud Disk official website client to retrieve and restore it.

- Trash: Enter the cloud disk recycle bin after AList is deleted, which will occupy the cloud disk space, but it can be retrieved if it is deleted by mistake later.
- Delete: direct deletion will not stay in the recycle bin, and will not occupy cloud disk space, but if deleted by mistake later, it cannot be retrieved.
  - Note: Please do not disclose the Token obtained by your Alibaba Cloud Disk Open, ==If you accidentally leak it, please immediately go to [**Other instructions¹**](#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view) to deauthorize, and then re-scan the code to authorize a new refresh token , at the same time, all the previous acquisitions will become invalid after the authorization is deactivated, so as to protect the security of your account==

<br/>



## **Drive type**

You can choose the type of cloud disk, and you can choose a different type according to your needs. You can set it when adding a driver using AList of v3.25.1 and above. The default is the `default` type

- **default**: Have Intelligeent level users default to `Non-backup files`, No Have Intelligent User's default display is` Backup file`

- **Resource**: corresponding to `Non-backup files` of the cloud disk
- **Backup**: corresponding to the `Backup file` of the cloud disk

202407 --> After AliyunDrive is updated to `6.0` version, the backup disk is changed to backup files and all files are merged together, but in terms of OpenAPI, there is still a distinction between `Resource` and `Backup` types

![](/img/drivers/aliyun/aliyun_type.png)

<br/>



## **Livp download format**

That is, the IOS `live` photo cannot be downloaded because the non-IOS system cannot parse it, and now it needs `Jpeg` or `Mov` according to your own needs

- Jpeg: is the cover shown in the `live` photo
- Mov: Long press the video screen of the `live` photo



## **Internal upload**

If the server you deploy AList on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.

- **Internal upload** Can Alibaba Cloud ECS in non-Beijing areas be used? No, because Alibaba Cloud Disk is using object storage in the Beijing area

<br/>



## **other instructions**

##### One、

> AList only obtained cloud disk users (**name avatar¹**), (**access file permission²**) and (**write file permission³**), and did not obtain mobile phone number permission
>
> Details can be viewed in two ways:
>
> 1. **Prompt** when scanning the QR code to obtain the refresh token
> 2. ###### Open **Alibaba Cloud Disk APP --> My --> Settings gear in the upper right corner --> Privacy Settings --> Authorization Management --> Click AList** to view
>
>    - If you don't use it, you can manually cancel the permission at any time

##### Two、

> By default, the built-in player of Aliyun Disk is used - **Aliyun Video Previewer**
>
> The video uploaded to the cloud disk will be converted into an H.264 encoded video stream through the transcoding service. (The good thing is that IOS can play... well, it should be like this)
>
> - For videos newly uploaded to the cloud disk, only the first 30s of the video are pre-transcoded by default. Full video transcoding is triggered on first playback. The transcoded video will be cached, and re-transcoding is not required to trigger playback again.
> - Videos shorter than 30s will not trigger pre-transcoding, and will only start transcoding when they are played for the first time.
> - Real-time transcoding takes some time.
> - The picture quality are: LD|SD|HD|FHD|QHD

##### Three、

> Q: Why can’t Alibaba Cloud Disk Open see files of the Office Family Bucket type?
>
> A: ~~Because Aliyun disk has not opened the relevant API, it is temporarily unavailable to view~~ (please look forward to)

##### Four、

> Q：Unable to play Alibaba Cloud disk video online, prompt: **`ExceedCapacityForbidden`** error
>
> A：**User capacity exceeded**, playback restricted, need to expand or delete unnecessary files to free up space,The prompts of the Alist and Alibaba Cloud Drive APP are as shown below
>
> <img src="/img/drivers/aliyun/error.png" style="zoom:70%;" />

##### Five、

> Q: How to load subtitles?
>
> A: Aliyun Disk Open needs to use **Aliyun Video Previewer** player, and temporarily "**Only support transcoding mkv-encapsulated srt, vtt text format subtitles**"
>
> - Currently only supports transcoding eng, jpn, chi three languages, other languages will be lost

##### Six、

> Q: View video prompts in alipan `In the transcoding, please try again later` and linger prompts in AList: `failed link: failed get link: UserNotAllowedAccessResource:user not allowed access resource for violation`
> A: The representative account has been frozen (in the past, it was unable to log in directly), Please look at the red content on the top

### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
