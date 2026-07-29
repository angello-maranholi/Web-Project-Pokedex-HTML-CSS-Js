
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
        
        // função FOR (loop)
        //const listItem = []

        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItem.push(PokemonToLi(pokemon));
        //     console.log(listItem)
        // }

        //função MAP - para substituir o for
        // const listItem = pokemons.map((pokemon) => {
        //     return PokemonToLi(pokemon);
        // })

        //simplificando o MAP
        const listItem = pokemons.map(pokemon => PokemonToLi(pokemon))
        console.log(listItem)
        //simplificando mais ainda o MAP

        pokemonList.innerHTML += listItem;
})
  
// teste de assincronismo
const a = 10;
const b = 5;
const c = `O resultado de ${a} + ${b} é igual a ${ a + b}`;
console.log(c);
