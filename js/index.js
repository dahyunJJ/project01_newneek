var swiper = new Swiper(".sec3_slide", {
  slidesPerView: 2,
  spaceBetween: 10,

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
const $M_menu = document.querySelector(".M_menu");

const GNB = `<nav class="M_gnb">
<a href="#"><span data-hover="뉴스레터">뉴스레터</span></a>
<a href="#"><span data-hover="피자스테이션">피자스테이션</span></a>
<a href="#"><span data-hover="뉴닉퀴즈">뉴닉퀴즈</span></a>
<a href="#"><span data-hover="뉴문뉴답">뉴문뉴답</span></a>
<a href="#"><span data-hover="캠페인">캠페인</span></a>
<a href="#"><span data-hover="뉴닉탄생기">뉴닉탄생기</span></a>
</nav>`;

$M_menu.innerHTML = GNB;

$open_M.addEventListener("click", function () {
  $M_menu.classList.toggle("on");
});
$close.addEventListener("click", function () {
  $M_menu.classList.remove("on");
});
