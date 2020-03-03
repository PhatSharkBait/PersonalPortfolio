import { films } from "../data/films.js"
import { people } from "../data/people.js"
import { starships } from "../data/starships.js"

console.log("Hello There")

const greetingDiv = document.querySelector(".greeting")

const maleBut = document.querySelector("#mBut")
const femaleBut = document.querySelector("#fBut")
const otherBut = document.querySelector("#oBut")

const otherCharacters = people.filter(person => {
    if (person.gender != "male" && person.gender != "female") {
        return person
    }
})

let result

function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) == "/"){
        start ++
    }
    console.log(`Start is: ${url.charAt(start)} and end is: ${url.charAt(end)}`)
    console.log(url.slice(start, end))
    return url.slice(start, end)
}

console.log(otherCharacters)

maleBut.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "male"))
})
femaleBut.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "female"))
})
otherBut.addEventListener("click", (event) => {
    populateDOM(otherCharacters)
})

function populateDOM(characters) {

    characters.forEach(person => {
        let charNum = getCharNumber(person.url)
        let anchorWrap = document.createElement("a")
        anchorWrap.href = "#"

        let imageItem = document.createElement("img")
        imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
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
    })
}

// let starCounter = 1;

// starships.forEach(ship => {

//     let imageItem = document.createElement("img")
//     imageItem.src = `https://starwars-visualguide.com/assets/img/starships/${starCounter}.jpg`
    
    
//     imageItem.addEventListener("error", (event) => {
//         console.log(event)
//         //imageItem.hidden = true;
//         imageItem.src = `https://i.pinimg.com/originals/b7/74/02/b77402531308ad7a929c1ad84ddfec6b.jpg`
//     })

//     greetingDiv.appendChild(imageItem)
//     starCounter ++
// })

// maleBut.addEventListener("click", (event) => {
//     console.log("clicked on male button")
// })