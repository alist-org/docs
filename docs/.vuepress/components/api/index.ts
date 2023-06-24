export const apis: Record<string, string> = {
  raw_jp: "https://api.nn.ci",
  cf: "https://api-cf.nn.ci",
  cn: "https://api.xhofe.top",
};

if (typeof location !== "undefined") {
  if (
    location.origin.startsWith("http://localhost") ||
    location.origin.startsWith("http://127.0.0.1")
  ) {
    apis.local = "http://localhost:3002";
  }
}

export const defaultApi = "cf";
export const api = () => {
  if (typeof localStorage === "undefined") {
    return apis[defaultApi];
  }
  return apis[localStorage.getItem("api_name") || defaultApi];
};
