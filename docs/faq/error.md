---
# This is the title of the article
title: AList Error-Code
# This is the icon of the page
icon: iconfont icon-question                                                                                        
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

<br/>

-----

<Badge text="Q" type="warning" vertical="middle" />：Ali cloud disk open appears **TooManyRequests** 、**Too Many Requests**

<br/>

<Badge text="A" type="info" vertical="middle" />：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md)

-----

<Badge text="Q" type="warning" vertical="middle" />：Ali cloud disk open appears **ExceedCapacityForbidden** 

<br/>

<Badge text="A" type="info" vertical="middle" />：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md#four、)

-----

<Badge text="Q" type="warning" vertical="middle" />：Token is expired（**Appears when logging in to the AList account**）

<br/>

<Badge text="A" type="info" vertical="middle" />：It means that your `AList` login is valid for `48` hours by default, you can modify the configuration file `config.json`

- If you are prompted to log in successfully when you log in and then this prompt is displayed again, check whether you have used CDN acceleration to cache the AList.

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

<br/>

<Badge text="A" type="info" vertical="middle" />：Generally, the refresh token (token) is wrong when adding `driver`, and it can be solved by replacing it with the correct one.

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

<br/>

<Badge text="A" type="info" vertical="middle" />：Generally, it means that `driver` has been deprecated. For example, Aliyun disk can be replaced with [**Alibaba cloud disk open**](../guide/drivers/aliyundrive_open.md). Others are temporarily unknown, and others not yet

-----

<Badge text="Q" type="warning" vertical="middle" />：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable

<br/>

<Badge text="A" type="info" vertical="middle" />：These problems are generally caused by network problems, and you can troubleshoot and solve them yourself.

- If you encounter it when you add `Aliyun disk open`：TLS handshake timeout （[Click me to see how to solve](./why.md#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path (**appears when mounting the driver**)

<br/>

<Badge text="A" type="info" vertical="middle" />：The path to mount to, it is unique and cannot be repeated

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag (**appears when mounting the driver**)

<br/>

<Badge text="A" type="info" vertical="middle" />：The mount path is a required option, please fill in it

-----

<Badge text="Q" type="warning" vertical="middle" />：UNIQUE constraint failed: x_meta.path (appears when adding meta information)

<br/>

<Badge text="A" type="info" vertical="middle" />：When adding meta information, there can only be one path, and it cannot be repeated

-----

<Badge text="Q" type="warning" vertical="middle" />：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag (appears when adding meta information)

<br/>

<Badge text="A" type="info" vertical="middle" />：When adding metadata, the path must be filled in

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed load storage: failed init storage: the site does not allow mounted

<br/>

<Badge text="A" type="info" vertical="middle" />：The other party's `AList` site is not allowed to mount，[**View detailed instructions**](../guide/drivers/Alist%20V2%20V3.md#link)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/share**）

<br/>

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

<br/>

<Badge text="A" type="info" vertical="middle" />：Domestic access is not supported, if you build it locally, you can check this [**Reference Solution**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- For example, Google, Mega, Terabox, etc. that require a proxy to access can be used in this way

-----

<Badge text="Q" type="warning" vertical="middle" />：Search not available（**appears when indexing**）

<br/>

<Badge text="A" type="info" vertical="middle" />：The `Search Index` option is not selected, and cannot be built and used. I don’t know which search index to choose? [**Click me to view**](../guide/advanced/search.md#difference-between-different-search-indexes)

-----

<Badge text="Q" type="warning" vertical="middle" />：only chinese and english, numbers and underscores are supported, and the length is no more than 50 (**Appears when the baidu.photo folder is renamed**)

<br/>

<Badge text="A" type="info" vertical="middle" />：When renaming the baidu.photo folder, the maximum length is 50

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（**Add Alibaba cloud disk open**）

<br/>

<Badge text="A" type="info" vertical="middle" />：When adding the open storage of Alibaba Cloud disk, `root folder ID` is wrong, which of the last ID above is the wrong ID, just get the correct replacement.

-----

<Badge text="Q" type="warning" vertical="middle" />：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

<br/>

<Badge text="A" type="info" vertical="middle" />：Your Tampermonkey answering plug-in conflicts, just close it [**For details, click to view**](https://github.com/alist-org/alist/discussions/2399)

-----

<Badge text="Q" type="warning" vertical="middle" />：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

<br/>

<Badge text="A" type="info" vertical="middle" />：If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting AList.

-----

<Badge text="Q" type="warning" vertical="middle" />：Failed get storage: please add a storage first. （**When adding offline download files**）

<br/>

<Badge text="A" type="info" vertical="middle" />：When adding an offline download file, you need to enter which cloud disk you want to download the offline download file to and then click on the `folder` instead of adding it on the home page [**Complete Instructions**](../guide/advanced/offline-download.md)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（**When adding onedrive_app**）

<br/>

<Badge text="A" type="info" vertical="middle" />：The newly created `OneDrive` user account does not take effect in real time, Delay takes effect, wait for a few hours and try again [**Case**](https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892)

-----

<Badge text="Q" type="warning" vertical="middle" />：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （**When starting the AList program**）

<br/>

<Badge text="A" type="info" vertical="middle" />：Port number 5244 is already in use, check whether it is occupied (generally you have started an AList with port 5244), or modify the port number started by AList, [**How to modify**](../config/configuration.md#port)

-----

<Badge text="Q" type="warning" vertical="middle" />：**[When AList upload file](why.md#why-do-i-get-413-http-code-when-i-upload-a-file)**：Request failed with status code 413

<br/>

<Badge text="A" type="info" vertical="middle" />：Limit the size of the files configured nginx, modify the nginx's `client_max_body_size`,If you are a pagoda to go to the pagoda page to modify [Example](https://blog.csdn.net/u012514495/article/details/127981183)

-----

That's all for the time being, if there are more, you can leave a message, or add according to the format (for uniformity and intuitiveness)

