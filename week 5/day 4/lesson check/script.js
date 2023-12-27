//const timerID = setTimeout(incrementByOne, 200)
// function incrementByOne(){
    //     counter++
    //     console.log(counter)
    // }
    // const intervalID = setInterval(function(){
        //     incrementByOne()
        //     // if (counter === 10){
            //     //     clearInterval(intervalID)
            //     //     console.log("Cleared")
            //     // }
            // }, 1000)
let counter = 0
    const timerID = setTimeout(function(){
    window.location.href = "https://google.com"
}, 5000)

const btnJs = document.getElementById("btn")
btnJs.addEventListener("click", function(){
    clearInterval(timerID)
    console.log("finsh")
})

