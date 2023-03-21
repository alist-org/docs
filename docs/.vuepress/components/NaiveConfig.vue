<script lang="ts" setup>
import { darkTheme, lightTheme, NConfigProvider, GlobalThemeOverrides, NMessageProvider } from 'naive-ui'
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
    borderRadius: "8px",
    borderRadiusSmall: "6px"
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides" :theme="theme">
    <NMessageProvider>
      <div style="height: 8px;"></div>
      <slot />
    </NMessageProvider>
  </NConfigProvider>
</template>