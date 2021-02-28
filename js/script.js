// API Used: https://ghibliapi.herokuapp.com/films/

// Release_date, Director, Producer, Title, Description,

const getGhibliFilms = 'https://ghibliapi.herokuapp.com/films/';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getFilms(url) {

    document.querySelector('main').innerHTML += `<img id="load" src="/img/loading.gif" alt="loading..."></div>`

    await delay(1500);

    document.querySelector('#load').classList.add('hide');

    try {

    const response = await fetch(url);
    const jsonResults = await response.json();
    console.log(jsonResults);

    jsonResults.forEach(function (value) { document.querySelector('main').innerHTML += `  

    <div class="cards">
        <div class="card">
            <div class="cardContent">
                <h1>${value.title}</h1>
                <section><p>Directed By:</p><p>${value.director}</p></section>
                <section><p>Produced By:</p><p>${value.producer}</p></section>
                <a href="details.html?id=${value.id}">More Info</a>
            </div>
        </div>
    </div>
`;})
    } catch {}
}

getFilms(getGhibliFilms);