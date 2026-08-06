
function pokeTypesToLi (types) {
    return types.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

//FUNÇÃO PARA ADICIONAR A IMAGEM - Substituída por script direto no corpo do HTML 
// function pokeImgToLi (pokemon){
//     return `<img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">`}
// ${pokeImgToLi(pokemon)} - a ser colocado dentro do Li com a função pokeImgToLi

function PokemonToLi(pokemon) {
    return ` 
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
              
            <div class="detail">
                <ol class="types">
                    ${pokeTypesToLi(pokemon.types).join('')}
                </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">  
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(PokemonToLi).join('');
//função MAP super simplificada para substituir o FOR
})

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

        //função MAP simplificada
        // const listItem = pokemons.map(pokemon => PokemonToLi(pokemon))
        // console.log(listItem)
        // pokemonList.innerHTML += listItem;

        //**Função MAP super simplificada - por padrão cada item percorrido pelo MAP é convertido diretamente em um item HTML da lista, sem precisar criar uma variável para adicionar. De forma mais simples ainda, o join ja executa a junção dos itens sem a vírgula de forma direta, eliminando a criação de outra variável, e tudo isso é passado diretamente para o innerHTMl, que tem a função de inserir o conteúdo manipulado aqui diretamente no corpo do HTML da página, através da ID do elemento, neste caso a pokemonList. 
  