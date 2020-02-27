
console.log("I'm Here")

let starPic = document.createElement("img")


const picSelect = () => {
    const selector = Math.floor(Math.random() * 87) + 1
    return selector;
}

starPic.src = `https://starwars-visualguide.com/assets/img/characters/${picSelect()}.jpg`;
starPic.className = "tile-img"
let figIMG = document.querySelector(".starAnc")
figIMG.appendChild(starPic)