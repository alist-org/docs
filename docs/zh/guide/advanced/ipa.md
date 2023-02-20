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

- 如果你是手机用户也可以给IPA文件改名，但是你要会上述提到的格式才行，但是不提供手机改名软件请你自己解决...



### Tips

- ==.ipa安装 需要 https 和 有效的证书== ，不是随便一个包上传上去没签名就能安装的
- 爱思助手签名的无法使用在线安装，只能使用爱思助手安装（经群友测试）

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2786278463950405640&raw=true" 
  poster="/img/advanced/video.png"
/>

**视频若失效可以前往观看：https://b23.tv/oLvHHC8**



**安装演示**：部署**HTTPS**和**IPA文件**已签名前提，如果是 ==IOS16自行改名== 若自己无法安装请自行排查问题所在

- **安装演示使用环境**： IOS15.4.1 iPhone12PM，个人证书，HTTPS

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4870951244144255&raw=true" 
/>
