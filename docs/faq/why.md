---
# This is the title of the article
title: Why
# This is the icon of the page
icon: repair
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Config
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### Why I got the error `failed get storage: can't find storage with rawPath: /` when I open web pages after install/upgrade?

Because you haven't added storage.

### why i lost all my storage in v2

New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.

### Why I see `failed get aria2 version` error in log?

Because you haven't installed aria2 or the settings of aria2 are wrong. Don't worry, it won't affect the use of Alist, you can ignore it.

### Why can't I preview the video or audio file?

- Requires a browser-supported encoding
- General browsers do not support h265 encoded video
- General browsers do not support ac3 encoded audio

In particular, for Safari:

- For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDirve play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDirve)

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

- All uploads of this program use server transfer

### Why do i get `413` http code when i upload a file?

- If you use a reverse proxy, you may need to specify the maximum upload file size and timeout in the configuration
- Otherwise, it may happen that the upload is successful but the front end times out and there is no response

### Why can't I download files after add `AliyunDirve` storage and get `InvalidArgument` error?

- Due to referrer restrictions, mobile tokens must be used if you don't open any proxy.
