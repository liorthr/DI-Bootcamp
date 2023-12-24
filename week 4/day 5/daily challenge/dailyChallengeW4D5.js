let userNumber = prompt("Hey bro write a number:")
let numberOfBeer = userNumber

for(let i= 1; i<50; i++){
    console.log(numberOfBeer)
    //console.log(i)
    numberOfBeer = numberOfBeer - i
    console.log(numberOfBeer)
    if(numberOfBeer<=0){
        break
    }
}

  