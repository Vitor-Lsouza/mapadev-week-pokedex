const pokemonListSelect = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')

pokemonListSelect.forEach(pokemon => {

  pokemon.addEventListener('click', () => {
    const openPokemonCard = document.querySelector('.open')
    openPokemonCard.classList.remove('open')
    
    const idSelectedPokemon = pokemon.attributes.id.value

    const pokemonCardIdToOpen = idSelectedPokemon + '-card'
    const pokemonCardToOpen = document.getElementById(pokemonCardIdToOpen)
    pokemonCardToOpen.classList.add('open')

    const activePokemonInListining = document.querySelector('.active')
    activePokemonInListining.classList.remove('active')

    const pokemonSelectedInListing = document.getElementById(idSelectedPokemon)
    pokemonSelectedInListing.classList.add('active')

  })
})