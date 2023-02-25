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

# Aliyundrive Open

:::tip

Aliyundrive Open, using the official authorization API development.

:::


:::warning Read the precautions carefully

1. The refresh token obtained by this tool can only be used for **Alibaba cloud disk open platform** storage mount method
2. The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available
3. Not applicable to others, but only for Alist

:::

## refresh token

Go to：**https://alist.nn.ci/tool/aliyundrive/request**

#### Get example graph

**refresh_token** can be obtained in the following two ways

:::tabs#alitoken

@tab Go to login

![token](/img/drivers/aliyun/token1.png)

@tab Scan QrCoden

![token](/img/drivers/aliyun/token2.png)

:::



### Root folder file_id

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)



### Client id，Client secret

Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by Alist.



### other instructions

one、

> AList only obtained cloud disk users (**name avatar¹**), (**access file permission²**) and (**write file permission³**), and did not obtain mobile phone number permission
>
> Details can be viewed in two ways:
>
> 1. **Prompt** when scanning the QR code to obtain the refresh token
> 2. Open **Alibaba Cloud Disk APP --> My --> Settings gear in the upper right corner --> Privacy Settings --> Authorization Management --> Click AList** to view
>     - If you don't use it, you can manually cancel the permission at any time

two、

>By default, the built-in player of Aliyun Disk is used - **Aliyun Video Previewer**
>
>The video uploaded to the cloud disk will be converted into an H.264 encoded video stream through the transcoding service. (The good thing is that IOS can play... well, it should be like this)
>
>- For videos newly uploaded to the cloud disk, only the first 30s of the video are pre-transcoded by default. Full video transcoding is triggered on first playback. The transcoded video will be cached, and re-transcoding is not required to trigger playback again.
>- Videos shorter than 30s will not trigger pre-transcoding, and will only start transcoding when they are played for the first time.
>- Real-time transcoding takes some time.
>- The picture quality are: LD|SD|HD|FHD|QHD
