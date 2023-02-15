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

// gotop 버튼
scrollTop("js-button", 300);
function scrollTop(elem, duration) {
  let target = document.getElementById(elem);

  target.addEventListener("click", function () {
    let currentY = window.pageYOffset;
    let step = duration / currentY > 1 ? 10 : 100;
    let timeStep = (duration / currentY) * step;
    let intervalID = setInterval(scrollUp, timeStep);

    function scrollUp() {
      currentY = window.pageYOffset;
      if (currentY === 0) {
        clearInterval(intervalID);
      } else {
        scrollBy(0, -step);
      }
    }
  });
}
