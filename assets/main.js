
// fetch API é uma interface mais moderna e integrada nos browsres mais modernos

const offset = 0;
const limit = 20;
const url = `https://pokeapi.com/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url)
     .then(function (response) {
         console.log(response)
     })
