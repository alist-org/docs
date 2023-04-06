---
# This is the title of the article
# title: One-click Script
# This is the icon of the page
icon: waline
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Webdav
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# WebDav

### WebDAV config

| Name     | Value                       |
| -------- | --------------------------- |
| Url      | http[s]\://domain:port/dav/ |
| Host     | domain                      |
| Path     | dav                         |
| Scheme   | http/https                  |
| Port     | Same as web port            |
| Username | Same as web username        |
| Password | Same as web password        |

### WebDav Support

| Storage strategy | list | download | mkdir | rename | move | copy | upload |
| ---------------- | :--: | :------: | :---: | :----: | :--: | :--: | :----: |
| LocalStorage     |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| AliyunDirve      |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Onedrive         |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 189Cloud         |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| GoogleDrive      |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| 123pan           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| FTP              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| SFTP             |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ❌  |   ✅   |
| PikPak           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| S3               |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| USS              |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| WebDAV           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Teambition       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Mediatrack       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| 139yun           |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| YandexDisk       |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| BaiduNetdisk     |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |
| Quark            |  ✅  |    ✅    |  ✅   |   ✅   |  ✅  |  ✅  |   ✅   |

## Software that can be used to mount WebDav

1. **Windows**
   - [Potplayer](https://potplayer.daum.net/)，[kmplayer](https://www.kmplayer.com/home)，RaiDrive，[kodi](https://kodi.tv/download)，[OneCommander](https://www.onecommander.com/)，[Mountain Duck](https://mountainduck.io/)，[netdrive](https://www.netdrive.net/):x:，[rclone](https://rclone.org/)
2. **Android**
   - [Nplayer](https://www.aliyundrive.com/s/cf3p39UXkxa)，[kmplayer](https://www.kmplayer.com/home)，ES File Manager，[kodi](https://kodi.tv/download)，[nova nova magic change](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526)，[reex](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07)，cx File Manager，Solid Expore
3. **IOS**
   - Nplayer，[kmplayer](https://www.kmplayer.com/home)，infuse，Fileball File Manager
4. **电视TV**
   - [Nplayer](https://www.aliyundrive.com/s/cf3p39UXkxa)，[kodi](https://kodi.tv/download)，[nova nova magic change](https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526)
   - If you only look at Ali, you can use Ali's official cooperation
     - Huanshi store-Alibaba cloud disk TV version, online disk player-Alibaba cloud disk TV version
5. **Mac**
   - IINA，[Mountain Duck](https://mountainduck.io/)，infuse，[netdrive](https://www.netdrive.net/)，[rclone](https://rclone.org/)
6. **Linux**
   - davfs2，[rclone](https://rclone.org/)

If there is a suitable addition, please add~



### WebDav fill-in example

Give a few examples of filling in **`WebDav`**, the account password is the account password of your AList user

This is basically the way of writing, and the way of writing may be different for different software. If there is no separate path option, it is normal to add the `/dav` option after the site

:::tabs#WebDav

@tab nplayer

![webdav](/img/guide/webdav/nplayer.png)

@tab reex

![webdav](/img/guide/webdav/reex.png)

@tab infuse

![webdav](/img/guide/webdav/infuse.png)

@tab Fileball

![webdav](/img/guide/webdav/fileball.png)

@tab potplayer

![webdav](/img/guide/webdav/potplayer.png)

:::
