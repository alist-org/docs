<template>
  <HopeHomePage>
    <template #center>
      <div class="ss" v-if="showMingdao">
        <span>🌈 {{ spStr }}</span>
        <div class="mingdao">
          <a
            href="https://www.mingdao.com?s=utm_51=utm_source=alist&utm_medium=banner&utm_campaign=%E5%93%81%E7%89%8C%E6%8E%A8%E5%B9%BF&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1"
            target="_blank"
            ><img src="/img/ss/mingdao-h.png" alt=""
          /></a>
        </div>
      </div>
      <div class="hero-info-wrapper wwads-container">
        <div
          class="wwads wwads-cn wwads-horizontal"
          data-id="213"
          style="width: 100% !important"
        ></div>
      </div>
    </template>
  </HopeHomePage>
</template>
<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/components/HomePage";
import { usePageData } from "@vuepress/client";
import { computed } from "vue";

const pageData = usePageData();

const spStr = computed(() => {
  if (pageData.value.path.startsWith("/zh/")) {
    return "特别赞助";
  }
  return "Sponsorship";
});

const showMingdao = false;
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

.wwads-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  img {
    display: unset;
    max-width: unset;
    max-height: unset;
    margin: unset;
  }
}
</style>
