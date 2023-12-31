let squareColor = document.querySelectorAll(".square")
squareColor.forEach(square =>{
    square.addEventListener("click", ()=>{
        // console.log("You clicked on : " + square.style.backgroundColor)
        let computedColor = window.getComputedStyle(square).getPropertyValue("background-color");
        console.log("You clicked on: " + computedColor);
    })
})

let btnClear = document.getElementById("btn-clear")
btnClear.addEventListener("click", () => {
    console.log("clear all")
})



document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("right-container");

    const gridSize = 16;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        gridContainer.appendChild(cell);

        // cell.addEventListener("mouseover", function() {
        //     cell.style.backgroundColor = "black";
        // });
        cell.addEventListener("click", function() {
            cell.style.backgroundColor = "black";
        });
    }
});







// function playWithColor(){
//     let squareColor = document.querySelectorAll(".square")
//     squareColor.forEach(square =>{
//     square.addEventListener("click", ()=>{
//         // console.log("You clicked on : " + square.style.backgroundColor)
//         let computedColor = window.getComputedStyle(square).getPropertyValue("background-color");
//         console.log("You clicked on: " + computedColor);
//     })
// }) 
// if
// }