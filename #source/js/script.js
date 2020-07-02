//===Fullscreen function===================================================================================================================
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}
ibg();
//===/Fullscreen function==================================================================================================================

//===Menu burger, icon-menu================================================================================================================
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger,.header__menu_hide').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
//===/Menu burger, icon-menu================================================================================================================

//===Menu lang-changer================================================================================================================
$(document).ready(function () {
  $('.lang-changer,.lang-changer__item').click(function (event) {
    $('.lang-changer,.lang-changer__menu').toggleClass('open');
  });
});
//===/Menu lang-changer================================================================================================================

//===Info================================================================================================================
$(document).ready(function () {
  $('.info').click(function (event) {
    $('.info,.info__text').toggleClass('open');
  });
});
//===/Info================================================================================================================

//===Share================================================================================================================
$(document).ready(function () {
  $('.share__icon,.share__link').click(function (event) {
    $('.share__icon,.share__list').toggleClass('open');
  });
});
//===/Share================================================================================================================

// ===Slider config=========================================================================================================================
$(document).ready(function () {
  $('.slider').slick({
    speed: 1000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 3,
    // variableWidth:true,
    vertical: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          appendDots: $('.main-screen__dots')
        }
      }
    ],
    appendDots: $('.top-content__number')
  });
  $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(".top-content__number span").text(currentSlide);
  });
});

// ===/Slider config=========================================================================================================================

//===Share================================================================================================================
// document.documentElement.addEventListener("click", function (e) {
//   if (e.target.closest('.share')) {
//     let share__icon = document.querySelector('share__list, share__icon');
//     share__icon.classList.remove('open');
//   }
// });
//===/Share================================================================================================================

//===Close by click body================================================================================================================
// document.addEventListener("click", function (e) {
//   if (!e.target.closest('.lang-changer__menu')) {
//     let langChanger = document.querySelector('.lang-changer__menu');
//     langChanger.classList.remove('open');
//   };
// });
jQuery(function ($) {
  $(document).mouseup(function (e) { // событие клика по веб-документу
    var smallMenu = $(".lang-changer,.lang-changer__menu,.info,.info__text,.share__icon,.share__list"); // тут указываем ID элемента
    if (!smallMenu.is(e.target) // если клик был не по нашему блоку
      && smallMenu.has(e.target).length === 0) { // и не по его дочерним элементам
      smallMenu.removeClass('open'); // скрываем его
    };
    var mainMenu = $(".burger,.menu"); // тут указываем ID элемента
    if (!mainMenu.is(e.target) // если клик был не по нашему блоку
      && mainMenu.has(e.target).length === 0) { // и не по его дочерним элементам
      mainMenu.removeClass('active'); // скрываем его
    };
  });
});
//===/Close by click body================================================================================================================

//===Bg for header after scroll================================================================================================================
$(window).scroll(function () {
  var w = $(window).width();
  if ($(window).scrollTop() > 500) {
    $('.header__bg').addClass('show');
  } else {
    $('.header__bg').removeClass('show');
  }
});
//===Bg for header after scroll================================================================================================================

//===Fullscreen video play btn================================================================================================================
// === video tag ===
$('#vb__play').click(function () {
  $('.video-block__image').html('<video src="video/01.mp4" id="vb" autoplay="autoplay" muted="1" class="video-block__video"></video>');
});
// === /video tag ===
//===/Fullscreen video play btn================================================================================================================
