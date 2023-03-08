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



## 1. IPA native installation

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





## 2. TrollStore install

Devices that support the installation of TrollStore (jailbroken devices are not explained here)

The device that supports the installation of TrollStore is up to the iPhone 13 series device system version not greater than `stable version 15.4.1` `beta version 15.6 beta 1 - 5`

If you are an iPhone 14, the factory system version is too high. For other details, please check the table below.

| Version / Device       | arm64 (A8 - A11)                                             | arm64e (A12 - A15, M1)                                       |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 13.7 and below         | Not Supported (CT Bug only got introduced in 14.0)           | Not Supported (CT Bug only got introduced in 14.0)           |
| 14.0 - 14.8.1          | [checkra1n + TrollHelper](https://github.com/opa334/TrollStore/blob/main/install_trollhelper.md) | [TrollHelperOTA (arm64e)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md) |
| 15.0 - 15.4.1          | [TrollHelperOTA (iOS 15+)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md) | [TrollHelperOTA (iOS 15+)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md) |
| 15.5 beta 1 - 4        | [TrollHelperOTA (iOS 15+)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md) | [TrollHelperOTA (iOS 15+)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md) |
| 15.5 (RC)              | Not Supported (CT Bug fixed)                                 | Not Supported (CT Bug fixed)                                 |
| 15.6 beta 1 - 5        | [SSH Ramdisk](https://github.com/opa334/TrollStore/blob/main/install_sshrd.md) | [TrollHelperOTA (arm64e)](https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md) |
| 15.6 (RC1/2) and above | Not Supported (CT Bug fixed)                                 | Not Supported (CT Bug fixed)                                 |



### Installation example

If you want to use the installation is very simple, click the **TrollStore* button to install

![gif](https://pic.rmb.bdstatic.com/bjh/ff1e47ebc1efe5a907dbfffabf4d5f67.gif)



### other instructions

1. If you click the **TrollStore** button to open Apple's magnifying glass, it is because of the following reasons

    - Your `TrollStore` version number is less than version 1.3+, it is recommended to update to the latest version directly
    - Your URL scheme is not enabled. If you enable it, remember to click the first option to log out immediately **(Rebuild Now)**
      - ![TrollStore](/img/advanced/TrollStore.jpg)

2. What is the wake-up format of the TrollStore URL?

    -> `apple-magnifier://install?url=<URL_to_IPA>`

3. Is there any benefit to this installation?

    - See the flow chart below for explanation


```mermaid
---
title: Is there any benefit to this installation?
---
flowchart TB
     subgraph original process
     First download the application from AList --> find the downloaded software
     Find the downloaded software --> click on the software and select share in the upper right corner
     Click on the software and select share in the upper right corner --> find the troll icon
     Find the troll icon --> jump into the troll software to install
     Jump into the troll software to install --> install and delete the software
     end
     subgraph troll process
     Click the AList troll install button and click the pop-up window prompt --> enter the troll app and wait for download
     enter the troll app and wait for download --> after downloading, click the install button
    end
```