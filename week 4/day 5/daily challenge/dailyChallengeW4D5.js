
function mySong(){
    let userNumber = prompt("Hey bro write a number:")
    let numberOfBeer = parseInt(userNumber)
    for(let i= 1; i<numberOfBeer; i++){

        if(i === 1){
            console.log(numberOfBeer +" bottles of beer on the wall")
            console.log(numberOfBeer +" bottles of beer")
            console.log('Take ' + i + " down, pass it around")
            numberOfBeer = numberOfBeer - i
            console.log(numberOfBeer +" bottles of beer on the wall")
            console.log("  ")
        }else {
            console.log(numberOfBeer +" bottles of beer on the wall")
            console.log(numberOfBeer +" bottles of beer")
            console.log('Take ' + i + " down, pass them around")
            numberOfBeer = numberOfBeer - i
            console.log(numberOfBeer +" bottles of beer on the wall")
            console.log("  ")
        }
        if (i === 0 || i<0) {
            console.log("No more bottles of beer on the wall");
            break
        }
    }

}
mySong()