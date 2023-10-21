"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(".hero_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  customPaging: function customPaging(slider, i) {
    return '<a class="custom-dots" href="#"><img src="./assets/dot.svg"/><img src="./assets/dot-active.svg"/></a>';
  },
  arrows: false
});
$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  customPaging: function customPaging(slider, i) {
    return '<a class="custom-dots" href="#"><img src="./assets/dot.svg"/><img src="./assets/dot-active.svg"/></a>';
  },
  prevArrow: '<div class="arrows a-left partner-arrow control-c prev slick-prev"><svg class="left"><use xlink:href="./assets/sprite.svg#left"/></svg></div>',
  nextArrow: '<div class="arrows a-right partner-arrow control-c next slick-next"><svg class="right"><use xlink:href="./assets/sprite.svg#right"/></svg></div>',
  responsive: [(_ref = {
    breakpoint: 980,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, _defineProperty(_ref, "breakpoint", 700), _defineProperty(_ref, "settings", {
    slidesToShow: 1,
    slidesToScroll: 1
  }), _ref)]
});
lightGallery(document.getElementById("lightgallery"));
var markerIcon = L.icon({
  iconUrl: './assets/marker.svg',
  iconSize: [106, 106]
});
var map = L.map("map").setView([50.57632129759722, 26.248522046659183], 12);
map.scrollWheelZoom.disable();
L.tileLayer("https://tile.openstreetmap.de/${z}/${x}/${y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);
L.marker([50.60857776230688, 26.250254239864706], {
  icon: markerIcon
}).addTo(map).openPopup();
map.on('click', function (e) {
  map.scrollWheelZoom.enable();
});
var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav_list");
var navLink = document.querySelectorAll(".nav_link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(function (n) {
  return n.addEventListener("click", closeMenu);
});

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}