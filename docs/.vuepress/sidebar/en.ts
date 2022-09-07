import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/guide/": "structure",
  "/config/": "structure",
  "/faq/": "structure",
  "/": [
    "",
    {
      text: "Guide",
      icon: "creative",
      prefix: "guide/",
      children: ["install/", "drivers/", "advanced/"],
    },
    {
      text: "Config",
      icon: "config",
      prefix: "config/",
      children: [
        "config",
      ],
    },
    {
      text: "FAQ",
      icon: "question",
      prefix: "faq/",
      children: ["howto", "why"],
    },
  ],
});
