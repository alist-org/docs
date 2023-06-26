---
# This is the icon of the page
icon: view
# This control sidebar order
order: 11
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

# Backup&Restore

## **Method 1-Built-in**

Use `AList` to manage `Backup/Restore` options

> Backup: Backup Alist data (==**does not include index**==) 
>
> Recovery: Backup files before recovery 
>
> Override: Select override when recovery, and will override the user information

![](/img/advanced/backup.png)



## **Method 2-Sqlite3**

Back up the data/`data.db` database in the` AList` directory, and wait for the new environment to replace it directly (==**contains index data**==)

 If there are two files, if there are `data.db-shm` and` data.db-clothes`, they must be backup together.

![](/img/advanced/sqlite3.png)



## **Method 3-Other database**

Other, if you use `mysql, postgres` and other non ` sqlite database `, please solve it by yourself (==**include indexing data**==)
