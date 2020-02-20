import { films } from "../data/films.js"

console.log("Hello There")

const greetingDiv = document.querySelector(".greeting")

greetingDiv.textcontent = "I just inserted text into a DOM element using my bad javascript skillz";

console.log(greetingDiv.textContent)