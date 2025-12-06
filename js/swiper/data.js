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
      mousewheel: {
        enabled: true, 
        forceToAxis: true,
        sensitivity: 1, 
        eventsTarget: 'container',
      },
    },
  },
  REVIEWS: {
    selector: ".reviews .swiper--reviews",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".reviews .arrows-swiper__arrow.next",
        prevEl: ".reviews .arrows-swiper__arrow.prev",
      },
      mousewheel: {
        enabled: true, 
        forceToAxis: true,
        sensitivity: 1, 
        eventsTarget: 'container',
      },
    },
  },
  GOOD_IMG_BIG: {
    selector: ".good-section .swiper--img-big",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 8,
      navigation: {
        nextEl: ".good-section .arrows-swiper__arrow.next",
        prevEl: ".good-section .arrows-swiper__arrow.prev",
      },
    },
  },
  GOOD_IMG_SMALL: {
    selector: ".good-section .swiper--img-little",
    breakpoint: 122300000000,
    options: {
      slidesPerView:4,
      spaceBetween: 13,
    },
  },
  GOODS: {
    selector: ".goods .swiper--goods",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".goods .arrows-swiper__arrow.next",
        prevEl: ".goods .arrows-swiper__arrow.prev",
      },
      mousewheel: {
        enabled: true, 
        forceToAxis: true,
        sensitivity: 1, 
        eventsTarget: 'container',
      },
    },
  },
};
