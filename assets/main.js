
function PokemonToLi(pokemon) {
    return ` 
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
              
            <div class="detail">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons()
    .then((pokemons) => {
        const listItem = []
        
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItem.push(PokemonToLi(pokemon));
            
            console.log(listItem)
            pokemonList.innerHTML += listItem[i];
        }
})

//CONTINUAR A PARTIR DA FUNÇÃO MAP 
  
// teste de assincronismo
const a = 10;
const b = 5;
const c = `O resultado de ${a} + ${b} é igual a ${ a + b}`;
console.log(c);

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