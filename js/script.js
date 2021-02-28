// API Used: https://ghibliapi.herokuapp.com/films/

// Release_date, Director, Producer, Title, Description,

/* —————————————————————————————————————————————————————————————————————————— */
/*                                 GETS ARRAY                                 */
/* —————————————————————————————————————————————————————————————————————————— */

// const ghibliFilms = "https://ghibliapi.herokuapp.com/films/";

// async function getFilms() {
//     try {
//         const response = await fetch(ghibliFilms);
//         const objectsArray = await response.json();

//         console.log(objectsArray);

//         objectsArray.forEach(function (value) { console.log(value.text); });

//     } catch (error) { console.log(error); }
// }

// getFilms();

/* —————————————————————————————————————————————————————————————————————————— */
/*                            EARLIER EXAMPLE BY ME                           */
/* —————————————————————————————————————————————————————————————————————————— */

// const ghibliFilms = 'https://ghibliapi.herokuapp.com/films/';

// async function getBaseUrl(url) {
//     const response = await fetch(url);
//     const jsonServer = await response.json();
//     console.log(jsonServer);
//     const result = jsonServer.results;

//     for (let i = 0; i < result.length; i++) {
//         document.querySelector('main').innerHTML += `
//         <div class="card">
//             <h1><em>Name: </em> ${result[i].name}</h1>
//             <h2><em>Rating: </em>${result[i].rating}</h2>
//             <p><em>Total tags: </em>${result[i].tags.length}</p>
//         </div>`;

//         if (i === 7) {
//             break;
//         }
//     }
// };

// getBaseUrl(ghibliFilms);

/* ——————————————————————————————— TODAYS TASK —————————————————————————————— */

// document.querySelector('main').innerHTML += `<p>https://ghibliapi.herokuapp.com/films/</p>` I can write into the HTML.

const getGhibliFilms = 'https://ghibliapi.herokuapp.com/films/';

// async function getFilms(url) {
//     const response = await fetch(url);
//     const jsonFromServer = await response.json();
//     console.log(jsonFromServer);
//     const res = jsonFromServer.results;

//     for (let i = 0; i < res.length; i++) { document.querySelector('main').innerHTML += `
    
//         <div class="card">
//             <img src="${res[i].image}" />
//             <h2>${res[i].name}</h2>
//         </div>
//     `;
//     }
// }

// getFilms(getGhibliFilms);

async function getFilms(url) {

    try {

    const response = await fetch(url);
    const jsonResults = await response.json();
    console.log(jsonResults);

    jsonResults.forEach(function (value) { document.querySelector('main').innerHTML += `      
        <div class="card">
            <h1> ${value.title} </h1>
            <h2> ${value.director} </h2>
            <p> ${value.producer} </p>
            <a href="details.html?id=${value.id}"> Read More </a>
        </div>
`;})
    } catch {}
}

getFilms(getGhibliFilms);