//Exercise 1

// function compareToTen(num){
//     return new Promise((resolve, reject) => {
//         if(num <= 10){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }

// console.log(compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error)))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//Exercise 2

// const prom = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("success")
//     },4000)
// })
// console.log(prom)

//Exercise 3

//Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// const prom2 = new Promise((resolve, reject) => {
//     resolve(
//         return 3
//     )
//     reject(console.error();)
// })


//Test Async

// function getWeather(){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             resolve("Hey ca marche")
//         })
//     })
// }
// const p = getWeather()
// p.then(data=>{
//     console.log(data)
// })


// function getWeather(){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             reject("Hey ca marche")
//         })
//     })
// }

// function onSucces(data){
//     console.log(`Success ${data}`)
// }
// function onError(e){
//     console.log(`Èrror ${e}`)
// }
// getWeather().then(onSucces,onError)







