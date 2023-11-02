const API_KEY = 'd16a5367';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
let PAGE = 1;
let finalPage = 1;

function searchMovies() {
    const movieName = document.getElementById('searchText').value;
    if(movieName) {
    axios.get(BASE_URL+`&s=${movieName}&page=${PAGE}`)
    .then(function (res) {
        console.log(res.data);
        finalPage = Math.ceil(res.data.totalResults / 10);
        
        generateCards(res.data.Search);
    })
}
}

function generateCards(resultsData) {
    let html = `<ul class="grid-list">`

    resultsData.forEach(el => {
        html = html + `<li class="card-item">
                <img src="${el.Poster}" alt class="poster"/>
                <span class="title">${el.Title}</span>
                <span class="year">${el.Year}</span>
                </li>`
    })
    html = html + `</ul>`
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