import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";

const swipers = [
  {
    ...SWIPERS.TABS,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  swipers.forEach((config) => {
    slidersConfig.push(config);
  });

  handleAllSliders();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleAllSliders, 100);
});
