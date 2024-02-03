let squareJS = document.getElementById("square")
let displayName = document.getElementById("display-name")
let displayHeight = document.getElementById("display-height")
let displayGender = document.getElementById("display-gender")
let displayBirthYear = document.getElementById("display-birth-year")
let displayHomeworld = document.getElementById("display-home-world")
let buttonJS = document.getElementById("centered-button")
const peopleNumber = 5

fetch(`https://www.swapi.tech/api/people/${peopleNumber}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const nameJS = data.result.properties.name
        displayName.textContent = `${nameJS}`
        const heightJS = data.result.properties.height
        displayHeight.textContent = `HEIGHT: ${heightJS}`
        const genderJS = data.result.properties.gender
        displayGender.textContent = `GENDER: ${genderJS}`
        const birthYearJS = data.result.properties.birth_year
        displayBirthYear.textContent = `BIRTH YEAR: ${birthYearJS}`
        const homeWorldJS = data.result.properties.homeworld
        displayHomeworld.textContent = `HOME WORLD: ${homeWorldJS}`
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
