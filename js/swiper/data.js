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
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".news .arrows-swiper__arrow.next",
        prevEl: ".news .arrows-swiper__arrow.prev",
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      },
      breakpoints: {
        1280: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        540: {
          slidesPerView: 1.3,
        },
        360: {
          slidesPerView: 1.2,
        },
      },
    },
  },
  REVIEWS: {
    selector: ".reviews .swiper--reviews",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".reviews .arrows-swiper__arrow.next",
        prevEl: ".reviews .arrows-swiper__arrow.prev",
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      },
      breakpoints: {
        1280: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        540: {
          slidesPerView: 1.3,
        },
        360: {
          slidesPerView: 1.2,
        },
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
      slidesPerView: 4,
      spaceBetween: 8,
      breakpoints: {
        1180: {
          slidesPerView: 4,
        },
        600: {
          slidesPerView: 5,
          spaceBetween: 13,
        },
      },
    },
  },
  GOODS: {
    selector: ".goods .swiper--goods",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".goods .arrows-swiper__arrow.next",
        prevEl: ".goods .arrows-swiper__arrow.prev",
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      },
      breakpoints: {
        1280: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        360: {
          slidesPerView: 1,
        },
      },
    },
  },
  IMG_SWIPER_DETAIL: {
    selector: ".news-detail .swiper--detail",
    breakpoint: 122300000000,
    options: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".news-detail .arrows-swiper__arrow.next",
        prevEl: ".news-detail .arrows-swiper__arrow.prev",
      },
      pagination: {
        el: ".news-detail .swiper-pagination",
        type: "fraction",
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      },
    },
  },
  TABS: {
    selector: ".swiper--tabs",
    breakpoint: 1023,
    options: {
      slidesPerView: "auto",
      spaceBetween: 12,
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        sensitivity: 1,
        eventsTarget: "container",
      },
    },
  },
};
