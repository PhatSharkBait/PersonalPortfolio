import { films } from "../data/films.js"
import { people } from "../data/people.js"
import { starships } from "../data/starships.js"

console.log("Hello There")

const greetingDiv = document.querySelector(".greeting")

const maleBut = document.querySelector("#mBut")
const femaleBut = document.querySelector("#fBut")
const otherBut = document.querySelector("#oBut")

const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const otherCharacters = people.filter(person => {
    if (person.gender != "male" && person.gender != "female") {
        return person
    }
})


console.log(otherCharacters)

let counter = 1


people.forEach(person => {


    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    imageItem.addEventListener("click", (event) => {
        console.log(event)
    })

    imageItem.addEventListener("error", (event) => {
        console.log(event)
        //imageItem.hidden = true;
        imageItem.src = `https://i.pinimg.com/originals/b7/74/02/b77402531308ad7a929c1ad84ddfec6b.jpg`
    })

    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter ++
})

let starCounter = 1;

starships.forEach(ship => {

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/starships/${starCounter}.jpg`
    
    
    imageItem.addEventListener("error", (event) => {
        console.log(event)
        //imageItem.hidden = true;
        imageItem.src = `https://i.pinimg.com/originals/b7/74/02/b77402531308ad7a929c1ad84ddfec6b.jpg`
    })

    greetingDiv.appendChild(imageItem)
    starCounter ++
})

maleBut.addEventListener("click", (event) => {
    console.log("clicked on male button")
})