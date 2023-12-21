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

function compareNumbers(userNumber,computerNumber){
    if(userNumber==computerNumber){
        alert("Winner")
    }else if(userNumber>computerNumber){
        alert("Your number is bigger then the computer's, guess again")
        CheckQuestion2 = prompt("Try with another number")
        playTheGame()
    }else if(userNumber<computerNumber){
        alert("Your number is smaller then the computer's, guess again")
        CheckQuestion2 = prompt("Try with another number")
        playTheGame()
    }else{
        alert("fail")
    }
}
