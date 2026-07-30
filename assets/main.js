
function PokemonToLi(pokemon) {
    return ` 
        <li class="pokemon">
            <span class="number"> #001</span>
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

pokeApi.getPokemons().then((pokemons = []) => {
        
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
        // const listItem = pokemons.map(pokemon => PokemonToLi(pokemon))
        // console.log(listItem)
        // pokemonList.innerHTML += listItem;

        //simplificando mais ainda o MAP - por padrão cada item percorrido pelo MAP é convertido diretamente em um item HTML da lista, sem precisar criar uma variável para adicionar. De forma mais simples ainda, o join ja executa a junção dos itens sem a vírgula de forma direta, eliminando a criação de outra variável, e tudo isso é passado diretamente para o innerHTMl, que tem a função de inserir o conteúdo manipulado aqui diretamente no corpo do HTML da página, através da ID do elemento, neste caso a pokemonList. 
        pokemonList.innerHTML += pokemons.map(PokemonToLi).join('');
       console.log(pokemonList)
})
  