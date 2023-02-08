---
# This is the icon of the page
icon: mini-app
# This control sidebar order
order: 8
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

# IPA 安装

直接上传 ipa 文件即可。

但是对于 **iOS 16 以上的** 设备，你需要将 ipa 文件命名为：`原文件名@bundle-identifier.ipa`，即需要在原来的基础上加入`@bundle-identifier`，其中的 `bundle-identifier` 即 IPA 包中 `Info.plist` 的 `CFBundleIdentifier`。如：

- aszs@rn.notes.best.ipa

推荐你使用 [ipa-renamer](https://github.com/Xhofe/ipa-renamer) 自动快速地重命名你的 IPA 文件。



### Tips

 ==.ipa安装 需要 https 和 有效的证书== ，不是随便一个包上传上去没签名就能安装的

<ArtPlayer 

  src="https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2786278463950405640&raw=true" 

  poster="/img/advanced/video.jpg"

/>

**视频若失效可以前往观看：https://b23.tv/oLvHHC8**
