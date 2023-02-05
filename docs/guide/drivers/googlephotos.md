---
# This is the icon of the page
icon: state
# This control sidebar order
order: 7
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

# Google Photos

### Root folder file_id

The root directory is root, and the other directory IDs are unknown (it seems that a separate photo album cannot be mounted)

### Get client_id, client_secret

Get the tool https://tool.nn.ci/google/request



How to get your own `client_id (client ID) client_secret (client secret key)` Go to [**Google Drive**](./googledrive.md) which article



Get client_id, client_secret Visit the link below to get the Code code

::: tip

Tip This app has not been verified by Google

You have been authorized to use an app that is currently in beta. Do not proceed unless you know the developer who invited you.

Let's click **Continue** on the left

Remember to check this option, otherwise an error will be reported, as explained in the following precautions

![Googlephotos](/img/drivers/google/Google-photos2.png)

:::

```html
https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=={client_id}=&response_type=code&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&scope=openid%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary&access_type=offline&approval_prompt=auto&flowName=GeneralOAuthFlow
```

  ==**(where `{client_id}` is replaced with `client_id` of your own application)**== 

After the Code code is obtained, obtain the refresh token

![Googlephotos](/img/drivers/google/Google-photos.png)



Remember to open **`Photos Library API`** oh~

https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513



### Two notes:

1. failed get objs: failed to list objs: Request had insufficient authentication scopes.: []
    - It's because you didn't check `View and organize the content in your Google Photos media libraryView and organize the content in your Google Photos media library when getting the Code code
      Content, upload content to the media library. For details, upload content to the media library. Learn more`

2. failed get objs: failed to list objs: Photos Library API has not been used in project 357075621397 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []
    - because **`Photos Library API`** is not enabled

### Finish

![Googlephotos](/img/drivers/google/Google-photosend.png)