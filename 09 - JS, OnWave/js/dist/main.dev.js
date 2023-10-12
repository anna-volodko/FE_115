"use strict";

$('.hero').slick({
  dots: true,
  customPaging: function customPaging(slider, i) {
    return '<a class="custom-dots" href="#"><img src="./assets/dot.svg"/><img src="./assets/dot-active.svg"/></a>';
  },
  infinite: true,
  autoplay: true,
  appendDots: $('.dots_container'),
  fade: true,
  cssEase: 'linear',
  arrows: false
});
$('.slick_partners').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<img class='a-left partner-arrow control-c prev slick-prev' src='./assets/prev.svg'>",
  nextArrow: "<img class='a-right partner-arrow control-c next slick-next' src='./assets/next.svg'>"
});
$('.arrivals_list').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='./assets/prev.svg'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='./assets/next.svg'>"
});