import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  // "/zh/",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  { text: "配置", icon: "config", link: "/zh/config/" },
  { text: "常见问题", icon: "question", link: "/zh/faq/" },
  {
    text: "社区",
    icon: "community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/alist-org/alist/discussions",
      },
      { text: "Telegram", link: "https://t.me/alist_chat" },
      { text: "QQ群", link: "https://jq.qq.com/?_wv=1027&k=YJJj2Gwb" },
    ],
  },
]);
