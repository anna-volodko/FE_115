"use strict";

var API_KEY = 'd16a5367';
var BASE_URL = "http://www.omdbapi.com/?apikey=".concat(API_KEY);
var PAGE = 1;
var finalPage = 1;

function searchMovies() {
  var movieName = document.getElementById('searchText').value;

  if (movieName) {
    axios.get(BASE_URL + "&s=".concat(movieName, "&page=").concat(PAGE)).then(function (res) {
      console.log(res.data);
      finalPage = Math.ceil(res.data.totalResults / 10);
      generateCards(res.data.Search);
    });
  }
}

function generateCards(resultsData) {
  var html = "<ul class=\"grid-list\">";
  resultsData.forEach(function (el) {
    html = html + "<li class=\"card-item\">\n                <img src=\"".concat(el.Poster, "\" alt class=\"poster\"/>\n                <span class=\"title\">").concat(el.Title, "</span>\n                <span class=\"year\">").concat(el.Year, "</span>\n                </li>");
  });
  html = html + "</ul>";
  document.getElementById('movie_list').innerHTML = html;
}

function nextPage(event) {
  event.preventDefault();
  PAGE++;
  gotoPage(PAGE);
}

function gotoPage(page) {
  PAGE = page;
  searchMovies();
}

function goToEnd(event) {
  event.preventDefault();
  PAGE = finalPage;
  gotoPage(PAGE);
}