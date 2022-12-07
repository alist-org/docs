---
# This is the icon of the page
icon: search
# This control sidebar order
order: 8
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

# 搜索

### 如何使用

按照以下步骤开启搜索:

1. 转到`索引`页，选择一个搜索索引，并单击`保存`;
2. 保存索引后，单击`构建索引`来构建索引;
3. 现在你可以通过点击页面右上角的搜索块或使用快捷键`Ctrl + K`来搜索文件。

### 不同搜索索引之间的差异

- `database`:按数据库搜索，它使用现有的 data.db。它将创建一个新表，记录父目录、名称和每个对象的大小，但搜索不拆分单词，这意味着匹配您输入的关键字是否出现在对象的名称中。一般来说，如果您没有特定的搜索要求，我们建议您选择它。
- `bleve`:一个开源全文搜索引擎。它将分割对象名称中的单词，并搜索您输入的关键字。但它的搜索结果可能很奇怪，你不能得到你想要的结果，而且它会占用更多的资源。

下表可以快速帮助您理解这两个搜索索引之间的区别:

|                | database | bleve    |
| -------------- | -------- | -------- |
| 搜索结果       | 精确匹配 | 模糊匹配 |
| 搜索速度       | 快       | 快       |
| 指定文件夹搜索 | 支持     | 不支持   |
| 硬盘占用       | 低       | 高       |
| 自动增量更新   | 支持     | 不支持   |

### 搜索提示

- 如果你想搜索一个特定的文件夹，你必须选择`database`作为搜索索引;
- 如果你选择`database`作为搜索索引，你的数据库类型是`sqlite3`，我们建议你在创建索引时不要在管理页面做任何更改，因为 `sqlite3` 不支持并发写，可能导致`数据库锁定`问题;
- 如果你选择`bleve`作为搜索索引，如果你想搜索新文件或不想搜索已删除的文件，索引需要完全重建才能生效，因为`bleve`不支持增量更新;
- 但对于`database`，它支持增量更新，所以你可以搜索新的文件或删除的文件，只需访问修改的文件夹(并单击'刷新'图标，如果缓存)，无需重建索引，这比`bleve`方便得多。
