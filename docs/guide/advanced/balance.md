---
# This is the icon of the page
icon: speed
# This control sidebar order
order: 7
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

# Load balancing

It is required that the file structures in the two storages are exactly the same, and the program will automatically poll all storages for download/request.

### how to use​

One storage can be added normally, and the other storage can be added with the mount path of `the first storage mount path + .balance + any other content`.
E.g:

- Storage 1: test
- Storage 2: test.balance1
- Storage 3: test.balance2
- Storage 4: test.balance3
- ...
- Storage n: test.balancen
