---
# This is the icon of the page
icon: iconfont icon-file
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# alias

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
  - If 2 uses a local proxy and 1 uses `302`, call 2 first
- Test 3 and Test 4 merged together
   - If 3 uses a local proxy and 4 uses `302`, call 4 first
- In the above two cases, two different folders will appear for display, which will be displayed as follows without interfering with each other

![alias](/img/drivers/alias/alias-3.png)

:::


### **How to add**

Go to storage add [**alias**](../drivers/alias.md)