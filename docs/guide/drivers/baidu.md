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
[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.

### Root folder path
The root foler to mount, defaults to `/`, same as local storage.

### Download api
- official: The official interface, very stable, but for larger files, UA needs to be modified and the speed is slow
- crack: unofficial interface, no need to modify UA and some files may not limit the speed, but **maybe** unstable
  - ==crack: Unofficial Interface== Seems to be Harmonized? [**Click here for details to view FAQs**](../../faq/why.md#baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist,-hit-illegal-dlna)




::: details May Be Helpful For You

If you really don’t know it, you can take a look at an example on the web page: **https://www.bilibili.com/video/BV1UA4y1X7J8**

The premise is that you need to have a member. It will only be useful if you have a member who has changed `UA` (choose official and 302). It can only help you here

If you don’t change the UA, you can enable ==Web Proxy== , the disadvantage is that you need to build an Alist machine to transfer, that is to say, you need a large broadband to help you transfer

![alist](/img/drivers/baidu/bdUA.png)

:::