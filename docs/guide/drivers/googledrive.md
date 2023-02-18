---
# This is the icon of the page
icon: state
# This control sidebar order
order: 6
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

# Google Drive

Support team disk
### Get client_id, client_secret, refresh_token
Refer to https://alist.nn.ci/tool/google/request

### Root directory file_id
Similar to Aliyundrive, the last string of the official website URL, such as:

![google](/img/drivers/googledrive.png)

## Detailed Text Tutorial (Deprecated)

::: tip

1. The machine that builds the Alist service must first be able to connect to the Google network disk (scientific connection is not possible, the program can be connected), or directly use a foreign server~
2. The test version of the application token seems to be invalid after a while (about 7 days). If a long-term stable token is required, it seems that the application can only be released?

:::

**First open https://tool.nn.ci/google/request and click `1. Create an application or use the default application directly`**

![Google](/img/drivers/google/Google-0.png)

**If you do not have a Google account, log in to your Google account first, and click `Enabled APIs and Services` or `Library` to choose one of the two**

![Google](/img/drivers/google/Google-1.png)

**Click `Enabled APIs and Services` or `Library` to enter, then drop down to find `Google Driver API`**

![Google](/img/drivers/google/Google-2.png)

Click **`Google Driver API`** to enter, see the diagram below to enable the API service

![Google](/img/drivers/google/Google-3.png)

  **`Google Driver API`** After enabling, we will create an application - look carefully~~~

If it is the first creation, there should be  **`❗If you need to create an OAuth client ID, you must first configure the unified screen`** , let's go to configure it, click on the page **`configure consent screen`** You can jump to the configuration interface, see the picture below for the configuration tutorial, and come back to see this picture after configuration~

![Google](/img/drivers/google/Google-4-1.png)

**`OAuth`** configuration tutorial, if it has been configured, just ignore this picture (if you can’t see clearly, you can zoom in)

![Google](/img/drivers/google/Google-6.png)

After we create **`OAuth Client ID`**, click on the **`OAuth Client ID`** we just created and write whatever you like~ After entering, there are `Client ID` and `Client Secret`

![Google](/img/drivers/google/Google-7.png)

After getting `Client ID` and `Client Secret`

Let's go back to the beginning **https://tool.nn.ci/google/request** and fill in `Client ID` and `Client Secret`

![Google](/img/drivers/google/Google-8.png)

Fill in `Client ID` and `Client Secret` and click `2. Get Code and paste` to perform the following series of operations

![Google](/img/drivers/google/Google-11-1.png)

After the above operations, we also got the `refresh token`, let’s go to **`Alist background`** add account to add it~

![Google](/img/drivers/google/Google-12-1.png)

After adding an account in the background and saving it, we will mount it successfully~ Let's take a look

The left side is mounted by Alist, and the right side is the content in the Google network disk~ **o(*^＠＠^*)o**

![Google](/img/drivers/google/Google-13-1.png)



::: details video tutorial

Although the video is V2, the acquisition method is the same as V3:

**https://www.bilibili.com/video/BV1YB4y1h7cn**

:::