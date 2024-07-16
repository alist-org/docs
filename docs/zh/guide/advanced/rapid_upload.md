---
# This is the icon of the page
icon: fa-solid fa-cloud-arrow-up
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


# 秒传

## **介绍**

**秒传** 就是两个云盘之间的文件可以快速相互上传，不用等待，下面介绍一下都有哪些可以相互秒传 **^v3.29.0新增^**

==有个前提，就是A网盘需要秒传的文件，在B网盘已经有了，才可以进行秒传，否则就是正常上传。==

::: tip

<i class="fa-solid fa-square-left fa-bounce" style="color: rgb(13, 109, 252)"></i> **左侧**为来源网盘、<i class="fa-solid fa-square-arrow-up fa-bounce" style="color: rgb(13, 109, 252)"></i> **顶部**为目标网盘

:::



|          |      阿里云盘      |        115         |   百度云盘^(5)^    |      天翼云盘      |    迅雷云盘     |       PikPak       |    谷歌云盘     |    OneDrive     |    本地存储     |
| :------: | :----------------: | :----------------: | :----------------: | :----------------: | :-------------: | :----------------: | :-------------: | :-------------: | :-------------: |
| 本地存储 | :white_check_mark: | :white_check_mark: | :white_check_mark: |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
| 阿里云盘 | :white_check_mark: | :white_check_mark: |     :question:     |        :x:         |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|   115    | :white_check_mark: | :white_check_mark: |     :question:     |        :x:         |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
| 百度云盘 |        :x:         |        :x:         |     :question:     | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
| 天翼云盘 |        :x:         |        :x:         | :white_check_mark: | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
| 迅雷云盘 |        :x:         |        :x:         |     :question:     |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
|  PikPak  |        :x:         |        :x:         |     :question:     |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
| 谷歌云盘 | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
| OneDrive |  :grey_question:   |  :grey_question:   |  :grey_question:   |  :grey_question:   | :grey_question: |  :grey_question:   | :grey_question: | :grey_question: | :no_entry_sign: |

- 注^(1)^：这里提到的**阿里云盘**是指的[**阿里云盘Open**](../../../zh/guide/drivers/aliyundrive_open.md)
- 注^(2)^：**OneDrive** 是因为已经没有了帐号暂时没有进行测试，如果有进行测试有效无问题，欢迎反馈
- 注^(3)^：**阿里云盘Open** 和 **天翼云盘** ：都需要在存储配置中将配置中的秒传选项打开，否则无法秒传
- 注^(4)^：将**谷歌云盘**文件秒传到**天翼云盘** 和 **天翼云盘**将文件秒传到**天翼云盘**，可能有一些问题，并不是很稳定，需要留意观察
- 注^(5)^：**百度云盘**只能从本地存储秒传到网盘，如果是使用跨存储进行复制秒传只能先将文件下载下来再进行秒传行为

<br/>



### **使用方法**

1. 在列表右键选择需要传输的文件点击复制，然后选择传输到那个文件夹就可以，

2. 如果是多个文件可以选择整个文件夹或者右下角打开复选框多选文件，然后最底部有一排按钮可以点击复制

<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="秒传" title="秒传"/>
    <img src="/img/advanced/r_upload_2.png" alt="秒传" title="秒传"/>
</div>
