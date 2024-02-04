function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buttonJS = document.getElementById("centered-button");
buttonJS.addEventListener("click", displayRandomPersonStarWars);

async function displayRandomPersonStarWars() {
    const peopleNumber = getRandomNumber(1, 83);
    
    fetch(`https://www.swapi.tech/api/people/${peopleNumber}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const nameJS = data.result.properties.name;
        let displayName = document.getElementById("display-name");
        displayName.textContent = `${nameJS}`;
        const heightJS = data.result.properties.height;
        let displayHeight = document.getElementById("display-height");
        displayHeight.textContent = `HEIGHT: ${heightJS}`;
        const genderJS = data.result.properties.gender;
        let displayGender = document.getElementById("display-gender");
        displayGender.textContent = `GENDER: ${genderJS}`;
        const birthYearJS = data.result.properties.birth_year;
        let displayBirthYear = document.getElementById("display-birth-year");
        displayBirthYear.textContent = `BIRTH YEAR: ${birthYearJS}`;
        const homeWorldJS = data.result.properties.homeworld;
        let displayHomeworld = document.getElementById("display-home-world");
        displayHomeworld.textContent = `HOME WORLD: ${homeWorldJS}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
