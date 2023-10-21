$(".hero_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  customPaging: function (slider, i) {
    return '<a class="custom-dots" href="#"><img src="./assets/dot.svg"/><img src="./assets/dot-active.svg"/></a>';
  },
  arrows: false,
});

$(".news_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  customPaging: function (slider, i) {
    return '<a class="custom-dots" href="#"><img src="./assets/dot.svg"/><img src="./assets/dot-active.svg"/></a>';
  },
  prevArrow:
    '<div class="arrows a-left partner-arrow control-c prev slick-prev"><svg class="left"><use xlink:href="./assets/sprite.svg#left"/></svg></div>',
  nextArrow:
    '<div class="arrows a-right partner-arrow control-c next slick-next"><svg class="right"><use xlink:href="./assets/sprite.svg#right"/></svg></div>',
    responsive: [
      {
        breakpoint: 980, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1
        },
        breakpoint: 700, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]
});

lightGallery(document.getElementById("lightgallery"));



const markerIcon = L.icon({
  iconUrl: './assets/marker.svg',
  iconSize:     [106, 106], 
});

const map = L.map("map").setView([50.57632129759722, 26.248522046659183], 12);
map.scrollWheelZoom.disable(); 

L.tileLayer("https://tile.openstreetmap.de/${z}/${x}/${y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
}).addTo(map);

L.marker([50.60857776230688, 26.250254239864706], {icon: markerIcon})
  .addTo(map)
  .openPopup();

map.on('click', function(e) {
    map.scrollWheelZoom.enable(); 
  });


  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav_list");
  const navLink = document.querySelectorAll(".nav_link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
