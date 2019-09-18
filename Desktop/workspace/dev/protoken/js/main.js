// loading event
function hideDiv() {
  document.getElementById("loading").style.display = "none";
}
self.setTimeout("hideDiv()", 1000);
// w-header event
let wHeader = document.querySelector('.w-header');

window.addEventListener('scroll', function () {
  if ($(window).scrollTop() >= 30) {
    if (!wHeader.classList.contains('active')) {
      wHeader.classList.add('active');
    }
  }
  else wHeader.classList.remove('active');
});
// w-header nav color event
$(document).scroll(function(){
  var sec1 = $('#section2').offset().top;
  var sec2 = $('#section6').offset().top-80;
  var sec3 = $('#section9').offset().top-80;
  var sec4 = $('#section12').offset().top-80;
  var sec5 = $('#section14').offset().top-80;
  if($(this).scrollTop() < sec1){
      $('header nav .event-color li a').removeClass('active');
      $('header nav .event-color li:nth-child(1) a').addClass('active');
  } else if ($(this).scrollTop() < sec2){
      $('header nav .event-color li a').removeClass('active');
      $('header nav .event-color li:nth-child(2) a').addClass('active');
  } else if ($(this).scrollTop() < sec3){
      $('header nav .event-color li a').removeClass('active');
      $('header nav .event-color li:nth-child(3) a').addClass('active');
  } else if ($(this).scrollTop() < sec4){
      $('header nav .event-color li a').removeClass('active');
      $('header nav .event-color li:nth-child(4) a').addClass('active');
  } else if ($(this).scrollTop() < sec5){
    $('header nav .event-color li a').removeClass('active');
    $('header nav .event-color li:nth-child(5) a').addClass('active');
  } 
}).scroll();
// m-header event
let mHeader = document.querySelector('.m-header');

window.addEventListener('scroll', function () {
  if ($(window).scrollTop() >= 30) {
    if (!mHeader.classList.contains('active')) {
      mHeader.classList.add('active');
    }
  }
  else mHeader.classList.remove('active');
});
// menu event
let menu = document.querySelector('.menu');
let mNav = document.querySelector('.m-nav');
let mClose = document.querySelector('.m-close');
let back = document.querySelector('.m-back');
let menuList = document.querySelectorAll('.m-header nav .nav-list li a');

for (let q = 0; q < menuList.length; q++) {
  let menuArray = menuList[q]
  menuArray.addEventListener('click', function () {
    menuArray.classList.remove("active");
    mClose.classList.remove("active");
    back.classList.remove("active");
    mNav.classList.remove("active");
  });
}
function remove() {
  mNav.classList.remove("active");
  menu.classList.remove("active");
  mClose.classList.remove("active");
  back.classList.remove("active");
}
menu.addEventListener("click", function () {
  menu.classList.add("active");
  mNav.classList.add("active");
  back.classList.add("active");
});
mClose.addEventListener("click", remove);
back.addEventListener("click", remove);

//lang event
// let onLang = document.querySelector('.on-select');
// let langOpenBtn = document.querySelector('.select-wrap .icon img')
// let langCloseBtn = document.querySelector('.on-select .icon')

// langOpenBtn.addEventListener('click', function () {
//   if (!langOpenBtn.classList.contains('active')) {
//     onLang.classList.add('active');
//   }
//   else langOpenBtn.classList.remove('active');
// });

// langCloseBtn.addEventListener('click', function () {
//   langCloseBtn.classList.remove('active');
//   langOpenBtn.classList.remove('active');
//   onLang.classList.remove('active');
// });

// scrolling event
let speed = 700;

function scrolling(obj) {
  if (!obj) {
    $('html, body').animate({ scrollTop: 0 }, speed);
  } else {
    var posTop = $(obj).offset().top - 80;
    $('html, body').animate({ scrollTop: posTop }, speed)
  }
};

$("ul li a").click(function () {
  var direction = $(this).attr("href");
  scrolling(direction);
  return false;
});

// motion event
var windowH = $(window).height();
var marginT = windowH / 2;

