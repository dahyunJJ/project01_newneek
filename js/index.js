var swiper = new Swiper(".sec3_slide", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});

var swiper = new Swiper(".sec8_slide", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

// 모달 영역
const $open_M = document.querySelector(".open_M");
const $modal = document.querySelector(".modal");
const $close = document.querySelector(".close");
const $top_nav = document.querySelector(".top_nav");
const $modal_gnb = document.querySelector(".modal_gnb");

$open_M.addEventListener("click", function () {
  $modal.classList.toggle("on");
});
$close.addEventListener("click", function () {
  $modal.classList.remove("on");
});
