let squareColor = document.querySelectorAll(".square")
squareColor.forEach(square =>{
    square.addEventListener("click", ()=>{
        console.log("You clicked on : " + square.textContent)
    })
})
