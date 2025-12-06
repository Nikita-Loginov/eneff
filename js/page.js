import { getHeightHeader, checkScrollY } from "./modules/header.js";
import { searcBlockTab } from "./modules/tab.js";

const handleGlobalClick = (e) => {
  searcBlockTab(e)
};

document.addEventListener("DOMContentLoaded", () => {
  getHeightHeader();

  document.addEventListener("click", handleGlobalClick);
});

window.addEventListener("resize", getHeightHeader);

document.addEventListener("scroll", checkScrollY);
