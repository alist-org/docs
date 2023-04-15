import * as types from "./types";
import _all from "../ecosystem.json";
import fs from "fs";

const all = _all as types.All;

const official = all["official"];
const community = all["community"];

const github = async (args: types.Github) => {
  const { repo } = args;
  const resp: types.GithubRepo = await (
    await fetch(`https://api.github.com/repos/${repo}`)
  ).json();

  const topics = resp.topics
    ?.map((topic) => `<Badge text="${topic}" type="tip" /> `)
    .join(" ");

  return `### [${resp.name}](https://github.com/${repo}) *(${resp.updated_at})*
${topics}
![stars](https://badgen.net/github/stars/${repo}?color=f87171) ![latest](https://badgen.net/github/release/${repo}?color=70c6be)

${resp.description}`;
};

const fns = {
  github,
};

const main = async () => {
  const path = "docs/guide/ecosystem.md";
  // write official
  let content = "## Official\n";
  const officialContent = await Promise.all(
    official.map((item) => fns[item.type](item))
  );
  content += officialContent.join("\n");
  fs.appendFileSync(path, content);
  // write community
  content = `
## Community
::: warning
Community repo may be outdated and crash, and no warranty of availability and security is made here.
:::
`;
  const communityContent = await Promise.all(
    community.map((item) => fns[item.type](item))
  );
  content += communityContent.join("\n");
  // copy to zh
  fs.copyFileSync(path, "docs/zh/guide/ecosystem.md");
};

main();
