// const arr = [1,2,2,3,5,8,9,2,10]

// const result = function onlyNumberGreaterThanFive(){
//     let arr2 = []
//     for(let number of arr){
//         if (number>=5){
//             arr2.push(number)
//         }
//     }
//     return arr2
// }
// console.log(result(arr))

/* Filter */
const peopleArray = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Chorlie", email: "charlie@example.com" },
    { id: 4, name: "Oavid", email: "david@example.com" }
];
/*names includes 'o'*/

const newArr = peopleArray.filter((item)=>{
    const oJs = 'o' 
    if(item.name.includes(oJs)){
        return item 
    }
})
console.log(newArr)

