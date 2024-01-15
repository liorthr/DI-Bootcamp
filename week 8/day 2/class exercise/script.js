// let arr1 = [1,2,5];
// //let arr2 = arr1;
// let arr2 = [...arr1]

// arr2[0]=29

// console.log(arr2)

// let arr3 = [
//     {name:"Shanna", age:20},
//     {name:"Rosa", age:45},
//     {name:"Mira", age:70},
//     {name:"Scetbon", age:40},
// ];
// let jsonArr = JSON.stringify(arr3);
// console.log(jsonArr)

// let say = function (name) {
//     alert("Hello " + name);
// }         
// say("Sarah");

// let askName = function(name){
//     name = prompt('Hey give me your name')
//     alert(`${name} is a realy bad name`)
// }
// askName("ahslkey")

function verify (name) {            // outer function  
    function isJohn() {             // inner function
        return name === "John";     // full access to argument        
    }
    if (isJohn()) {
        alert("Yep, this is John");
    }
}
verify("John");