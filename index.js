let peopleAnc = document.querySelector(".peopleAnc")
let shipAnc = document.querySelector(".shipAnc")

function timer() {
    peopleChange();
    shipChange();
}

const peopleSelect = () => {
    const selector = Math.floor(Math.random() * 87) + 1
    return selector;
}
const shipSelect = () => {
    const selector = Math.floor(Math.random() * 37) + 1
    return selector;
}

const peopleChange = () => {
    peoplePic.src = `https://starwars-visualguide.com/assets/img/characters/${peopleSelect()}.jpg`;
}

const shipChange = () => {
    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipSelect()}.jpg`;
}

let peoplePic = document.createElement("img")
// peoplePic.className = "tile-img"
peoplePic.src = `https://starwars-visualguide.com/assets/img/characters/${peopleSelect()}.jpg`;
peoplePic.className = "peoplePic"

let shipPic = document.createElement("img")
// shipPic.className = "tile-img"
shipPic.src = `https://starwars-visualguide.com/assets/img/ship/${shipSelect()}.jpg`;
shipPic.className = "shipPic"

peoplePic.addEventListener("error", (event) => {
    peopleChange()
})

shipPic.addEventListener("error", (event) => {
    shipChange()
})


peopleAnc.appendChild(peoplePic)
shipAnc.appendChild(shipPic)

populateLink()