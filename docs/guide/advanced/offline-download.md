---
# This is the icon of the page
icon: magnet
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

:::

## 1.Aria2

[**Click to view instructions for use**](../../config\other.md)

## 2.qBittorrent

(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)

First of all, we need to configure the default values on the client side of **`qBittorrent`**

According to [source code] (https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159), we know that the default values are admin:adminadmin@localhost:8080/

- **ip**: localhost
- **port**: 8080
- **user**: admin
- **password**: adminadmin

We fill in the above parameters into the **`qBittorrent`** client, after configuration, we go to the Alist front end to download offline (**method refer to the description at the beginning**)

- If you are prompted after submitting the offline link: **Qbittorrent not ready**, try restarting both Alist and qBittorrent

Default value configuration view address: **https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159**

- ```{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ```

![Offline download](/img/advanced/offline-download.png)
