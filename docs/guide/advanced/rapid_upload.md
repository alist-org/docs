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

# Rapid upload

## **introduce**

**Rapid upload** means that files between two cloud disks can be uploaded to each other quickly without waiting. Here is an introduction to what can be mutually Rapid uploaded **^v3.29.0_New^**

==There is a premise that the files required for Rapid upload in network disk A are already available in network disk B, so that Rapid upload can be performed, otherwise it will be uploaded normally==

::: tip

<i class="fa-solid fa-square-left fa-bounce" style="color: rgb(13, 109, 252)"></i> **The left side** is the source Network Disk、<i class="fa-solid fa-square-arrow-up fa-bounce" style="color: rgb(13, 109, 252)"></i> **The top side** is the target Network Disk

:::

|             |       Aliyun       |        115         |     Baidu^(5)^     |        189         |     Xunlei      |       PikPak       |   GoogleDrive   |    OndDrive     |    localhost    |
| :---------: | :----------------: | :----------------: | :----------------: | :----------------: | :-------------: | :----------------: | :-------------: | :-------------: | :-------------: |
|  localhost  | :white_check_mark: | :white_check_mark: | :white_check_mark: |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
|   Aliyun    | :white_check_mark: | :white_check_mark: |     :question:     |        :x:         |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|     115     | :white_check_mark: | :white_check_mark: |     :question:     |        :x:         |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|    Baidu    |        :x:         |        :x:         |     :question:     | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|     189     |        :x:         |        :x:         | :white_check_mark: | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|   Xunlei    |        :x:         |        :x:         |     :question:     |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
|   PikPak    |        :x:         |        :x:         |     :question:     |        :x:         |       :x:       | :white_check_mark: |       :x:       |       :x:       | :no_entry_sign: |
| GoogleDrive | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |       :x:       |        :x:         |       :x:       |       :x:       | :no_entry_sign: |
|  OneDrive   |  :grey_question:   |  :grey_question:   |  :grey_question:   |  :grey_question:   | :grey_question: |  :grey_question:   | :grey_question: | :grey_question: | :no_entry_sign: |

- Note^(1)^: The **Aliyun** mentioned here refers to [**aliyundriveOpen**](../../guide/drivers/aliyundrive_open.md)
- Note^(2)^: **OneDrive** has not been tested because there is no account. If the test is valid and there are no problems, feedback is welcome.
- Note^(3)^: **Aliyun** and **189**: Both need to turn on the Rapid upload option in the storage configuration, otherwise Rapid upload cannot be performed
- Note^(4)^: **GoogleDrive** files can be transferred to **189** in seconds and **189** can transfer files to **189** in seconds. There may be some problems and are not very stable. Need to Pay attention to observation
- Note^(5)^: **Baidu cloud Disk** can only be stored from local storage Rapid Upload to the network disk. If you use cross -storage to Copy Rapid Upload, you can only download the file first and then perform RAPID Upload.

<br/>



### **How to use**

1. Right-click the file you want to transfer in the list, click Copy, and then select the folder to transfer to.

2. If there are multiple files, you can select the entire folder or open the checkbox in the lower right corner to select multiple files, and then there is a row of buttons at the bottom to click to copy.

<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="Rapid_upload" title="Rapid_upload"/>
    <img src="/img/advanced/r_upload_2.png" alt="Rapid_upload" title="Rapid_upload"/>
</div>
