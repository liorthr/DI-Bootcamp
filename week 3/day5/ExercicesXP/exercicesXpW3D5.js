//EX 1
/*
const people = ["Greg", "Mary", "Devon", "James"]


//PART 1
//1
people.shift()
//2
people[2]= "Jason"
//3
people.push("Lior")
//4
console.log(people.indexOf("Mary"))
//5
const population = people.slice(1, 3)
console.log(population)
console.log(people)
//6
console.log(people.indexOf("Foo"))
// I don't know why its return -1 beacuse when you use - sign 
//in slice method you find the element starting with the end 
//7
//length = indexof(lastelement)+1
let lastElement =  people.length - 1
let last = people[lastElement]
console.log(last)
*/

//PART 2
/*
//1
for(let i = 0; i <people.length; i++){
    console.log(people[i])
}
//2
for(let i = 0; i <people.length; i++){
    if(people[i]==="Devon"){
        break
    }else{
        console.log(people[i])
    }   
}
*/

//EX 2
/*let colors = ["green", "blue", "black", "gray", "yellow"]
let suffixes = ["st", "nd", "rd"]
for(let i = 0; i<colors.length; i++){
    console.log("My " + (i+1) + " choice is " + colors[i])
}*/
/*
//BONUS
let colors = ["green", "blue", "black", "gray", "yellow"]
let suffixes = ["st", "nd", "rd"]
for(let i = 0; i<colors.length; i++){
    let suffix
    switch (i){
        case 0:
            suffix = suffixes[0]
            break
        case 1:
            suffix = suffixes[1]
            break
        default:
            suffix = suffixes[2]
            break
    }
    console.log("My " + (i + 1) + suffix + " choice is " + colors[i])
}
*/

// EX 3
/*
//1
let userNumber = prompt("Write a number")

console.log(typeof userNumber)

//2
while (userNumber < 10){
    userNumber = prompt("Write a good numbere")
}
*/

//EX 4
/*
//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
console.log(building.numberOfFloors)
//3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor )
//4
console.log(building.nameOfTenants[1] + " have " + building.numberOfRoomsAndRent.dan[0]+ " rooms in his appartement.")
//5
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]= 1200
    console.log(building.numberOfRoomsAndRent)
}else{
    console.log(building.numberOfRoomsAndRent) 
}
*/

//EX 5
/*
//1
let family = {
    numberOfChildren: 5,
    numberOfParents:2,
    numberOfGirls: 4,
    numberOfBoys:3,
}
//2
for(let index in family){
    console.log(index)
}
//3
for(let index in family){
    console.log(family[index])
}
*/

//EX 6
/*
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
//1
for(let i = 0; i < details.lenght; i++){
    console.log((i+details[i])+ (i+details[i])+(i+details[i]) )
}
*/
//Really don't understand
//7
/*
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let SocietyName = ''
for(let i= 0; i < names.length; i++){
    SocietyName = names[i][0]
}
SocietyFinal= SocietyName.sort();
console.log(SocietyFinal)
*/
// The sort() method confuse me a lot !
