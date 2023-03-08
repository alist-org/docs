import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://alist.nn.ci",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  author: {
    name: "Andy Hsu",
    url: "https://i.nn.ci",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "alist-org/docs",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>
      `,

      displayFooter: true,
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: `<a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>
      <script src="/adb.js" type="text/javascript"></script>`,

      displayFooter: true,
    },
  },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //     "/zh/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    autoCatalog: {
      frontmatter: () => ({
        toc: false,
      }),
    },
    // blog: {
    //   autoExcerpt: true,
    // },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "alist-org/docs",
      repoId: "R_kgDOHmaM-A",
      category: "Announcements",
      categoryId: "DIC_kwDOHmaM-M4CRRXl",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      // enableAll: true,
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      container: true,
      linkCheck: "dev",
      tabs: true,
      tasklist: true,
      gfm: true,
      flowchart: true,
      mark: true,
	  mermaid: true,
    },
    components: {
      components: ["ArtPlayer"],
    },
  },
});
