---
# This is the title of the article
title: Why
# This is the icon of the page
icon: repair
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### Why I got the error `failed get storage: can't find storage with rawPath: /` when I open web pages after install/upgrade?

Because you haven't added storage.

### why i lost all my storage in v3

New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.

### Why I see `failed get aria2 version` error in log?

Because you haven't installed aria2 or the settings of aria2 are wrong. Don't worry, it won't affect the use of Alist, you can ignore it.

### why i got the error `Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path` when I add new storage?

I guess the error message is pretty clear. Because [mount_path](../guide/drivers/common.md#mount-path) is **UNIQUE**.  
If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use `Ctrl` + `F5` to force refresh page.

### Why can't I preview the video or audio file?

- Requires a browser-supported encoding
- General browsers do not support h265 encoded video
- General browsers do not support ac3 encoded audio

In particular, for Safari:

- For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDrive play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDrive)

### Why can't I preview the office file?

For microsoft office online viewers, you need:

- External network access
- The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443
- The format of the document (must be one of the following):
- Word: docx, docm, dotm, dotx
- Excel: xlsx, xlsb, xls, xlsm
- PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm
- Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes

### Why can't I preview the PDF file?

- We use `pdf.js` as the default PDF previewer. So it requires https+cors.
- https is opened for yourself, reverse proxy or provide a certificate in the configuration file
- cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer

### Why can't package​ download?

Same as pdf preview, requires https+cors support,and:

- AList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.

### Why does it shows `Uploading in the backend` when I upload a file?

- All uploads of this program use server transfer, which will consume server traffic to communicate with the corresponding storage API

### Why do i get `413` http code when i upload a file?

- If you use a reverse proxy, you may need to specify the maximum upload file size(`client_max_body_size`) and timeout in the web server configuration
- Otherwise, it may happen that the upload is successful but the front end times out and there is no response

### Why can't I download files after add `AliyunDirve` storage and get `InvalidArgument` error?

- Due to referrer restrictions, mobile tokens must be used if you don't open any proxy.

### Why is the uploaded file not displayed/deleted file still/modified in the root directory does not take effect? ​

There is a half-hour cache by default, which can be modified on the Add Storage page. If you need to refresh immediately, click the refresh button in the lower right corner of the directory that needs to be refreshed.

### Why is it still incorrect although I input the password that get by `./alist admin` in terminal?

Check whether the directory you run `./alist admin` and start alist is the same. alist reads the configuration in the current directory where you run the program by default, so running in different directorys will result in different data being read.

### Why does it prompt System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

Your Tampermonkey answering plug-in conflicts, just close it [**For details, click to view**](https://github.com/alist-org/alist/discussions/2399)

### What is the difference between the two uploads?

**1️⃣ stream** directly puts the binary content of the file into the body, so that the backend can use very little memory, but the browser may limit the size because the file needs to be read into the memory at one time.

**2️⃣ form** is to wrap the file into formdata and upload it. The memory used by the backend will be more, but there is no limit on the size.

### What is the difference between the two Aria2?

1️⃣ Background management --> Settings --> Others: **Aria2 here is used to download resources offline to the network disk**

2️⃣ Front-end interface --> Local settings (the gear in the lower right corner) --> **Aria2 here is used to download the resources in the network disk to the local, which is equivalent to a download method, everyone can use it without worrying about problems **

- As for how to use the first offline download:
   - For example, if you want to download some resources offline in the **`/OneDrive/TV/Test`** folder, you must first fill in the **address and secret key information** in the background and then manually enter the front end In this folder of the interface, you can see the **offline download** icon (a magnet style) in the lower right corner after entering it, click and enter the link you want to download offline
   - `Description`: **Offline download, copy and upload** are all in the same way. They are first downloaded from the resource** to the temporary folder of the server** and then uploaded from the **server to the corresponding network disk**

```flow
1=>start: ready
2=>operation: Download to a temporary folder
3=>operation: The server uploads
4=>operation: Upload to the network disk
5=>end: end

1(right)->2(right)->3(right)->4(right)->5
```

### RaiDrive mounts Baidu network disk, you can download files, but you cannot upload files. Throwing files to the mount directory prompts "Prompt "You need permission to perform this operation". How to solve this?

Raidrive is because uploading a file will create an empty file in advance, and Baidu Netdisk does not allow the creation of an empty file.
v2 can succeed because v2 ignores empty file uploads.

### Why is the Terabox mounted successfully but the content is not displayed?

Because **`Terabox`** restricts IP, if you access it from a non-overseas IP, you cannot access it, and naturally the content will not be displayed.

(Overseas machines can be used. If you have to use local machines (or domestic machines) to build, you can find a way to let Alist eat **proxy**)

Cases where it might be useful: **https://github.com/alist-org/alist/discussions/3026**


### Open Alist prompt System error: TypeError: n.replaceAll is not a function?

Your browser kernel version is too low, just add the following to the custom head.

```html
<!--Alist V3 suggested to add, it has been added by default, if you don't suggest adding -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

If you think it is too slow, you can change to Ali Cloud

```html
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

### Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

![11](https://gchat.qpic.cn/gchatpic_new/0/0-0-D72B5BAD55DAE6A3510ADFD2768BAF0F/0)

If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting Alist.
