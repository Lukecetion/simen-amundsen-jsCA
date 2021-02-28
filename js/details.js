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
        <div class="card">
            <div class="cardItems">
                <div class="cardContent">
                    <h1>${jsonResults.title}</h1>
                    <p class="desc">${jsonResults.description}</p>
                    <section><p>Directed by: </p> <p>${jsonResults.director}</p></section>
                    <section><p>Produced by: </p> <p>${jsonResults.producer}</p></section>
                    <section><p>Released in: </p> <p>${jsonResults.release_date}</p></section>
                </div>
            </div>
        </div>
        `
    } catch {} finally {}
}

getFilmsPage(id);