---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "AList"
  text: "🗂️ A file list program that supports multiple storage"
  tagline: Powered by Gin and Solidjs
  image:
    src: /logo.png
    alt: AList
  actions:
    - theme: brand
      text: Get Started
      link: /guide
    - theme: alt
      text: View on GitHub
      link: https://github.com/alist-org/alist

features:
  - title: Easy to Use
    icon: ⚒️
    details: Alist was designed from the ground up to be easily installed and it can be used on all platforms.

  - title: Multiple storage
    icon: 💾
    details: Alist supports multiple storage providers, including local storage, Aliyundrive, Onedrive, Google Drive, etc., and is easily expand.

  - title: WebDAV Support
    icon: 🗃️
    details: Alist supports all storage WebDAV, which is a standard for accessing files on.

  - title: Dark Mode
    icon: 🌗
    details: Switch between light and dark modes freely

  - title: Protected routes
    icon: 🔑
    details: Add password protection and authentication for specific path

  - title: File preview
    icon: 📄
    details: Support video, audio, office, pdf, code, image preview, etc. Even ipa install

  - title: Package download / Batch download
    icon: 📦
    details: Use stream api of brower to support package download without server usage / Batch download support folder using Aria2

  - title: Single sign-on
    icon: 🕹️
    details: Use single sign-on to quickly log in to AList

  - title: Offline download
    icon: 🧲
    details: To download the torrent content offline to the specified directory, a good network environment is required

  - title: Crypt encrypt/decrypt files
    icon: 🔐
    details: Anyone can securely store encrypted data on remote storage providers. Data is stored in a Crypt, and the provider can only see the Crypt, not your data.

  - title: More new features
    icon: 📝
    details: Including text editor, readme/html render, file permalink, cloudflare workers proxy, etc.
---
