import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/guide/": "structure",
  "/zh/config/": "structure",
  "/zh/faq/": "structure",
  "/zh/": [
    "",
    {
      text: "使用指南",
      icon: "creative",
      prefix: "guide/",
      children: ["install/", "drivers/", "advanced/"],
    },
    {
      text: "配置",
      icon: "config",
      prefix: "config/",
      children: [
        "config",
      ],
    },
    {
      text: "常见问题",
      icon: "question",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
