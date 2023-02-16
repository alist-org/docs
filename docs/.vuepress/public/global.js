// sync data-theme and class
function syncTheme() {
  const html = document.getElementsByTagName("html")[0];
  const theme = html.getAttribute("data-theme");
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

syncTheme();
const observer = new MutationObserver(syncTheme);
observer.observe(document.getElementsByTagName("html")[0], {
  attributes: true,
  attributeFilter: ["data-theme"],
});
