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