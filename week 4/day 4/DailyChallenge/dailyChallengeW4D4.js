let planets = ["Mercure", "Vénus", "Terra", "Mars", "Jupiter", "Saturne", "Uranus", "Neptune", "Lune"]
let colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan", "magenta", "lime"]

planets.forEach((planet, index) => divInPlanets(planet, index))
console.log(planets)

function divInPlanets(planetName, index){
    const divJs = document.createElement("div")
    divJs.innerText = planetName
    divJs.classList.add("planet")
    divJs.style.backgroundColor = colors[index % colors.length]
    document.querySelector("section").appendChild(divJs)
}


