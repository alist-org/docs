<template>
  <Sidebar>
    <template #top>
      <div class="ss">
        <div class="mingdao">
          <a href="https://www.mingdao.com?s=utm_51=utm_source=liteflow&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
            target="_blank"><img src="/img/ads/mingdao.png" alt="" /></a>
          <span>{{ spStr }}</span>
        </div>
      </div>
    </template>
  </Sidebar>
</template>
<script setup lang="ts">
import Sidebar from "vuepress-theme-hope/modules/sidebar/components/Sidebar";
import { usePageData } from '@vuepress/client'
import { computed } from "vue";

const pageData = usePageData()
const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "赞助商";
  }
  return "Sponsorship";
})

</script>

<style scoped lang="scss">
.mingdao {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  a {
    max-width: 70%;

    img {
      width: 100%;
    }
  }

  span {
    width: 70%;
    text-align: right;
    font-size: small;
  }
}</style>