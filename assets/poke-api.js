
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
}


// fetch(url)
//versão mais curta:
//     .then((response) => response.json())
//     .then((jsonBody) => jsonBody.results)
//     .then((pokemonList) => console.log(pokemonList))
//versão mais longa:
// .then(function (response) {
//     response.json()
//         .then(function(responseBody){
//             console.log(responseBody);
// })
