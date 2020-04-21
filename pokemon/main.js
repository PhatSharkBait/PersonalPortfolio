function scroll() {
  $('html,body').animate({
    scrollTop: $('main div').last().offset().top},
    'slower');
}
let legendaryList = [
  144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 491, 638, 639, 640, 808, 809, 999
  ]

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

let startButton = document.querySelector("#start")
let randomButton = document.querySelector("#randomButton")
let meButton = document.querySelector('#meButton')

startButton.addEventListener('click', () => {
  loadPage()
  setTimeout(scroll(), 100)
})

randomButton.addEventListener('click', () => {
  randomPokemon()
  setTimeout(scroll(), 100)
})

meButton.addEventListener('click', () => {
  mePokemon()
  setTimeout(scroll(), 100)
})
//change Pokemon id so we can access the pokemon images
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function loadPage() {
  // now, use the async getAPIData function
  getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=25').then(async (data) => {
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then(async (pokeData) => {
        populatePokeCards(pokeData)
      })
    }
    })
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

let pokemonGrid = document.querySelector(".pokemonGrid")

function populatePokeCards(singlePokemon) {
  let pokeScene = document.createElement('div')
  pokeScene.className = "flip-card"
  let pokeCard = document.createElement('div')
  pokeCard.className = "flip-card-inner"
  if (legendaryList.includes(singlePokemon.id)) {
    pokeCard.classList.toggle('is-legendary')
  }
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

  let pokeTypes = document.createElement('div')
  let types = document.createElement('h2')
  if (pokemon.types.length > 1){
    types.textContent = pokemon.types[1].type.name + " " + pokemon.types[0].type.name
} else {
    types.textContent = pokemon.types[0].type.name
}
  types.className = "types"
  let pokeStats = document.createElement('div')
  pokeStats.className = "pokeStats"
  let speed = document.createElement('h2')
  speed.className = "stats"
  speed.textContent = pokemon.stats[0].stat.name + ":  " + pokemon.stats[0].base_stat
  let specDef = document.createElement('h2')
  specDef.className = "stats"
  specDef.textContent = pokemon.stats[1].stat.name + ":  " + pokemon.stats[1].base_stat
  let specAtk = document.createElement('h2')
  specAtk.className = "stats"
  specAtk.textContent = pokemon.stats[2].stat.name + ":  " + pokemon.stats[2].base_stat
  let def = document.createElement('h2')
  def.className = "stats"
  def.textContent = pokemon.stats[3].stat.name + ":  " + pokemon.stats[3].base_stat
  let atk = document.createElement('h2')
  atk.className = "stats"
  atk.textContent = pokemon.stats[4].stat.name + ":  " + pokemon.stats[4].base_stat
  let hp = document.createElement('h2')
  hp.className = "stats"
  hp.textContent = pokemon.stats[5].stat.name + ":  " + pokemon.stats[5].base_stat

  cardBack.appendChild(name)
  pokeTypes.appendChild(types)
  cardBack.appendChild(pokeTypes)

  pokeStats.appendChild(speed)
  pokeStats.appendChild(hp)
  pokeStats.appendChild(specDef)
  pokeStats.appendChild(specAtk)
  pokeStats.appendChild(def)
  pokeStats.appendChild(atk)
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
    
    return [colorPicker[type2], colorPicker[type1]] //reversed so main type is on top   
}

class Pokemon {
  constructor(name, id, types, stats) {
    this.species = name
    this.id = id
    this.types = types
    this.stats = stats
  }
}

//For New Pokemon Button, Selects random Pokemon, possible to get repeats
function randomPokemon() {
  selector = Math.floor(Math.random()* 781) + 26 //Random number between 26 and 809
  getAPIData(`https://pokeapi.co/api/v2/pokemon/${selector}`).then((pokeData)  => {
    populatePokeCards(pokeData)
  })
}

function mePokemon() {
  let me = new Pokemon(
    {
      "name": "cameron",
      "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    999, 
    [
      {
        "slot": 1,
        "type": {
          "name": "fire",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "dragon",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    [
      {
        "base_stat": 90,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      },
      {
        "base_stat": 90,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 90,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 90,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 90,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 90,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      }
    ],
    )
  populatePokeCards(me)
}
