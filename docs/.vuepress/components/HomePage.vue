<template>
  <HopeHomePage>
    <template #center>
      <div class="ss">
        <span>🌈 {{ spStr }}</span>
        <div class="mingdao">
          <a href="https://www.mingdao.com?s=utm_51=utm_source=liteflow&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
            target="_blank"><img src="/img/ads/mingdao-h.png" alt="" /></a>
        </div>
      </div>
      <div class="hero-info-wrapper wwads-container">
        <div class="wwads wwads-cn wwads-horizontal" data-id="213" style="width:100% !important"></div>
      </div>
    </template>
  </HopeHomePage>
</template>
<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage";
import { usePageData } from '@vuepress/client'
import { computed } from "vue";

const pageData = usePageData()

const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "特别赞助";
  }
  return "Sponsorship";
})

</script>

<style scoped lang="scss">
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
    a {
      img {
        max-width: 500px;
      }
    }
  }
}

.wwads-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.wwads-cn,
.wwads {
  background-color: #f4f8fa;
}

.wwads-text {
  color: #0e1011;
}

html[data-theme="dark"] .wwads-cn,
html[data-theme="dark"] .wwads {
  background-color: #272829 !important;
}

html[data-theme="dark"] .wwads-text {
  color: #9e9e9e !important;
}
</style>