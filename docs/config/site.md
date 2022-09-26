---
# This is the icon of the page
icon: tab
# This control sidebar order
order: 3
# A page can have multiple categories
category:
  - Config
# A page can have multiple tags
tag:
  - Config
  - Settings
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Site settings

### Version

The version of the `alist`, readonly.

### Api url

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)

The address of your `alist`, such as `https://pan.nn.ci`.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:
- thumbnail of `LocalStorage`
- Preview after opening web proxy
- The download address after opening the web proxy
- Reverse proxy to sub directory
- ...

### Base path

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)

Default `/`, if you want reverse proxy with sub directory(see [reverse proxy with sub directory](../faq/howto.md#how-to-reverse-proxy-with-sub-directory) for details), such as `https://pan.nn.ci/alist`, you should set this field to `alist`, at the same time you need to set `Api url` to `https://pan.nn.ci/alist`.

### Site title

The title of the `alist`, such as `Alist`.

### Announcement

The announcement of the `alist`, such as `### Hello\nWelcome to use Alist`. We suggest you add a title in front of the content, such as `### Hello`, so that the content will not be covered by `Close Button`.

### Pagination type

- All: All files will be displayed at once.
- Pagination: Show a `Paginator` at the bottom of the page.
- Load more: Show a `Load more` button at the bottom of the page.
- Auto load more: Automatically load more files when scrolling to the bottom of the page.

### Default page size

The default page size of the `alist` if `Pagination type` doesn't set to `All`, such as `20`.
