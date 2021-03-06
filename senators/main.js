import {senators} from "../data/senators.js"
import {removeChildren} from "../utility.js"

const senatorDiv = document.querySelector('.senators')
const main = document.querySelector('.main')
const repBut = document.querySelector(".rBut")
const demBut = document.querySelector(".dBut")
const otherBut = document.querySelector(".oBut")
const seniorityBut = document.querySelector("#seniority")
const alphabetBut = document.querySelector("#alphabet")
const voteBut = document.querySelector("#vote")
const loyaltyBut = document.querySelector("#loyalty")

function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ' '
    return{
        id:senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
        party:senator.party,
        seniority: parseInt(senator.seniority, 10),
        missedVotesPct: senator.missed_votes_pct,
        party: senator.party,
        loyaltyPct: senator.votes_with_party_pct
    }
})
}
//sort by seniority (most to least)
// const sortedSenators = getSimplifiedSenators(senators).sort((a, b) => {
//     return parseInt(b.seniority) - parseInt(a.seniority);
// })

function sortedSenators(senators, buttonType) {
    return getSimplifiedSenators(senators).sort((a, b) => {
        if (buttonType == "seniority") {
            return parseInt(b.seniority) - parseInt(a.seniority);
        } else if (buttonType == "loyalty"){
            return parseInt(b.loyaltyPct) - parseInt(a.loyaltyPct);
        } else {
            return parseInt(b.missedVotesPct) - parseInt(a.missedVotesPct);
        }
    })
}

repBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(republicans)
})
demBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(democrats)
})
otherBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(others)
})
seniorityBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(sortedSenators(senators, "seniority"))
})
alphabetBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(getSimplifiedSenators(senators))
})
voteBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(sortedSenators(senators, "vote"))
})
loyaltyBut.addEventListener("click", (event) => {
    removeChildren(senatorDiv)
    populateSenatorDiv(sortedSenators(senators, "loyalty"))
})


function populateSenatorDiv(simpleSenators) {
    simpleSenators.forEach(senator => {
        let senCard = document.createElement('div')
        senCard.className = "senCard"
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')

        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senCard.appendChild(senFigure)
        senCard.appendChild(progressBars(senator))
        senatorDiv.appendChild(senCard)
    });
    main.appendChild(senatorDiv)
}

function progressBars(senator) {
    let progressDiv = document.createElement('div')
    progressDiv.className = 'progressDiv'
    let loyaltyLabel = document.createElement('label')
    loyaltyLabel.for = 'loyalty'
    loyaltyLabel.textContent = 'Loyalty'
    let loyaltyBar = document.createElement('progress')
    loyaltyBar.id = 'loyalty'
    loyaltyBar.max = 100
    loyaltyBar.value = senator.loyaltyPct
    let seniorityLabel = document.createElement('label')
    seniorityLabel.for = 'seniority'
    seniorityLabel.textContent = 'Seniority'
    let seniorityBar = document.createElement('progress')
    seniorityBar.id = 'seniority'
    seniorityBar.max = mostSeniority.seniority
    seniorityBar.value = senator.seniority
    let votingLabel = document.createElement('label')
    votingLabel.for = 'voting'
    votingLabel.textContent = 'Vote'
    let votingBar = document.createElement('progress')
    votingLabel.id = 'voting'
    votingBar.max = 100
    votingBar.value = senator.missedVotesPct

    progressDiv.appendChild(loyaltyLabel)
    progressDiv.appendChild(loyaltyBar)
    progressDiv.appendChild(seniorityLabel)
    progressDiv.appendChild(seniorityBar)
    progressDiv.appendChild(votingLabel)
    progressDiv.appendChild(votingBar)
    return progressDiv
}

const filterSenators = (prop, value) => {
    return getSimplifiedSenators(senators).filter(senator => {
        return senator[prop] === value
    })
}

const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')
const others = filterSenators('party', 'ID')

const mostSeniority = getSimplifiedSenators(senators).reduce(
    (acc, senator) => {
        return acc.seniority > senator.seniority ? acc : senator
    }, {}
)

populateSenatorDiv(getSimplifiedSenators(senators))

