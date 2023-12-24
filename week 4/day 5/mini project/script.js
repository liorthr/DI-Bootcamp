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

function compareNumbers(userNumber, computerNumber) {
    while (true) {
        if (userNumber === computerNumber) {
            alert("Congratulations! You guessed the correct number.");
            break;
        } else if (userNumber > computerNumber) {
            userNumber = parseInt(prompt("Your number is bigger than the computer's. Guess again."));
        } else {
            userNumber = parseInt(prompt("Your number is smaller than the computer's. Guess again."));
        }

        if (isNaN(userNumber)) {
            alert("Sorry, that's not a valid number. Game over.");
            break;
        }
    }
}

playTheGame();