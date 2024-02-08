import people from './data.mjs'

function calculateAverage(){

    const ages = people.map(person => person.age);
    let ageGlobal = 0

    ages.forEach(element => {
        ageGlobal += element
    });

    const averageAge = ageGlobal / ages.length;
    console.log("Average age:", averageAge);
}

calculateAverage()