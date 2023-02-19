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

# Google Photos

### Root folder file_id

The root directory is root, and other directory IDs are unknown (~~It seems that a separate album cannot be mounted~~ It has not been resolved yet [**Reference**](https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536))

### Get client_id, client_secret

Get the tool https://alist.nn.ci/tool/google/request

How to get your own `client_id (client ID) client_secret (client secret key)` Go to [**Google Drive**](./googledrive.md) which article

::: tip

Tip This app has not been verified by Google

You have been authorized to use an app that is currently in beta. Do not proceed unless you know the developer who invited you.

Let's click **Continue** on the left

Remember to check this option, otherwise an error will be reported, as explained in the following precautions

![Googlephotos](/img/drivers/google/Google-photos2.png)

:::

It is more convenient now. In fact, when obtaining Google cloud disk authorization, select the album permission at the same time, and the token obtained at that time can also be used to mount the album~ kill two birds with one stone

Remember to open **`Photos Library API`** oh~

- https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513

### Two notes:

1. failed get objs: failed to list objs: Request had insufficient authentication scopes.: []
    - It's because you didn't check the album permission (see the picture mentioned above) `view and organize the content in your Google Photos media library, and upload content to the media library when obtaining authorization. Learn more`
    
2. failed get objs: failed to list objs: Photos Library API has not been used in project 357075621397 before or it is disabled. Enable it by visiting <https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397> then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []
    - because **`Photos Library API`** is not enabled,Google Photos API

### Finish

![Googlephotos](/img/drivers/google/Google-photosend.png)