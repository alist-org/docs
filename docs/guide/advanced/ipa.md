---
# This is the icon of the page
icon: mini-app
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

# IPA install

You can directly upload the ipa file. 

But for ios>=16, you need to name the ipa file: `original file name@bundle-identifier.ipa`, that is, you need to add `@bundle-identifier` on the original basis, in which `bundle-identifier` is the `CFBundleIdentifier` of Info.plist in the IPA package. Such as:

- aszs@rn.notes.best.ipa

Recommended to use [ipa-renamer](https://github.com/Xhofe/ipa-renamer) to rename your ipa files automatically and quickly.