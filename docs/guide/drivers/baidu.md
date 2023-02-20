---
# This is the icon of the page
icon: state
# This control sidebar order
order: 18
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

# Baidu Netdisk

:::tip
Due to the limitation of Baidu Disk API, downloading files larger than about 20M needs to carry the header: "User-Agent": "pan.baidu.com", so when downloading files larger than 20M, you need to set the request header yourself, such as using curl:
```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent: pan.baidu.com'
```
Or use the proxy function in this program to transfer.
:::

### Refresh token
[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.

### Root folder path
The root foler to mount, defaults to `/`, same as local storage.

### Download api
- official: The official interface, very stable, but for larger files, UA needs to be modified and the speed is slow
- crack: unofficial interface, no need to modify UA and some files may not limit the speed, but **maybe** unstable
  - ==crack: Unofficial Interface== Seems to be Harmonized? [**Click here for details to view FAQs**](../../faq/why.md#baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna)



::: details If you don't know how to set **`"User-Agent"`** see here

 ==The following methods are limited to Baidu super member users== 

 ==Prompt again The following methods are limited to Baidu super member users== 

It will only be useful if a member finishes modifying **`"User-Agent"`** (choose official and 302)

If you don’t change **`"User-Agent"`**, you can enable ==Web Agent==, the disadvantage is that you need to build an Alist machine for transfer, that is to say, you need a large broadband to help you transfer

#### Method 1 - Using a browser plugin

If you really don’t know how to do it, you can take a look at an example on the Web page: **https://www.bilibili.com/video/BV1UA4y1X7J8**

![alist](/img/drivers/baidu/bdUA.png)

#### Method 2 - Using IDM - Internet Download Manager

![alist](/img/drivers/baidu/idm-ua.png)

#### Method 3 - Using Aria2

![alist](/img/drivers/baidu/aria2-ua.png)

:::