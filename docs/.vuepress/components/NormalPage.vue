<template>
  <NConfigProvider :theme-overrides="themeOverrides" :theme="theme">
    <NormalPage>
      <template #contentBefore>
        <div class="theme-hope-content ads-container">
          <div class="wwads wwads-cn wwads-horizontal" data-id="213" style="width:100% !important"></div>
        </div>
      </template>
    </NormalPage>
  </NConfigProvider>
</template>
<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage";
import { darkTheme, lightTheme, NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import { ref } from "vue";

const theme = ref(lightTheme)

function syncTheme() {
  const html = document.getElementsByTagName("html")[0];
  const dataTheme = html.getAttribute("data-theme");
  if (dataTheme === "dark") {
    theme.value = darkTheme
  } else {
    theme.value = lightTheme
  }
}

syncTheme();

const observer = new MutationObserver(syncTheme);
observer.observe(document.getElementsByTagName("html")[0], {
  attributes: true,
  attributeFilter: ["data-theme"],
});

const themeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: "8px"
  }
}

</script>

<style>
.ads-container {
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