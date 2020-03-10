import { starships } from "../data/starships.js"
import { getLastNumber, removeChildren} from "../utility.js"

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const main = document.querySelector('.main')

const dialogue = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener("click", (event) => {
    dialogue.classList.toggle("is-active")
})
modalBackground.addEventListener("click", (event) => {
    dialogue.classList.toggle("is-active")
})


function populateNav(starships) {
    starships.forEach(starship => {

        let anchorWrap = document.createElement("a")
        anchorWrap.href = "#"

        let listItem = document.createElement("li")
        listItem.textContent = starship.name

        anchorWrap.addEventListener("click", (event) => {
            //let shipName = event.target.textContent
            //const foundShip = starships.find(ship => ship.name === shipName)
            removeChildren(main)
            populateShipView(starship)
        })

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}

function populateShipView(shipData) {
    let lastNum = getLastNumber(shipData.url)
    let shipImage = document.createElement("img")
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${lastNum}.jpg`
    shipImage.className = "tile-img"

    shipImage.addEventListener("error", (event) => {
        shipImage.hidden = true
        dialogue.classList.toggle("is-active")
    })

    main.appendChild(shipImage)
}

populateNav(starships);
