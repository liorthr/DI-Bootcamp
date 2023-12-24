function playTheGame(){  
    //3.1
    let userAnswer = "Hey bro👋 do you want to play with us ?"
    //3.2
  if (confirm(userAnswer) == true) {
    //userAnswer = "You pressed OK!"
    let question2 = prompt("Enter a number between 1 and 10")
    let CheckQuestion2 = parseInt(question2)
    if(isNaN(CheckQuestion2)){
        alert("Sorry Not a number, Goodbye")
    }else if(CheckQuestion2 < 1 || CheckQuestion2 > 10){
        alert("sorry, it's not a good number")
    }else{
        let computerNumber = Math.floor(Math.random() * 10 ) + 1
        let userNumber = CheckQuestion2
        compareNumbers(userNumber,computerNumber)
    }
  } else {
    userAnswer = "You canceled!"
  }
}      
playTheGame()

// function compareNumbers(userNumber,computerNumber){
//     if(userNumber==computerNumber){
//         alert("Winner")
//     }else if(userNumber>computerNumber){
//         alert("Your number is bigger then the computer's, guess again")
//         CheckQuestion2 = prompt("Try with another number")
//         playTheGame()//i want to prompt() to user guess again
//     }else if(userNumber<computerNumber){
//         alert("Your number is smaller then the computer's, guess again")
//         CheckQuestion2 = prompt("Try with another number")
//         playTheGame()//i want to prompt() to user guess again
//     }else{
//         alert("fail")
//     }
// }
function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
        alert("Winner");
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger than the computer's, guess again.");
        let newGuess = prompt("Try with another number");
        let checkNewGuess = parseInt(newGuess);
// can you explain why we need to write "!" before isNaN
        if (!isNaN(checkNewGuess) && checkNewGuess >= 1 && checkNewGuess <= 10) {
            compareNumbers(checkNewGuess, computerNumber);
        } else {
            alert("Sorry, that's not a valid number. Game over.");
        }
    } else if (userNumber < computerNumber) {
        alert("Your number is smaller than the computer's. Guess again.");
        let newGuess = prompt("Try with another number");
        let checkNewGuess = parseInt(newGuess);

        if (!isNaN(checkNewGuess) && checkNewGuess >= 1 && checkNewGuess <= 10) {
            compareNumbers(checkNewGuess, computerNumber);
        } else {
            alert("Sorry, that's not a valid number. Game over.");
        }
    } else {
        alert("Fail");
    }
}

// Start the game
playTheGame();

function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
        alert("Winner");
    } else if (userNumber > computerNumber) {
        do {alert("Your number is bigger than the computer's, guess again.");
        let newGuess = prompt("Try with another number");
        let checkNewGuess = parseInt(newGuess);

        if (!isNaN(checkNewGuess) && checkNewGuess >= 1 && checkNewGuess <= 10) {
            compareNumbers(checkNewGuess, computerNumber);
        }
    } 
        while(userNumber === computerNumber)
}