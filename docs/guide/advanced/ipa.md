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

# IPA install

You can directly upload the ipa file. 

But for **ios>=16**, you need to name the ipa file: `original file name@bundle-identifier.ipa`, that is, you need to add `@bundle-identifier` on the original basis, in which `bundle-identifier` is the `CFBundleIdentifier` of Info.plist in the IPA package. Such as:

- aszs@rn.notes.best.ipa

Recommended to use [ipa-renamer](https://github.com/Xhofe/ipa-renamer) to rename your ipa files automatically and quickly.

- If you are a mobile phone user, you can also rename the IPA file, but you must know the format mentioned above, but there is no mobile phone renaming software, please solve it yourself...

### Tips

-  ==.ipa installation requires https and a valid certificate== , not just a package can be installed without a signature

:::tabs#ipa

@tab How to change the name of the computer version

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2786278463950405640&raw=true" 
  poster="/img/advanced/video.png"
/>

**If the video fails, you can watch it here: https://b23.tv/oLvHHC8**

@tab how to change the name of the IOS 16 mobile phone

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4871961534007938&raw=true" 
/>

**If the video fails, you can watch it here:https://b23.tv/GxGG8Dn**

:::



**Installation Demo**: Deploy **HTTPS** and **IPA files** are signed prerequisites, if ==IOS16 rename by yourself== If you can’t install it yourself, please check the problem yourself

- **Installation demo environment**: IOS15.4.1 iPhone12PM, personal certificate, HTTPS

<ArtPlayer 
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4870951244144255&raw=true" 
/>