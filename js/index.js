import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";
import { initVideos } from "./modules/videos.js";

const swipers = [
  {
    ...SWIPERS.TOP_MAIN,
  },
  {
    ...SWIPERS.NEWS,
  },
  {
    ...SWIPERS.REVIEWS,
  },
];

const handleGlobalClick = (e) => {
  initVideos(e);
};

document.addEventListener("DOMContentLoaded", () => {
  swipers.forEach((config) => {
    slidersConfig.push(config);
  });

  handleAllSliders();
});

document.addEventListener("click", handleGlobalClick);

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleAllSliders, 100);
});
