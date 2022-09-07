import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  // "/",
  { text: "Guide", icon: "creative", link: "/guide/" },
  { text: "Config", icon: "config", link: "/config/" },
  { text: "FAQ", icon: "question", link: "/faq/" },
  {
    text: "Community",
    icon: "community",
    children: [
      {
        text: "Discussion",
        link: "https://github.com/alist-org/alist/discussions",
      },
      { text: "Telegram", link: "https://t.me/alist_chat" },
      { text: "QQ Group", link: "https://jq.qq.com/?_wv=1027&k=YJJj2Gwb" },
    ],
  },
]);
