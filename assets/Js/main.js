
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 1154;
const limit = 12;
let offset = 0;

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>` 
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">  
                </div>
            </li>
        `).join('');
    })
}

loadMorePokemons(offset, limit);

//BOTÃO PARA CARREGAR MAIS POKEMONS COM FUNÇÃO DE REMOVER O BOTÃO QUANDO ATINGIR O LIMITE DE POKEMONS UTILIZANDO IF/ELSE COMO VERIFICADOR.

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const newLimit = maxRecords - offset;
    if (newLimit <= limit) {
        loadMorePokemons(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
    loadMorePokemons(offset, limit);
}})
