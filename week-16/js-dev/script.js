
const user1 = {name: 'Jarod', age: 22, location: 'Manathan', married :  true}
const user2 = {name: 'Ethan', age: 15, location: 'Paris', married :  false}
const user3 = {name: 'Omer', age: 32, location: 'LA', married :  false}
const user4 = {name: 'Mendel', age: 27, location: 'Sarcelles', married :  true}

//USING CONSOLE.TABLE
// console.table([user1,user2,user3, user4])


//DESTRUCTURING
// function onlyImportantData(data){
//     const {name, age, location} = data
//     return ` His name is ${name} he have ${age} and he live in ${location}`
// }
// console.log(onlyImportantData(user1))

const pikachu = {name: 'Pikachuuuuuuu'};
const stats = {height: 120, weight: 20, power:'strong'}

pikachu['height']= stats.height
pikachu['weight']= stats.weight
pikachu['power']= stats.power

const finalObject = {...pikachu, ...stats}

// console.log('-------PIKACHU NEW =>', pikachu , ' -------STATS => ', stats)
// console.log(finalObject)

//push data on an object fastly
const newObj = { story:'Born in argnetina', age: 22, ...pikachu,}
// console.log(newObj)


//LOOP
const order = [799, 899, 2000, 2143]
// const total = []
// const withTax = []
// const highValue = []

const total = order.reduce((acc,curr)=>acc+curr)
const withTax = order.map(v=>v*1.1)
const highValue = order.filter(v=> v >100)
console.log(total, withTax, highValue)
