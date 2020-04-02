function getPokeData(url) {
    let pokemonGrid = document.querySelector(".pokemonGrid")
    let pokeImg = document.querySelector(".pokeImg")
    fetch(url).then(function(response) {
        response.json().then(function (data){
            console.log(data)
            pokeImg.src = data.sprites.front_default
        })
    })
}

console.log(getPokeData('https://pokeapi.co/api/v2/pokemon/1/'))