import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AList Docs",
      description: "Documentation for alist v3",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "AList文档",
      description: "AList v3的文档",
    },
  },

  theme,
  plugins: [
    docsearchPlugin({
      appId: "ECAR405NMH",
      apiKey: "ef408b6afab61e0362a93af95ad18150",
      indexName: "alist",
    }),
  ],
});
