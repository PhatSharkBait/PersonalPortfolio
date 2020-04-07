const allPokemon = []

function getPokeData(url) {
    fetch(url).then(function(response) {
        response.json().then(function (pokeData){
            const pokeMap = pokeData.results.map(pokemon => {
                return fetch(pokemon.url).then(resData => {
                    console.log(resData)
                    resData.json().then(pokeJson => {
                        allPokemon.push(pokeJson)
                    })
                })
            }) 
            console.log(pokeMap)
            //populatePokeCards(pokeData.results)
        })
    })
}

let pokemonGrid = document.querySelector(".pokemonGrid")

getPokeData('https://pokeapi.co/api/v2/pokemon?limit=25')

populatePokeCards(allPokemon)


function populatePokeCards(pokeArray) {
    pokeArray.forEach(pokemon => {
        let pokeScene = document.createElement('div')
        pokeScene.className = "flip-card"
        let pokeCard = document.createElement('div')
        pokeCard.className = "flip-card-inner"
        
        let pokeFront = document.createElement('div')
        pokeFront.className = "flip-card-front"
        let pokeBack = document.createElement('div')
        pokeBack.className = "flip-card-back"
        pokeBack.textContent = pokemon.name
    
        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)
        pokemonGrid.appendChild(pokeScene)
    });
}


/*var card = document.querySelector('.flip-card')
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped')
})*/
