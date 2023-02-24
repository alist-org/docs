---
# This is the icon of the page
icon: state
# This control sidebar order
order: 3
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

# Aliyundrive Open

:::tip

Aliyundrive Open, using the official authorization API development.

:::

## refresh token

Go to：**https://alist.nn.ci/tool/aliyundrive/request**

#### Get example graph

**refresh_token** can be obtained in the following two ways

:::tabs#alitoken

@tab Go to login

![token](/img/drivers/aliyun/token1.png)

@tab Scan QrCoden

![token](/img/drivers/aliyun/token2.png)

:::



### Root folder file_id

Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940

which is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`

![file_id](/img/drivers/aliyundrive.png)



### Client id，Client secret

Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by AList.
