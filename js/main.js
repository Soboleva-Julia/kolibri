

const menuBtn = document.querySelector('.burger__menu');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});

const menuStudentBtn = document.querySelector('.menu__list-link-rel');
const menuStudentMobile = document.querySelector('.sub-menu');
menuStudentBtn.addEventListener('click', () => {
  menuStudentMobile.classList.toggle('menuStudent-open');
});




const sliderOne = document.querySelector('.teachers__swiper');
let swiperOne = new Swiper(sliderOne, {
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderTwo = document.querySelector('.prepworks__swiper');
let swiperTwo = new Swiper(sliderTwo, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderThree = document.querySelector('.contacts__swiper');
let swiperThree = new Swiper(sliderThree, {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderFour = document.querySelector('.library__swiper-1');
let swiperFour = new Swiper(sliderFour, {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderFive = document.querySelector('.library__swiper-2');
let swiperFive = new Swiper(sliderFive, {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderSix = document.querySelector('.library__swiper-3');
let swiperSix = new Swiper(sliderSix, {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein11 = document.querySelector('.pcs-slider1-1');
let swiperPlein11 = new Swiper(sliderPlein11, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein12 = document.querySelector('.pcs-slider1-2');
let swiperPlein12 = new Swiper(sliderPlein12, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein21 = document.querySelector('.pcs-slider2-1');
let swiperPlein21 = new Swiper(sliderPlein21, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein22 = document.querySelector('.pcs-slider2-2');
let swiperPlein22 = new Swiper(sliderPlein22, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein31 = document.querySelector('.pcs-slider3-1');
let swiperPlein31 = new Swiper(sliderPlein31, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein32 = document.querySelector('.pcs-slider3-2');
let swiperPlein32 = new Swiper(sliderPlein32, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein41 = document.querySelector('.pcs-slider4-1');
let swiperPlein41 = new Swiper(sliderPlein41, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein42 = document.querySelector('.pcs-slider4-2');
let swiperPlein42 = new Swiper(sliderPlein42, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein51 = document.querySelector('.pcs-slider5-1');
let swiperPlein51 = new Swiper(sliderPlein51, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein52 = document.querySelector('.pcs-slider5-2');
let swiperPlein52 = new Swiper(sliderPlein52, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein61 = document.querySelector('.pcs-slider6-1');
let swiperPlein61 = new Swiper(sliderPlein61, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein62 = document.querySelector('.pcs-slider6-2');
let swiperPlein62 = new Swiper(sliderPlein62, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein71 = document.querySelector('.pcs-slider7-1');
let swiperPlein71 = new Swiper(sliderPlein71, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein72 = document.querySelector('.pcs-slider7-2');
let swiperPlein72 = new Swiper(sliderPlein72, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein81 = document.querySelector('.pcs-slider8-1');
let swiperPlein81 = new Swiper(sliderPlein81, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderPlein82 = document.querySelector('.pcs-slider8-2');
let swiperPlein82 = new Swiper(sliderPlein82, {
  slidesPerView: 1,
  spaceBetween: 40,

  pagination: {
    el: '.swiper-pagination',
  },
})

const sliderArtist1 = document.querySelector('.artist__swiper-1');
let swiperArtist1 = new Swiper(sliderArtist1, {
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})

