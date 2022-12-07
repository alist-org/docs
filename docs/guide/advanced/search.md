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

# Search

### how to use

Follow the steps below to enable search:

1. Go to the `indexes` page to select a search index and click `Save`.
2. After the index is saved, click `Build indexes` to build the index.
3. Now you can search for files by click the search block on the top right corner of the page or by using the shortcut `Ctrl + K`.

### Difference between different search indexes

- `database`: Search by database, which is using the existing data.db. It will create a new table, record the parent directory, name, and size of every object, but the search does not split words which means that match whether the keywords you enter appear in the name of object. In general, if you don't have a specific search requirement, we recommend you choose it.
- `bleve`: An open source full-text search engine. It will split the words in the name of object and search for the keywords you enter. But its search results may be so strange that you can't get the results you want, and it will take up more resources.

The following table could help you understand the difference between the two search indexes quickly:

|                         | database    | bleve       |
| ----------------------- | ----------- | ----------- |
| Search results          | Exact match | Fuzzy match |
| Search speed            | Fast        | Fast        |
| Specify folder search   | Yes         | No          |
| Disk usage              | Low         | High        |
| Auto incremental update | Yes         | No          |

### Search tips

- If you want to search for a specific folder, you must choose `database` as the search index;
- If you choose `database` as the search index and the type of your database is `sqlite3`, we suggest that you don't make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause `database-lock` issues;
- If you choose `bleve` as the search index, and if you want to search for new files or if you don't want to search for deleted files, the index needs to be completely rebuilt to take effect because `bleve` does not support incremental updates;
- But for `database`, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click `refresh` icon if cached) without rebuilding the index, which is much more convenient than `bleve`.
