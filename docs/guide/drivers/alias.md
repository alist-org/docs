---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 31
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
# alias



Let's look at a schematic

![alias](/img/drivers/alias/alias.png)

We see that two different folders are merged into one folder, and the file folders with the same name are also merged together, and the unique ones are displayed separately

- Example 1 `riluo.jpg` is unique to local 1, shown above

- Example 2 Two folders have a `video` folder, but the content inside will also be merged, and the subfolders also apply to the display rules of `merging with the same name`
   - There are two videos in each of the two folders, but one of them has the same name. Finally, according to the display rules of `merging with the same name`, it becomes `3` files for display after merging

What are `alias`?    `alias` is a function for path merging

Except **`download preview (read-only)`** operations ^(copy, delete, rename, offline download, upload)^ are not allowed

For example: cloud disk account 1 and cloud disk account 2 both have the folder `Movies`, but the contents may not (all) overlap

**`Previously (virtual path)`**: can only be mounted to two different paths (cloud disk 1/movie, cloud disk 2/movie) or (movie\cloud disk 1, movie\cloud disk 2 )
**`Now(alias)`**: Provide an aggregated folder (movie) which can contain the contents of cloud disk 1 and cloud disk 2 at the same time



The folder content rules when displaying are as follows
1. Merge with the same name: the same files (folders) are automatically merged into one
2. Priority of the same name: When accessing resources, the path file (folder) at the top (front) when filling in the path for each fixed access
   - If the files with the same name are merged, click **` to play, and when downloading`**, it will be called first. When filling in `Paths`, the file with the 302 mode path will be used first.

Let me explain **`same name first²`** access rules


## **How to fill in**

There are two ways to fill in

1. The first one is that you can only fill in the path of the subfolder and the folder with the same name must be used at the end. It is not recommended to use :x:

    -Paths filling example:

      ```path
      /file1/locala
      /file2/localb
      ```

     

2. The second is to directly mount the root folder path, using the `renaming` method, it is strongly recommended to use :heavy_check_mark:

    -Paths filling example:

      ```path
      #Example 1 Directly write the root folder
      merge: /file1
      merge: /file2
     
      #Example 2 Mount different path folders for merging
      merge: /file1/localtest233
      merge: /file2/videos/TV series
      merge: /file3 2/TV/Domestic TV Series/Station XX
      ```

According to the second method, we can `merge` and display different folders, which is convenient and quick

:::tabs#alias

@tab example 1

Example 1. Fill in the access according to the following path(302 mode has priority)

```
local: /localtest/local1
local: /localtest/local2
local: /localtest/local3
local: /localtest/local4
```

- 1, if there is a video 1 2 3 4, each visit is `1`
  - If 1 3 4 uses the local proxy and 2 uses `302`, call 2 first

- 2, a video 3 4 yes then every visit is `3`
  - If 3 uses a local proxy and 4 uses `302`, call 4 first


@tab example 2

Example 2. Fill in the access according to the following path(302 mode has priority)

```
local: /localtest/local4
local: /localtest/local3
local: /localtest/local2
local: /localtest/local1
```

- 1, if a video has 1 2 3 4, each visit is `4`
  - If 1 3 4 uses the local proxy and 2 uses `302`, call 2 first

- 2, a video 3 4 has then every visit is `4`
  - If 4 uses a local proxy and 2 uses `302`, call 2 first

@tab example 3

Example 3、 Fill in the access according to the following path(302 mode has priority)

Of course, it is not limited to only 2 folders, just write according to personal needs

```
Local test:/local1/video
Local test:/local2/video
Test other:/test3/images
Test other:/test4/video/tv
```

- local1 local2 merged together
  - If 2 uses a local proxy and 1 uses `302`, call 1 first
- Test 3 and Test 4 merged together
   - If 3 uses a local proxy and 4 uses `302`, call 4 first
