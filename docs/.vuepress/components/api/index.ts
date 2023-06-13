export const apis = {
  raw_jp: "https://api.nn.ci",
  cf: "https://api-cf.nn.ci",
  cn: "https://api.xhofe.top",
};
export const defaultApi = "cf";
export const api = () => {
  return localStorage.getItem("api") || apis[defaultApi];
};
