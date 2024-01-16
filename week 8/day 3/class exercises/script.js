// function splitNumberToOneNUmber(){
//     let userNumberAnswer = 456789;
//     //let splitUserNumberAnswer = userNumberAnswer.toString().split('');
//     let finalDigits = userNumberAnswer.toString().split('').map(Number)
//     //console.log(finalDigits)
//     // if(finalDigits.length > 1){
//     //     console.log(finalDigits.reduce((a, b) => a + b, 0))
//     // }else{
//     //     console.log("finish")

//     // }
//     while (finalDigits.length > 1) {
//         finalDigits = finalDigits.reduce((a, b) => a + b).toString().split('').map(Number);
//     }

//     console.log(finalDigits[0]);
// }
// splitNumberToOneNUmber()

// * Create a function that get an array of Numbers as input
// * and return a new array with all numbers multiply by 2
// * For example:
// * Give this array [1,2,3,4]
// * result [2,4,6,8]

// function multiplyArrayByTwo(){
//     let arr = [1,2,5,18]
//     let arr2 = arr
//     arr2.forEach(element => {
//         element = element*2  
//     });
   
// }
// multiplyArrayByTwo()

// let users = ['jhon', 'salom', 'betta']
// let newArr = users.map((item,index)=>{
//     newArr.forEach((item) => {
//         item = item + "@gmail.com"    
//     });
// })
// console.log(newArr)

/** map */
// let arr = [1, 2, 3, 8];
// let newArr = arr.map((item, index) => {
//   if (item >= 3) return item * index;
// });
// let newArr = arr.map((item,index) => item * index);

// console.log(newArr);

/** Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers greater than 3
* For example:
* Give this array [0,1,1,2,3,5,8]
* result [5,8]*/

// function arrayGreaterThanTree(){
//     let arr = [0,1,1,2,3,5,8]
//     let newArr= []
//     newArr = arr.map(item => {
//         if(item > 3){
//             newArr.push(item)
//         }
        
//     })
//    return newArr
// }
// console.log(arrayGreaterThanTree())

// const arr = [
//     {id:1 ,name:'John', email:'jjj@gmail.com'},
//     {id:2 ,name:'Mor', email:'mmm@gmail.com'},
//     {id:3 ,name:'Marry', email:'marry@gmail.com'},
//     {id:4 ,name:'Or', email:'or@gmail.com'},
// ]

// let newArrOfName = []
// newArrOfName.forEach(name => {
//     newArrOfName.push(arr.name)
// });
// console.log(newArrOfName)

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
]

const newArr = employees.filter((item)=>{
    return item.age > 26
    
})
console.log(newArr)