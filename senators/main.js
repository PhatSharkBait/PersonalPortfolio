import {senators} from "../data/senators.js"
import {removeChildren} from "../utility.js"

const senatorDiv = document.querySelector('.senators')
const main = document.querySelector('.main')
const repBut = document.querySelector(".rBut")
const demBut = document.querySelector(".dBut")
const otherBut = document.querySelector(".oBut")

repBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(senatorNames.filter(senator => senator.party === "R"))
})
demBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(senatorNames.filter(senator => senator.party === "D"))
})
otherBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(senatorNames.filter(senator => senator.party === "ID"))
})


function populateSenatorDiv(senators) {
    senators.forEach(senator => {

        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    });
    main.appendChild(senatorDiv)
}

const senatorNames = senators.map(senator => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ' '
    return{
        id:senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        party:senator.party
    }
})

populateSenatorDiv(senatorNames)

//https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg
