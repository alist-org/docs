---
# This is the icon of the page
icon: state
# This control sidebar order
order: 11
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

# PikPak / share



## PikPak

### Username

email or phone?

### Password

password

### Root folder id

Can get with https://mypikpak.com/ , default `root`.

![image.png](/img/drivers/pikpak.png)



## PikPak Share(v3.12.0 fix)

::: warning
~~As of **February 4, 2023**, the sharing mount  has been officially banned. Currently, you can only watch the first 4 minutes.Stay tuned for when it will be restored~~

**v3.12.0 fix,How long it can be used this time is unknown**

:::

You only need to fill in **`Username`, `Password`, `Shared ID`** three items, **root folder ID** can be written or not, if not written, the default is the root directory (root directory)

- Root folder ID: If it is a multi-layer directory, which directory do you want to display as the root directory, you can write which root directory.
- Sharing password: if there is a password to share, write it, if not, don’t write it

![pik](/img/drivers/pik/pik1.png)

## Precautions

**Q**: Prompt when adding storage: **Failed init storage: invalid_account_or_password** What should I do, the password I entered is correct

**A**: If the account password is not filled in incorrectly, it may be that you used Google, FB and other third-party quick registration when you registered. Although it seems that the account is a Google mailbox, you cannot log in with the mailbox, but you must use the first Three-party verification, **Alist** does not support this kind of jumping to third-party verification, **so you need to bind an email address in the account settings and set a login password**, or register a new account
