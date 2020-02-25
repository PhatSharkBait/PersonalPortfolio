import { films } from "../data/films.js"
import { people } from "../data/people.js"
import { starships } from "../data/starships.js"

console.log("Hello There")



const greetingDiv = document.querySelector(".greeting")

const CASTLIST = document.createElement("ul")

let counter = 1;

people.forEach(person => {
    const listItem = document.createElement("li")
    listItem.textContent = person.name
    CASTLIST.appendChild(listItem)

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    imageItem.addEventListener("click", (event) => {
        console.log(event)
    })
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter ++
})

let starCounter = 1;

starships.forEach(ship => {
    const listItem = document.createElement("li")
    listItem.textContent = ship.name
    CASTLIST.appendChild(listItem)

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/starships/${starCounter}.jpg`
    greetingDiv.appendChild(imageItem)
    starCounter ++
})

greetingDiv.appendChild(CASTLIST);

