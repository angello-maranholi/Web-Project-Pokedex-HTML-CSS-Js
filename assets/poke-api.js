
const pokeApi = {}

pokeApi.getDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            //entender o que ta aqui em baixo...
            .then((pokemons) => pokemons.map((pokeApi.getDetails)))
            .then((detailRequests) => Promise.all(detailRequests))
            .then((pokeDetails) => pokeDetails);
}

// Promisse.all(
//     for (let i = 0; i < 1154; i++) {
//         const pokeId = pokeId[i];        
//     }
//     const pokeDetails = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
//     fetch(pokeDetails)
// )

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
