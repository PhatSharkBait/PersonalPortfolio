import {senators} from "../data/senators.js"

const senatorDiv = document.querySelector('div')
const main = document.main

function populatesenatorDiv(senators) {
    senators.forEach(senator => {
        console.log(`${senator.first_name} ${senator.last_name}`)
    });
}

populatesenatorDiv(senators)