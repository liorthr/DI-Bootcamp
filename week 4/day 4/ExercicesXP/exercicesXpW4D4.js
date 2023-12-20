//EX 1
//let divJs = document.querySelector("div")
//let namePeteToRichard = document.getElementsByClassName("list")
//console.log(namePeteToRichard[0].lastElementChild.textContent ) 
//namePeteToRichard[0].lastElementChild.textContent = "Richard"
//let deleteSarah = document.getElementsByClassName("list")
//let removeSarah = deleteSarah[1].firstElementChild.nextElementSibling.textContent.remove()
//let elementToRemoveTextFrom = deleteSarah[1].firstElementChild.nextElementSibling
//elementToRemoveTextFrom.textContent = ""
//console.log(deleteSarah[1].textContent)
//console.log(divJs) 
//4.
//let TwoUl = document.getElementsByClassName("list")
//let myName = "Lior"
//for (let i = 0; i < TwoUl.length; i++) {
    //let firstListItem = TwoUl[i].querySelector('li')
    //if (firstListItem) {
    // firstListItem.textContent = myName
    //}
  //}
  //console.log(document.getElementById('container').innerHTML)

//Bonus
//1
//const bonus = document.querySelectorAll("ul")
//bonus[0].setAttribute("class", "student_list")
//bonus[1].setAttribute("class", "student_list")
//console.log(bonus)
//2
//Don't understand the question 



//EX 2 

// let divJs = document.querySelector("div")
// //console.log(divJs)
// divJs.style.backgroundColor = "blue" // light blue dosn't work then i use blue
// //2.
// let firstliJs = document.querySelector("ul")
// let JhonInHtml = firstliJs.firstElementChild
// JhonInHtml.style.display = "none"
// //3.
// let PeteInHtml = firstliJs.lastElementChild
// PeteInHtml.style.border = "2px solid black"
// //4.
// let bodyJs = document.querySelector("body")
// bodyJs.style.fontSize = " 20px "
// //Bonus
// if(divJs.getAttribute("style") === "background-color: blue;"){
//     alert("hello jhon and pete")
// }


//EX 3
//2
let divJs = document.getElementById("navBar")
divJs.setAttribute("id", "socialNetworkNavigation")
console.log(divJs)

//3