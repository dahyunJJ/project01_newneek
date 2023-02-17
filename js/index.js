var swiper = new Swiper(".sec3_slide", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});

var swiper = new Swiper(".sec8_slide", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

// 모바일 메뉴 영역
const $open_M = document.querySelector(".open_M");
const $close = document.querySelector(".close");
const $top_nav = document.querySelector(".top_nav");
const $M_menu = document.querySelector(".M_menu");
const $M_gnb = document.querySelector(".M_gnb");

$open_M.addEventListener("click", function () {
  $M_menu.classList.toggle("on");
});
$close.addEventListener("click", function () {
  $M_menu.classList.remove("on");
});
