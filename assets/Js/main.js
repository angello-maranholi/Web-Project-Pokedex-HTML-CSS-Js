
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const pokeName = document.getElementById('pokeName')
const pokeNumber = document.getElementById('pokeNumber')
const pokeImage = document.getElementById('pokeImage')

const maxRecords = 1154;
const limit = 12;
let offset = 0;

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');
console.log(pokemonId);

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>` 
            <li class="pokemon ${pokemon.type}">
                <a href="pokedetail.html?id=${pokemon.number}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">  
                    </div>
                </a>
            </li>
        `).join('');
    })
}

//chama a função e não a define com "="
if (pokemonId) {
    pokeApi.getDetails(pokemonId).then((pokemon) => pokeDetailComplete(pokemon));
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

// function pokeDetailComplete(pokemon) {
//         pokeName.innerText = pokemon.name;
//         pokeNumber.innerText = `#${pokemon.number}`;
//         pokeImage.innerHTML = `<img src="${pokemon.photo}" alt="${pokemon.name}">`;
// }
        
// function pokeReferenceComplete(pokemon) {
//     pokeApi.getDetails = (pokemon) => { 
//         pokeReference.innerHTML = 
//         `<ul class="pokeRefer">
//             <li class="pokeBar">hp</li>
//             <li class="pokeBar">attack</li>
//             <li class="pokeBar">defense</li>
//             <li class="pokeBar">special-attack</li>
//             <li class="pokeBar">special-defense</li>
//             <li class="pokeBar">speed</li>
//             <li class="pokeBar">weight</li>
//         </ul>`
// }}

