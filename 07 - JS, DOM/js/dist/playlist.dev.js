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
  var htmlToInsert = '<ul>';

  for (i = 0; i < playList.length; i++) {
    htmlToInsert += "<li>".concat(playList[i].song, " by ").concat(playList[i].author, " </li>");
  }

  htmlToInsert += '</ul>';
  list.innerHTML = htmlToInsert;
}

function hidePlayList() {}