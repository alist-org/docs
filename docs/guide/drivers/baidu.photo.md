---
# This is the icon of the page
icon: state
# This control sidebar order
order: 32
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

# Moment album

## Refresh token (same as Baidu Netdisk)

[Click here](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1) to get the refresh token.

## album_id

- **When the default is empty, all albums in the root directory will be displayed directly.**
- If you want to mount a single album, you need to fill in the following content

- album_id should be filled in: {album_id}|{tid} Example: 4021858707431029901|316519298447849660

- {album_id} : After entering the album you need to mount, the ID after viewing the top link /album is {album_id}

  - https://photo.baidu.com/photo/web/album/4021858707431029901 
  - **4021858707431029901** is {album_id}

- {tid}: Visit **https://photo.baidu.com/youai/album/v1/list** to get it.
  - After entering the interface, `Ctrl+F` searches for the ID above, and you can see the corresponding {tid} in the following lines
