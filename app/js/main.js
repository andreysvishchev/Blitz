$(function () {

  var mixer = mixitup('.products__items');

  $('.slider__small').slick({
    asNavFor: '.slider__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    draggable: false,
    arrows: false
  });

  $('.slider__big').slick({
    asNavFor: '.slider__small',
    draggable: false,
    arrows: false
  });

  $('.header-top__menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('header-top__menu-btn--active');
    $('.header-top__nav').toggleClass('header-top__nav--active');
  });

  $('.header-top__menu-link').on('click', function () {
    $('.header-top__menu-btn').toggleClass('header-top__menu-btn--active');
  });

  $('.header-top__menu-link').on('click', function () {
    $('.header-top__nav').toggleClass('header-top__nav--active');
  });

  AOS.init({
    duration: 1500
  });

});