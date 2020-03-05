import { starships } from "../data/starships.js"

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {

        let anchorWrap = document.createElement("a")
        anchorWrap.href = "#"

        let listItem = document.createElement("li")
        listItem.textContent = starship.name

        anchorWrap.addEventListener("click", (event) => {
            console.log("NOICE CLICK")
        })

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    })
}
populateNav(starships);
