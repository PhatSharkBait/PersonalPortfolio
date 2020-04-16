let peopleAnc = document.querySelector(".peopleAnc")
let shipAnc = document.querySelector(".shipAnc")

function timer() {
    picChange('people')
    picChange('ship')
}

function selectNum(range) {
    return Math.floor(Math.random() * range) + 1
}

function picChange(page){
    if (page == "people") {
        peoplePic.src = `https://starwars-visualguide.com/assets/img/characters/${selectNum(87)}.jpg`;
    } else if (page == "ship"){
        shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${selectNum(25)}.jpg`;
    }
}

let peoplePic = document.createElement("img")
// peoplePic.className = "tile-img"
peoplePic.src = `https://starwars-visualguide.com/assets/img/characters/${selectNum(87)}.jpg`;
peoplePic.className = "peoplePic"

let shipPic = document.createElement("img")
// shipPic.className = "tile-img"
shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${selectNum(37)}.jpg`;
shipPic.className = "shipPic"

peoplePic.addEventListener("error", (event) => {
    picChange('people')
})

shipPic.addEventListener("error", (event) => {
    picChange('ship')
})


peopleAnc.appendChild(peoplePic)
shipAnc.appendChild(shipPic)