- In the above two cases, two different folders will appear for display, which will be displayed as follows without interfering with each other

![alias](/img/drivers/alias/alias-3.png)

:::

### **The download method to use**

​		 When adding **`alias`**, `Web Proxy` and `Webdav Policy` are not modified by default. The storage path filled in the Paths path can be `302`, `Local Proxy`, `Download Proxy URL`, three modes Mixed Playback Mixed Playback is possible

​		 If you checked `Web Proxy`, the storage filled in by the Paths path, if there is a 302 mode playback, it will be played in transit (local proxy mode) at that time, and it will become a proxy mode. If the Webdav policy is also changed, it will also change

​		Of course, it is up to you to choose whether to change the mode



### **What if you don’t know how the cloud disks you added are different?**

1. You can go to the bottom of the corresponding document to view the document, there is a flow chart description

    - If there is a 302, the 302 method is used by default. If there are only local proxy and download proxy URLs, the default is to use the local proxy, provided that you have not manually selected

2. You can check when adding storage, select the corresponding storage to view, for example, let’s check the methods of Alibaba Cloud and 115 respectively

    - As you can see from the figure below, Alibaba Cloud Disk has the option of `web proxy`, and `webdav policy` defaults to 302. It can be judged that Alibaba Cloud Disk uses the 302 method by default
    - As you can see from the figure below, the 115 network disk does not have the option of `web proxy`, and the `webdav strategy` defaults to the local proxy. It can be judged that the 115 network disk uses the local proxy mode by default

    - ![alias](/img/drivers/alias/alias-2.png)



### **other instructions**

> If you are using `Windows`, the following situation will occur, and folders with different capitalization will also be regenerated
> For example, Local 1 and Local 2 have a lowercase v for `video` respectively, and the folder OneDrive has an uppercase V `Video` folder
> Then a lowercase video folder will be generated, which contains only `local 1, local 2` files merged by two folders
> At the same time, the uppercase `Video` will gather the files of the three folders

This is because Windows is case-insensitive, video and Video will be considered as the same folder, you will not have this problem if you switch to Linux or Mac

> Aliases are not supported for load balancing for the time being (if it is supported later, the document will be modified here, if it is not modified, it is not yet supported)

<br/>



### **Proxy Range**

You need to enable `Web Proxy` or` Webdav Native Proxy` to take effect

- Currently only applicable to：`alias`、`139Yun`、`AList V3`
  - Function Description：**https://github.com/alist-org/alist/pull/6496#issue-2309839607**

<br/>



### **Protect same name**

^>v3.34.0^Now alias supports the two operations of `Delete` and` Rename`，==By default, use==

File names like file names may appear in the alias. For folders with the same folder name, you cannot `Delete` or `Rename` when the `Protect same name` is opened.

-----

::: details Protect same name Use for example

We fill in the two folders of `a` and` b` to the alias options

```
a/          b/                  alias
a/1.png     b/1.png             alias/1.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin ---> According to the rule, aliases in directories listed earlier take precedence, and files with different names in separate folders are given priority.
                                alias/6.css
```

If we attempt to Rename or Delete a file named `1.png` while the `Protect same name` feature is enabled, the following message will be displayed in the top right corner:

<div style="color: red; display: flex; justify-content: center; align-items: center; border: 3px solid red;">
    <ul style="list-style-type: none;">
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Rename</b></li><br/>
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Delete</b></li>
    </ul>
</div>

If we turn off the options of `Protect Same Name`, change to` a/1.png` to `a/11.png` will become the following display

- 因为a/b两个文件夹都有一样的文件，`重命名`和`下载`一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件 ( Can't translate the meaning that can be understood)

```
a/          b/                  alias
a/1.png     b/1.png             alias/11.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin
                                alias/1.png  ---> Because the b folder is in the rear, the file list display is relatively backward
                                alias/6.css
```

If you really do n’t understand, you can test it yourself and then install the production environment by yourself

:::
