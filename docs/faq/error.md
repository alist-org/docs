---
# This is the title of the article
title: AList Error-Code
# This is the icon of the page
icon: study
# This control sidebar order
order: 4
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
  - error code
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

## what is this?

It is some error codes during the use of `AList`, and how to solve them (network problems or network disk change API and other problems may not be solved at the time and need human intervention)

<br/><br/>

-----

<Badge text="Q" type="warning" vertical="middle" />：**TooManyRequests** 、**Too Many Requests**

<Badge text="A" type="info" vertical="middle" />：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md)

-----

<Badge text="Q" type="warning" vertical="middle" />：Token is expired（Appears when logging in to the AList account）

<Badge text="A" type="info" vertical="middle" />：It means that your `AList` login is valid for `48` hours by default, you can modify the configuration file `config.json`

- If you are prompted to log in successfully when you log in and then this prompt is displayed again, check whether you have used CDN acceleration to cache the AList.

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

<Badge text="A" type="info" vertical="middle" />：Generally, the refresh token (token) is wrong when adding `driver`, and it can be solved by replacing it with the correct one.

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

<Badge text="A" type="info" vertical="middle" />：Generally, it means that `driver` has been deprecated. For example, Aliyun disk can be replaced with [**Alibaba cloud disk open**](../guide/drivers/aliyundrive_open.md). Others are temporarily unknown, and others not yet

-----

<Badge text="Q" type="warning" vertical="middle" />：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers

<Badge text="A" type="info" vertical="middle" />：These problems are generally caused by network problems, and you can troubleshoot and solve them yourself.

- If you encounter it when you add `Aliyun disk open`：TLS handshake timeout （[Click me to see how to solve](./why.md#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path (appears when mounting the driver)

<Badge text="A" type="info" vertical="middle" />：The path to mount to, it is unique and cannot be repeated

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag (appears when mounting the driver)

<Badge text="A" type="info" vertical="middle" />：The mount path is a required option, please fill in it

-----

<Badge text="Q" type="warning" vertical="middle" />：UNIQUE constraint failed: x_meta.path (appears when adding meta information)

<Badge text="A" type="info" vertical="middle" />：When adding meta information, there can only be one path, and it cannot be repeated

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag (appears when adding meta information)

<Badge text="A" type="info" vertical="middle" />：When adding metadata, the path must be filled in

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed load storage: failed init storage: the site does not allow mounted

<Badge text="A" type="info" vertical="middle" />：The other party's `AList` site is not allowed to mount，[**View detailed instructions**](../guide/drivers/Alist V2 V3.md#link)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/share**）

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

<Badge text="A" type="info" vertical="middle" />：Domestic access is not supported, if you build it locally, you can check this [**Reference Solution**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- For example, Google, Mega, Terabox, etc. that require a proxy to access can be used in this way

-----

<Badge text="Q" type="warning" vertical="middle" />：Search not available（appears when indexing）

<Badge text="A" type="info" vertical="middle" />：The `Search Index` option is not selected, and cannot be built and used. I don’t know which search index to choose? [**Click me to view**](../guide/advanced/search.md#difference-between-different-search-indexes)

-----

<Badge text="Q" type="warning" vertical="middle" />：only chinese and english, numbers and underscores are supported, and the length is no more than 50 (Appears when the baidu.photo folder is renamed)

<Badge text="A" type="info" vertical="middle" />：When renaming the baidu.photo folder, the maximum length is 50

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（Add Alibaba cloud disk open）

<Badge text="A" type="info" vertical="middle" />：When adding the open storage of Alibaba Cloud disk, `root folder ID` is wrong, which of the last ID above is the wrong ID, just get the correct replacement.

-----

That's all for the time being, if there are more, you can leave a message, or add according to the format (for uniformity and intuitiveness)
