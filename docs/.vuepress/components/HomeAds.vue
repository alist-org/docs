<script setup lang="ts">
import { usePageData } from "@vuepress/client"
import { computed } from "vue"

const pageData = usePageData()

const isZh = computed(() => {
  return pageData.value.path.startsWith("/zh/")
})

const vidHubEn = {
  title: "VidHub - An elegant cloud video player within the Apple ecosystem.",
  hero: [
    "Support for iPhone, iPad, Mac, and Apple TV.",
    "Supports various cloud storage providers such as Aliyun, Baidu Cloud, OneDrive, Google Drive, Dropbox, Alist, mounted with different cloud drives like Quark Cloud, pikpak, 115, and more.",
  ],
  url: "https://apps.apple.com/app/apple-store/id1659622164?pt=118612019&ct=alist&mt=8",
  tag: "Free",
}

const vidHubCN = {
  title: "VidHub - 苹果生态下优雅的网盘视频播放器",
  hero: [
    "iPhone，iPad，Mac，Apple TV全平台支持,",
    "直接挂载阿里云盘、百度网盘、OneDrive、GoogleDrive、Dropbox、Alist挂载各种夸克云盘，pikpak, 115等等。",
  ],
  url: "https://zh.okaapps.com/product/1659622164?ref=alist",
  tag: "免费",
}

const vidHub = computed(() => {
  if (isZh.value) return vidHubCN
  return vidHubEn
})

const isApple = computed(() => {
  if (navigator.platform) return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
})
</script>

<template>
  <div class="ads-container">
    <div class="wwads-container">
      <div
        class="wwads wwads-cn wwads-horizontal"
        data-id="213"
        style="width: 100% !important"
        v-if="!isApple"
      ></div>
      <a v-else class="vidhub" :href="vidHub.url" target="_blank">
        <div>
          <img src="/img/ss/vidhub-logo.png" alt="" />
          <div>
            <div class="title">
              <span>{{ vidHub.title }}</span>
              <span class="tag">{{ vidHub.tag }}</span>
            </div>
            <div class="hero" v-for="hero in vidHub.hero" :key="hero">
              {{ hero }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vidhub {
  width: 100%;
  height: 150px;
  @media screen and (max-width: 700px) {
    height: 160px;
  }
  background-image: url(/img/ss/vidhub-bg.png);
  background-size: cover;
  background-position: right;
  border-radius: 14px;
  display: block;
  padding-right: 4px;
  div {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;

    img {
      height: 60%;
      width: auto;
      @media screen and (max-width: 700px) {
        height: 40%;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      .title {
        color: white;
        font-weight: bold;
        font-size: 24px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        @media screen and (max-width: 700px) {
          font-size: medium;
          word-break: break-all;
        }
        .tag {
          background-color: green;
          display: inline;
          border-radius: 40px;
          padding: 6px;
          padding-left: 14px;
          padding-right: 14px;
          margin-left: 4px;
          white-space: nowrap;
        }
        padding-bottom: 5px;
      }
      .hero {
        height: auto;
        color: rgb(194, 193, 193);
        @media screen and (max-width: 700px) {
          font-size: small;
        }
      }
    }
  }
}
.ss {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: large;
    font-weight: bold;
    margin-bottom: 14px;
  }

  .mingdao {
    display: flex;
    justify-content: center;

    a {
      max-width: min(500px, 100%);

      img {
        width: 100%;
      }
    }
  }
}

.ads-container {
  display: flex;
  justify-content: center;
}

.wwads-container {
  padding-top: 10px !important;
  padding-bottom: 0 !important;
  :deep(img) {
    display: unset;
    max-width: unset;
    max-height: unset;
    margin: unset;
  }
  max-width: var(--home-page-width);
}
</style>
