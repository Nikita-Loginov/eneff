import { handleAllSliders, slidersConfig } from "./modules/swiper.js";
import { SWIPERS } from "./swiper/data.js";

const swipers = [
  {
    ...SWIPERS.GOODS
  }
];

const initSwipersGood = () => {
  const swiperThumbs = new Swiper(SWIPERS.GOOD_IMG_SMALL.selector, {
    ...SWIPERS.GOOD_IMG_SMALL.options,
  });

  const swiperMain = new Swiper(SWIPERS.GOOD_IMG_BIG.selector, {
    ...SWIPERS.GOOD_IMG_BIG.options,
    thumbs: {
      swiper: swiperThumbs,
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  swipers.forEach((config) => {
    slidersConfig.push(config);
  });

  handleAllSliders();
  initSwipersGood();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleAllSliders, 100);
});
