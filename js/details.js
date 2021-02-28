const qString = document.location.search;
const params = new URLSearchParams(qString);
const id = params.get('id');

async function getFilmsPage(filmId) {
    try {
        console.log(filmId);
        const response = await fetch('https://ghibliapi.herokuapp.com/films/' + filmId);
        const jsonResults = await response.json();

        console.log(jsonResults);

        document.title = jsonResults.title;
        document.querySelector('main').innerHTML = `
        
        <h1>${jsonResults.title}</h1>
        <h2> ${jsonResults.director} </h2>
        <p> ${jsonResults.producer} </p>
        `
    } catch {} finally {}
}

getFilmsPage(id);