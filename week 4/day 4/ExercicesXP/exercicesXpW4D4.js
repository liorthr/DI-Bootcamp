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
// let divJs = document.getElementById("navBar")
// divJs.setAttribute("id", "socialNetworkNavigation")
// console.log(divJs)

// //3
// const liJs = document.createElement("li")
// liJs.innerHTML = "Logout"
// document.querySelector("ul").appendChild(liJs)


// //4
// let firstAndLastChild = document.querySelector("ul")
// console.log(firstAndLastChild.firstElementChild.textContent)
// console.log(firstAndLastChild.lastElementChild.textContent)









//EX 4
// let allBooks = [
//   {
//     title: "La princess de Clèves",
//     author: "anonymus",
//     image: "URL",
//     alreadyRead: true
//   },
//   {
//     title: "Tanya",
//     author: "Rabbi Schneor Zalman",
//     image: "URL",
//     alreadyRead: true
//   }
// ]
// let table = document.createElement("table");
// let row = document.createElement("tr");
// let cell = document.createElement("td");
// let div = document.createElement("div");
// div.textContent = "This is a div inside a table cell.";
// cell.appendChild("div");
// row.appendChild(cell);
// table.appendChild(row);

// const ulJS = document.querySelector("div")
// // ulJS.innerText = allBooks
// // document.getElementById(".listBooks").appendChild(ulJS)
// let table = document.createElement("table");
// // let tr = document.createElement("tr");
// // tr.innerHTML = "<th>Title</th><th>Author</th><th>Image</th><th>Read</th>";
// table.appendChild(ulJS);

//test
let allBooks = [
  {
    title: "La princess de Clèves",
    author: "anonymus",
    image: "URL",
    alreadyRead: true
  },
  {
    title: "Tanya",
    author: "Rabbi Schneor Zalman",
    image: "URL",
    alreadyRead: true
  }
];


let table = document.createElement("table");

allBooks.forEach((book) => {
  let row = document.createElement("tr");
  let titleCell = document.createElement("td");
  titleCell.textContent = book.title;
  let authorCell = document.createElement("td");
  authorCell.textContent = book.author;
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  table.appendChild(row);
});

document.body.appendChild(table);
