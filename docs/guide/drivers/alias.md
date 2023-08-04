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

See additional explanation [**alias-alias**](../advanced/alias.md)


## **How to fill in**

There are two ways to fill in

1. The first one is that you can only fill in the path of the subfolder and the folder with the same name must be used at the end. It is not recommended to use :x:

    -Paths filling example:

      ```path
      /file1/locala
      /file2/localb
      ```

     

2. The second is to directly mount the root folder path, using the renaming method, it is strongly recommended to use :heavy_check_mark:

    -Paths filling example:

      ```path
      #Example 1 Directly write the root folder
      local: /file1
      local: /file2
     
      #Example 2 Mount different path folders for merging
      test: /file1/localtest233
      Test: /file2/videos/TV series
      Test: /file3 2/TV/Domestic TV Series/Station XX
      ```

According to the second method, we can merge and display different folders, which is convenient and quick



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

