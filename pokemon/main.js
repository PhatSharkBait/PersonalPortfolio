const allPokemon = []

// function getPokeData(url) {
//     fetch(url).then(function(response) {
//         response.json().then(function (pokeData){
//             const pokeMap = pokeData.results.map(pokemon => {
//                 return fetch(pokemon.url).then(resData => {
//                     console.log(resData)
//                     resData.json().then(pokeJson => {
//                         allPokemon.push(pokeJson)
//                     })
//                 })
//             }) 
//             console.log(pokeMap)
//             //populatePokeCards(pokeData.results)
//         })
//     })
// }
const colorPicker = {
    "bug" : "#87970d",
    "dark" : "#513d2d",
    "electric": "#efa505",
    "fairy": "#efadef",
    "fighting": "#7f3119",
    "fire": "#bc2b0c",
    "flying": "#5a74d2",
    "ghost": "#494a99",
    "grass": "#246a17",
    "ground": "#a0853c",
    "ice": "#a0853c",
    "normal": "#a7a694",
    "poison": "#633862",
    "psychic": "#da3168",
    "rock": "#9f873d",
    "steel": "#8d8a9b",
    "water": "#1064bc",
    "dragon": "slateblue"
}

//change Pokemon id so we can access the pokemon images
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}


async function getAPIData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }
  
  // now, use the async getAPIData function
  getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then((data) => {
    for (const pokemon of data.results) {
      getAPIData(pokemon.url).then((pokeData) => {
        populatePokeCards(pokeData)
      })
    }
  })

let pokemonGrid = document.querySelector(".pokemonGrid")

function populatePokeCards(singlePokemon) {
        console.log(singlePokemon)
        let pokeScene = document.createElement('div')
        pokeScene.className = "flip-card"
        let pokeCard = document.createElement('div')
        pokeCard.className = "flip-card-inner"
        pokeScene.addEventListener ("click", () => {
          pokeCard.classList.toggle('is-flipped')
        })
        
        let pokeFront = populateCardFront(singlePokemon)
        pokeFront.className = "flip-card-front"
        pokeFront.style = `background-image: linear-gradient(${getColors(singlePokemon)})`

        let pokeBack = populateCardBack(singlePokemon)
        pokeBack.className = "flip-card-back"

        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)
        pokemonGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  let cardFront = document.createElement('div')
  let pokeImg = document.createElement('img')
  pokeImg.className = "pokeImg"
  pokeImg.src = `../data/images/${(pokemon.id).pad(3)}.png`

  cardFront.appendChild(pokeImg)
  return cardFront
}

function populateCardBack(pokemon) {
  let cardBack = document.createElement('div')
  let name = document.createElement("h1")
  name.className = "pokeName"
  name.textContent = pokemon.species.name
  let pokeStats = document.createElement('div')
  pokeStats.className = "pokeStats"
  pokeStats.textContent = `${pokemon.stats[0].base_stat}`

  cardBack.appendChild(name)
  cardBack.appendChild(pokeStats)
  return cardBack
}

function getColors(pokemon){
    type1 = pokemon.types[0].type.name
    if (pokemon.types.length > 1){
            type2 = pokemon.types[1].type.name
        } else {
            type2 = type1
        }
    
    return [colorPicker[type1], colorPicker[type2]]

    
}