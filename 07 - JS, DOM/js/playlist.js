const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
function openPlayList() {
    const list = document.getElementById('playlist');
    let htmlToInsert = '<ul>';
    
    for ( i = 0; i < playList.length; i++) {
        htmlToInsert += `<li>${playList[i].song} by ${playList[i].author} </li>`;
    }
    
    htmlToInsert += '</ul>';
    list.innerHTML = htmlToInsert;
}
function hidePlayList() {
    
}
