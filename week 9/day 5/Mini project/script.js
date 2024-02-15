// const robots = [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       image: 'https://robohash.org/1?200x200'
//     },
//     {
//       id: 2,
//       name: 'Ervin Howell',
//       username: 'Antonette',
//       email: 'Shanna@melissa.tv',
//       image: 'https://robohash.org/2?200x200'
//     },
//     {
//       id: 3,
//       name: 'Clementine Bauch',
//       username: 'Samantha',
//       email: 'Nathan@yesenia.net',
//       image: 'https://robohash.org/3?200x200'
//     },
//     {
//       id: 4,
//       name: 'Patricia Lebsack',
//       username: 'Karianne',
//       email: 'Julianne.OConner@kory.org',
//       image: 'https://robohash.org/4?200x200'
//     },
//     {
//       id: 5,
//       name: 'Chelsey Dietrich',
//       username: 'Kamren',
//       email: 'Lucio_Hettinger@annie.ca',
//       image: 'https://robohash.org/5?200x200'
//     },
//     {
//       id: 6,
//       name: 'Mrs. Dennis Schulist',
//       username: 'Leopoldo_Corkery',
//       email: 'Karley_Dach@jasper.info',
//       image: 'https://robohash.org/6?200x200'
//     },
//     {
//       id: 7,
//       name: 'Kurtis Weissnat',
//       username: 'Elwyn.Skiles',
//       email: 'Telly.Hoeger@billy.biz',
//       image: 'https://robohash.org/7?200x200'
//     },
//     {
//       id: 8,
//       name: 'Nicholas Runolfsdottir V',
//       username: 'Maxime_Nienow',
//       email: 'Sherwood@rosamond.me',
//       image: 'https://robohash.org/8?200x200'
//     },
//     {
//       id: 9,
//       name: 'Glenna Reichert',
//       username: 'Delphine',
//       email: 'Chaim_McDermott@dana.io',
//       image:'https://robohash.org/9?200x200'
//     },
//     {
//       id: 10,
//       name: 'Clementina DuBuque',
//       username: 'Moriah.Stanton',
//       email: 'Rey.Padberg@karina.biz',
//       image:'https://robohash.org/10?200x200'
//     }
//     ];

const userCardTemplate = document.querySelector("template")
const userCardContainer = document.querySelector("card")

fetch('./robots.json')
 .then(res=>res.json())
 .then(data=>{
    data.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("header")
        const body = card.querySelector("body")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.appendChild(card)
    });
})















// let bodyJs = document.querySelector("body")
// let searchBar = document.getElementById("search-bar")
// let btnSearch = document.getElementById("btn-search")
// let idOne = document.getElementById("id-1")
// let idTwo = document.getElementById("id-2")
// let idTree = document.getElementById("id-3")
// let idFor = document.getElementById("id-4")
// let idFive = document.getElementById("id-5")
// let idSix = document.getElementById("id-6")
// let idSeven = document.getElementById("id-7")
// let idHeight = document.getElementById("id-8")
// let idNine = document.getElementById("id-9")
// let idTen = document.getElementById("id-10")

// let nameOne = document.getElementById("1-name")

// function searchCard(){
//     var x = document.getElementById("search-bar")
//     if(x === nameOne){
//         window(bodyJs.appendChild(idOne))
//     }
// }