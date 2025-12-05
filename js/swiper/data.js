export const SWIPERS = {
  TOP_MAIN: {
    selector: ".top .swiper--top",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: ".top .arrows-swiper__arrow.next",
        prevEl: ".top .arrows-swiper__arrow.prev",
      },
    },
  },
  NEWS: {
    selector: ".news .swiper--news",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".news .arrows-swiper__arrow.next",
        prevEl: ".news .arrows-swiper__arrow.prev",
      },
    },
  },
};
