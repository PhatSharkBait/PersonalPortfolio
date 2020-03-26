import {senators} from "../data/senators.js"

const senatorDiv = document.querySelector('.senators')
const main = document.querySelector('.main')

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
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`
    }
})

populateSenatorDiv(senatorNames)

//https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg
