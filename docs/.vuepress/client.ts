// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import NaiveClient from "./components/NaiveClient.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("NaiveClient", NaiveClient);
  },
});
