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
    let htmlToInsert = '<ul class="list">';
    list.style.display = 'block';
    for ( i = 0; i < playList.length; i++) {
        htmlToInsert += `<li>${playList[i].song} by ${playList[i].author} </li>`;
    }
    
    htmlToInsert += '</ul> <button onclick="hidePlayList()" type="button">Hide Playlist</button>';
    list.innerHTML = htmlToInsert;
}
function hidePlayList() {
    const list = document.getElementById('playlist');
    list.style.display = 'none';
}