let mainTitle = document.querySelector('.section1 .main-text h1');
let mainLi = document.querySelectorAll('.section1 .sns-wrap li');
let mainSection = document.querySelector('.section1');
let mainSectionTop = mainSection.offsetTop;
$(window).ready(function () {
  if ($(this).scrollTop() >= mainSectionTop - marginT) {
    if (!mainTitle.classList.contains('active')) {
      mainTitle.classList.add('active');
    }
  }
  else {
    mainTitle.classList.remove('active');
  }
  for (let k = 0; k < mainLi.length; k++) {
    let mainLiArray = mainLi[k];
    if ($(this).scrollTop() >= mainSectionTop - marginT) {
      if (!mainLiArray.classList.contains('active')) {
        mainLiArray.classList.add('active');
      }
    }
    else mainLiArray.classList.remove('active');
  }
});
let abuotVideoMotion = document.querySelector('.section2 .video-wrap');
let abuotSection = document.querySelector('#section2');
let aboutText = document.querySelector('.section2 .text-wrap .text');
let abuotSectionTop = abuotSection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() >= abuotSectionTop - marginT) {
    if (!abuotVideoMotion.classList.contains('active')) {
      abuotVideoMotion.classList.add('active');
      aboutText.classList.add('active')
    }
  }
  else {
    abuotVideoMotion.classList.remove('active');
    aboutText.classList.remove('active');
  }
});
let valuesVideoMotion = document.querySelectorAll('.section3 li');
let valuesSection = document.querySelector('.section3');
let valuesSectionTop = valuesSection.offsetTop;
$(window).scroll(function () {
  for (let i = 0; i < valuesVideoMotion.length; i++) {
    let valuesVideoMotionArray = valuesVideoMotion[i];
    if ($(this).scrollTop() >= valuesSectionTop - marginT) {
      if (!valuesVideoMotionArray.classList.contains('active')) {
        valuesVideoMotionArray.classList.add('active');
      }
    }
    else valuesVideoMotionArray.classList.remove('active');
  }
});
let tokenUtilityMotion = document.querySelector('.section4 .img');
let tokenUtilitySection = document.querySelector('.section4');
let tokenUtilitySectionTop = tokenUtilitySection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() >= tokenUtilitySectionTop - marginT) {
    if (!tokenUtilityMotion.classList.contains('active')) {
      tokenUtilityMotion.classList.add('active');
    }
  }
  else {
    tokenUtilityMotion.classList.remove('active');
  }
});
let tokenMetricsMotion = document.querySelector('.section6 .token');
let tokenMetricsSection = document.querySelector('.section6');
let tokenMetricsText = document.querySelector('.section6 .text-wrap');
let tokenMetricsSectionTop = tokenMetricsSection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() >= tokenMetricsSectionTop - marginT) {
    if (!tokenMetricsMotion.classList.contains('active')) {
      tokenMetricsMotion.classList.add('active');
      tokenMetricsText.classList.add('active');
    }
  }
  else {
    tokenMetricsMotion.classList.remove('active');
    tokenMetricsText.classList.remove('active');
  }
});
let tokenMetricsValueMotion = document.querySelector('.section7 .img');
let tokenMetricsValueSection = document.querySelector('.section7');
let tokenMetricsValueSectionTop = tokenMetricsValueSection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() >= tokenMetricsValueSectionTop - marginT) {
    if (!tokenMetricsValueMotion.classList.contains('active')) {
      tokenMetricsValueMotion.classList.add('active');
    }
  }
  else {
    tokenMetricsValueMotion.classList.remove('active');
  }
});
let tokenMetricsValue02Motion = document.querySelector('.section8 .img');
let tokenMetricsValue02Section = document.querySelector('.section8');
let tokenMetricsValue02SectionTop = tokenMetricsValue02Section.offsetTop;
let tokenMetricsValue02Mtext = document.querySelector('.section8 .m-text');
let tokenMetricsValue02Wtext = document.querySelector('.section8 .w-text');
$(window).scroll(function () {
  if ($(this).scrollTop() >= tokenMetricsValue02SectionTop - marginT) {
    if (!tokenMetricsValue02Motion.classList.contains('active')) {
      tokenMetricsValue02Motion.classList.add('active');
      tokenMetricsValue02Mtext.classList.add('active');
      tokenMetricsValue02Wtext.classList.add('active');
    }
  }
  else {
    tokenMetricsValue02Motion.classList.remove('active');
    tokenMetricsValue02Mtext.classList.remove('active');
    tokenMetricsValue02Wtext.classList.remove('active');
  }
});
let founderMotion = document.querySelector('.section9 .poto');
let founderSection = document.querySelector('.section9');
let founderSectionTop = founderSection.offsetTop;
let founderLeft = document.querySelector('.section9 .col-1 p');
let founderRight = document.querySelector('.section9 .col-2');
$(window).scroll(function () {
  if ($(this).scrollTop() >= founderSectionTop - marginT) {
    if (!founderMotion.classList.contains('active')) {
      founderMotion.classList.add('active');
      founderLeft.classList.add('active');
      founderRight.classList.add('active');
    }
  }
  else {
    founderMotion.classList.remove('active');
    founderLeft.classList.remove('active');
    founderRight.classList.remove('active');
  }
});
let teamMotion = document.querySelectorAll('.section10 li');
let teamSection = document.querySelector('.section10');
let teamSectionTop = teamSection.offsetTop;
$(window).scroll(function () {
  for (let o = 0; o < teamMotion.length; o++) {
    let teamMotionArray = teamMotion[o];
    if ($(this).scrollTop() >= teamSectionTop - marginT) {
      if (!teamMotionArray.classList.contains('active')) {
        teamMotionArray.classList.add('active');
      }
    }
    else teamMotionArray.classList.remove('active');
  }
});
let whiteTitle = document.querySelector('.section14 h2');
let whiteLi = document.querySelectorAll('.section14 li');
let whiteSection = document.querySelector('.section14');
let whiteSectionTop = whiteSection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() >= whiteSectionTop - marginT) {
    if (!whiteTitle.classList.contains('active')) {
      whiteTitle.classList.add('active');
    }
  }
  else {
    whiteTitle.classList.remove('active');
  }
  for (let d = 0; d < whiteLi.length; d++) {
    let whiteLiArray = whiteLi[d];
    if ($(this).scrollTop() >= whiteSectionTop - marginT) {
      if (!whiteLiArray.classList.contains('active')) {
        whiteLiArray.classList.add('active');
      }
    }
    else whiteLiArray.classList.remove('active');
  }
});
// ADVISOR event
var swiper = new Swiper('.swiper-container1', {
  effect: 'flip',
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// roadmap event
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});