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

# 一刻相册


## 刷新令牌（同百度网盘的一样）

[点此](https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://tool.nn.ci/baidu/callback&scope=basic,netdisk&qrcode=1)获取刷新令牌。

## 相册ID

- **默认为空时,直接显示根目录全部相册.**
- 如果挂载单个相册时需填写如下内容

- 相册ID 应填：{album_id}|{tid}     示例：4021858707431029901|316519298447849660

- {album_id} ：进入你需要挂载的相册后,查看顶部链接/album 后的ID就是 {album_id}

  - https://photo.baidu.com/photo/web/album/4021858707431029901   
  - **4021858707431029901**就是 {album_id} 

- {tid}:访问 **https://photo.baidu.com/youai/album/v1/list.** 获取
  - 进入界面后`Ctrl+F`搜索上面的ID,在下面数几行就可以看到对应的 {tid} 
