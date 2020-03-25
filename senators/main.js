import {senators} from "../data/senators.js"

const senatorDiv = document.querySelector('.div')
const main = document.querySelector('.main')

function populatesenatorDiv(senators) {
    senators.forEach(senator => {
        console.log(`${senator.first_name} ${senator.last_name}`)
        let name = document.createElement("h4")
        name.textContent = `${senator.first_name} ${senator.last_name}`

        main.appendChild(name)
    });
}

populatesenatorDiv(senators)