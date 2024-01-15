// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
//1(predict): inside the funcOne function 3
// #1.1 - run in the console:
//funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?: inside the funcOne function 5

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?: 
//first: inside the funcThree function 0
//second: inside the funcThree function 0



//#3
// function funcFour() {
//     window.b = "hello";
// }
// function funcFive() {
//     alert(`inside the funcFive function ${b}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()

//#4
// const a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?: nothinh change

//#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? : outside call and not the in


// ----------------------------------------------------
// let tiret200 = "";
// for(let i= 0; i<2000; i++){
//     tiret200 += "-"
// }
// let bodyJs = document.querySelector("body")
// let HtmlTiret200 = document.createElement("p")
// HtmlTiret200.textContent = tiret200
// bodyJs.appendChild(HtmlTiret200)

// ----------------------------------------------------


//EXERCISE 2
// function winBattle(){
//     return true;
// }
// //1
// ()=>{
//     return true;
// }
// //2
// let experiencePoints;
// //3
// if(winBattle()=== true){
//     experiencePoints = 10
// }else{
//     experiencePoints = 1
// }
// //4
// console.log(experiencePoints)

// ----------------------------------------------------

//EXERCISE 3

// let checkValueArgument = (argument) => {
//     if(argument.isString){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// checkValueArgument("pomme")

// ----------------------------------------------------

//EXERCISE 4
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//1 & 2
// function displayColors() {
//     let count = 0
//     colors.forEach(element => {
//         count++
//         console.log(`${count}# choice is ${element}`)
//     });

//     function checkIfThereIsAVAlueViolet(color){
//         if(color === "Violet"){
//             console.log("Yeah")
//         }else{
//             console.log("No")
//         }
//     }
//     colors.forEach(checkIfThereIsAVAlueViolet)
    
   
// }
// displayColors()

// ----------------------------------------------------

//EXERCISE 5

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

