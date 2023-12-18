//EX 1
//Part 1
/*
function infoAboutMe(){
    let name = "Lior"
    let age = 20
    let hobbies = ["Gym", "Formuma 1","Cars"]
    console.log("My name is "+ name + " i'm "+ age + " years old and my hobbies are "+ hobbies)
}
infoAboutMe()
*/

//Part 2
/*
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("Your name is " + personName + " , you are " + personAge +
    " yeras old, your favorite color is " + personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
*/

//EX 2

/*
function calculateTip(){
    let amountBill = prompt("What the amount of the bill?")
    let tip;
    if(amountBill<50){
        tip = amountBill*0.2
    }else if(amountBill >= 50 && amountBill<= 200){
        tip = amountBill*0.15
    }else{
        tip = amountBill*0.10
    }
    console.log("If your bill equal to " + amountBill + " your tip is "+ tip)
}
calculateTip()
*/

//EX 3
/*
function isDivisible(){
    let sum = 0
    for(let i = 0; i<500; i++){
        if(i%23 == 0){
            console.log(i)
            sum = sum+i
        }else{
            continue
        }
    }
    console.log("Sum: "+ sum)
}
isDivisible()
*/

//Bonus
/*
function isDivisible(divisor){
    let sum = 0
    for(let i = 0; i<500; i++){
        if(i%divisor == 0){
            sum += i
        }else{
            continue
        }
    }
    console.log("All the numbers divisible by "+divisor+" , and their sum: " + sum)
}
isDivisible(1)
*/

//EX 4
/*
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingArray = ["banana", "orange","apple"]
let shoppingList = shoppingArray.filter(item => stock.hasOwnProperty(item))
console.log(shoppingList)

function myBill(){
    for(disponibilty in stock){
        if(stock[disponibilty]>=1){
            console.log(indexOf(stock[disponibilty]))
        }else{
            continue
        }
    }
}
myBill()

*/
//I can't solve the 4

//EX 5



//EX 6
//1
/*
function hotelCost(){
    let userNumberNightAtHotel = prompt("How many night?")
    let priceAllNight = 0
    while(userNumberNightAtHotel === "" || isNaN(userNumberNightAtHotel) ){
        userNumberNightAtHotel = prompt("Answer how many night? In number")
    }
    priceAllNight = userNumberNightAtHotel * 140
    console.log("Price: " + priceAllNight + " $")
}

hotelCost()
*/
//2

function planeRideCost(){
    let userDestination = prompt("Hey, Where do you want travel?")
    while(userDestination == "" || typeof userNumberNightAtHotel !== "string" ){
        userDestination = prompt("Please answer a correct destination")
    }
    if(userDestination === "London"){
        console.log("Price:183$")
    }else if(userDestination === "Paris"){
        console.log("Price: 220$")
    }else{
        console.log("Price: 300$")
    }
}
planeRideCost()
function planeRideCost(){
    let userDestination = prompt("Hey, Where do you want travel?")
    while(userDestination == "" || typeof userNumberNightAtHotel !== "string" ){
        userDestination = prompt("Please answer a correct destination")
    }
    if(userDestination === "London"){
        console.log("Price:183$")
    }else if(userDestination === "Paris"){
        console.log("Price: 220$")
    }else{
        console.log("Price: 300$")
    }
}
planeRideCost()
