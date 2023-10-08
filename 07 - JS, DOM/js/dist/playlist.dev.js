"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function openPlayList() {
  var list = document.getElementById('playlist');
  var htmlToInsert = '<ul class="list">';
  list.style.display = 'block';

  for (i = 0; i < playList.length; i++) {
    htmlToInsert += "<li>".concat(playList[i].song, " by ").concat(playList[i].author, " </li>");
  }

  htmlToInsert += '</ul> <button onclick="hidePlayList()" type="button">Hide Playlist</button>';
  list.innerHTML = htmlToInsert;
}

function hidePlayList() {
  var list = document.getElementById('playlist');
  list.style.display = 'none';
}