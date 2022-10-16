import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [
    [
      "script",
      {},
      `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JopjiIsNYEbnNVF2",ck:"JopjiIsNYEbnNVF2",hashMode:false});`,
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?6c8a68035d2804b5cfeafe6d96df4c75";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
    [
      "script",
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6488351372249466",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  ],

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
