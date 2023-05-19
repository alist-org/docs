---
# This is the icon of the page
icon: state
# This control sidebar order
order: 12
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

# BaiduYun Share Link

Driver for BaiduYun share link, supports downloading but not uploading, using an unofficial api.

## **Settings**

Viewing folders require the surl and pwd, and BDUSS is needed for downloading.
surl is the part between `pan.baidu.com/s/` and the `?`, and pwd is the password if the link got one.
You can get BDUSS from your cookie, follow the [guidance](http://pandownload.net/faq/cookie.html), prefix not needed.

## **QA**
|setting|error message|tips|
|---|---|---|
|surl|`{"errno":2,"errtype":0}`|invalid share link|
|pwd|`{"errno":-130,"errtype":"mispwd-9"}`|invalid password|
|BDUSS|`{"errno":9019,"errmsg":"need verify"}`|invalid BDUSS, get a new one|
|UA|`{"error_code":31326,"error_msg":"user is not authorized, hitcode:119"}`|invalid user-agent, set a non-browser UA(ex. netdisk) or use web proxy|

## **Developing**

The api is from [github.com/yuantuo666/baiduwp-php](https://github.com/yuantuo666/baiduwp-php), an unofficial project.
We have developed the folder viewing and file downloading function, further developments are welcome.
Since we don't have an official document, there might be some compatible problems. You can give feedback on github.
We can't break those limits from Baidu and you should follow the official laws.
