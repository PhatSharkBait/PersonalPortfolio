import { films } from "../data/films.js"
import { people } from "../data/people.js"

console.log("Hello There")

const gallery = document.querySelector(".gallery")

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
    return url.slice(start, end)
}

function removeChildren(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

maleBut.addEventListener("click", (event) => {
    removeChildren(gallery)
    populateDOM(people.filter(person => person.gender === "male"))
})
femaleBut.addEventListener("click", (event) => {
    removeChildren(gallery)
    populateDOM(people.filter(person => person.gender === "female"))
})
otherBut.addEventListener("click", (event) => {
    removeChildren(gallery)
    populateDOM(otherCharacters)
})


function populateDOM(characters) {

    characters.forEach(person => {
        let charNum = getCharNumber(person.url)
        let anchorWrap = document.createElement("a")
        anchorWrap.href = "#"

        let imageItem = document.createElement("img")
        imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        imageItem.className = "tile-img"
        imageItem.addEventListener("click", (event) => {
            console.log(event)
        })

        imageItem.addEventListener("error", (event) => {
            console.log(event)
            //imageItem.hidden = true;
            imageItem.src = `https://i.pinimg.com/originals/b7/74/02/b77402531308ad7a929c1ad84ddfec6b.jpg`
        })

        anchorWrap.appendChild(imageItem)
        gallery.appendChild(anchorWrap)
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