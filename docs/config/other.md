---
# This is the icon of the page
icon: iconfont icon-snow
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Other settings

### **Aria2**

Set Aria2 uri and Aria2 for offline download. Aria2 needs to be installed on the same server(container if use docker) as alist.



## **Qbittorrent url**

Used to customize **Qbittorrent** parameters to configure the client to use

The default value is: http://admin:adminadmin@localhost:8080/, you can modify it by referring to [specific instructions. ](../guide/advanced/offline-download.md#_2-qbittorrent)



### **Token**

The token that can be used to access all API.



### **other**

1. When using it, I found that there are two Aria2, but what is the difference? [**Click to view the detailed description**](../faq/why.md#what-is-the-difference-between-the-two-aria2)
2. Support using Aria2 to download folders at the same time and save the folder directory structure style

   1. Configure Aria2 method: `Settings` in the lower right corner --> `Aria2 RPC link` --> `Aria2 RPC secret key (fill in if any)`
      - Aria2 is downloaded locally, so you only need to download it locally. Of course, it also supports pushing to other people's computers or your own server or other computers in your own intranet, provided that there is a device on the public network or intranet that has downloaded Aria2
   
   2. Opening method, `Toggle Checkbox` in the lower right corner--> select list file/folder--> `Download` at the bottom--> `send to Aria2`
   
   3. But it is recommended not to download too much at one time. For example, downloading thousands of folders and tens of thousands of files at one time may cause AList to crash