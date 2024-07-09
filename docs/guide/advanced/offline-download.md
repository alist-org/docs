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

# Offline download

::: warning Please read the following tips carefully

There are two kinds of software with offline download function

The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),

Then go back to the front-end interface, ==find the folder you want to upload offline files to, and you can manually enter the folder==

Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (>v 3.11.0)



If you use **docker**, please map the following two default paths by yourself. (mapped to the same directory on the host machine)

- **/opt/alist/data/temp/aria2**
- **/opt/alist/data/temp/qbittorrent**

:::

## **1.Aria2**

[**Click to view instructions for use**](../../config/other.md)

## **2.qBittorrent**

(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)

First of all, we need to configure the default values on the client side of **`qBittorrent`**

According to [source code](https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162), we know that the default values are admin:adminadmin@localhost:8080/

- **ip**: localhost
- **port**: 8080
- **user**: admin
- **password**: adminadmin

1. We fill in the above parameters into the **`qBittorrent`** client, after configuration, we go to the Alist front end to download offline (**method refer to the description at the beginning**)
   - If you are prompted after submitting the offline link: **Qbittorrent not ready**, try restarting both Alist and qBittorrent


2. Default value configuration view address:

   - **https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162**


   - ```{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ```


3.  Use **`qBittorrent`** to offline `.torrent` type files
   - Although you cannot directly add offline `.torrent` type files, you can save the country with a curve Reference: [View method](https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010)


4.  You can configure it yourself not to delete after the download is complete, but to do seeding, the default is `0`, and it will be deleted immediately after uploading
   - Modification location: **Alist background** --> **Settings** --> **Qbittorrent seedtime** option, set the time you need to configure, the unit is `minute`, after the set seeding time is reached, it will automatically delete


5.  ==We can also customize, instead of using the default presets== 
   - Modification location: **Alist Manage** --> **Settings** --> **Qbittorrent url** option, just follow the modification


![Offline download](/img/advanced/offline-download.png)



### **Precautions**

1. Appeared in the background qBittorrent task: **`torrent parse timeout`**, parsing timed out
2. The torrent can be parsed, but **`The system cannot find the path specified.`** appears when uploading.

The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit) )

- **qBittorrent** official website: **https://www.qbittorrent.org/**
- **qBittorrent-Enhanced-Edition** GitHub: **https://github.com/c0re100/qBittorrent-Enhanced-Edition**

3. Because the `v2.8.3` API is used, the minimum version of qBittorrent should be `4.4.0beta2` or `4.3.8` official version
4. If **qBittorrent** sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before `@` (configured on the **qBittorrent** client side)
   - 3 and 4 are not mentioned in the video.



**qBittorrent** Video Tutorials

<BiliBili bvid="BV1NT411q7EN" />

**If the video fails, you can watch it here: https://b23.tv/J34qDiG**

<br/>



## **3.SimpleHttp**

Subsequent supplement

<br/>





## **4.PikPak**

v3.36.0 and above versions support calling Pikpak offline download function in AList

Select <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> in the lower right corner and select `Pikpak` for offline download options

- Support: `magne`, `http`, `ed2k` links

- Also supports: X, TikTok, Facebook, TG URL links

Only Pikpak is supported for offline download. If it is not Pikpak, the following error message will be displayed:

- unsupported storage driver for offline download, only Pikpak is supported
