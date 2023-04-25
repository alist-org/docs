<template>
  <NormalPage>
    <template #contentBefore>
      <div class="theme-hope-content ads-container">
        <div class="mingdao" v-if="!enableSidebar">
          <a href="https://www.mingdao.com?s=utm_51=utm_source=liteflow&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
            target="_blank">
            <img src="/img/ads/mingdao-h.png" alt="" />
            <span>{{ spStr }}</span>
          </a>
        </div>
        <div class="wwads wwads-cn wwads-horizontal" data-id="213" style="width:100% !important" v-else>
        </div>
      </div>
    </template>
  </NormalPage>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import { usePageData } from '@vuepress/client'

const pageData = usePageData()

// get is enable sidebar from frontmatter
const frontmatter = usePageFrontmatter();
const enableSidebar = computed(() => {
  return frontmatter.value.sidebar === undefined ? true : frontmatter.value.sidebar;
})

const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "赞助商";
  }
  return "Sponsorship";
})
</script>

<style lang="scss" scoped>
.mingdao {
  display: flex;
  gap: 4px;
  justify-content: center;

  a {
    max-width: min(500px, 100%);
    position: relative;

    img {
      width: 100%;
    }

    span {
      font-size: small;
      color: #999;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}

.ads-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>