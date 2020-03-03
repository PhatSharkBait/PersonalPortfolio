
console.log("I'm Here")

let starPic = document.createElement("img")


const picSelect = () => {
    const selector = Math.floor(Math.random() * 87) + 1
    return selector;
}

starPic.src = `https://starwars-visualguide.com/assets/img/characters/${picSelect()}.jpg`;
starPic.className = "tile-img"
starPic.addEventListener("error", (event) => {
    console.log(event)
    starPic.src = `https://i.pinimg.com/originals/b7/74/02/b77402531308ad7a929c1ad84ddfec6b.jpg`
})
let figIMG = document.querySelector(".starAnc")
figIMG.appendChild(starPic)
