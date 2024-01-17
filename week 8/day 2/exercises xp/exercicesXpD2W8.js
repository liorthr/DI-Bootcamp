//EXERCISE 1
// let twoNumber = (a,b)=> a + b
// let result =twoNumber(2,3)
// console.log(result)


//---------------------------------------------------------


//EXERCISE 2

// function weightGrmToWeight(){
//     let kgAnswerUser = prompt("Write your weight in kg?")
//     let gramsAnswerUser = Number(kgAnswerUser) * 1000
//     console.log(`Your weight in kg is ${kgAnswerUser}kg so in grams its ${gramsAnswerUser}g`)
// }
//weightGrmToWeight()

//4.Arrow function

// let afGramsToKg = (a)=>console.log(`Your weight in grams is ${Number(a)*1000}g`)
// afGramsToKg(7)


//---------------------------------------------------------


//EXERCISE 3


// function infosToTheDom(childNumber, partnerName, geoLocation, jobTitle){
//     childNumber = prompt("How many child you have?")
//     partnerName = prompt("The name of your partner?")
//     geoLocation = prompt("Your location?")
//     jobTitle = prompt("Your job title?")

//     let sentence = `You will be a ${jobTitle} in ${geoLocation} and married to ${partnerName} with ${childNumber} kids `

//     let bodyJs = document.querySelector("body")
//     let sentenceInDom = document.createElement("p")
//     sentenceInDom.textContent = sentence

//     bodyJs.appendChild(sentenceInDom)
// }
// infosToTheDom()


//---------------------------------------------------------


//EXERCISE 4


// function sayWelcomeToTheNEwUser(){
//     let usernameAnswer = document.querySelector(".form-control")
//     usernameAnswer = prompt("Your username")
//     alert(`Welcome ${usernameAnswer} in my website`)
// }

// let inputGroup = document.querySelector(".input-group")
// inputGroup.addEventListener("click", sayWelcomeToTheNEwUser)

