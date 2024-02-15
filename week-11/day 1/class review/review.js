// const url = "https://users-18kl.onrender.com/usersjson"

// fetch(url)
//     .then((res) => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(` ERROR: ${error.message}`))

const URL = "https://users-18kl.onrender.com/userjson"
function addUser(){
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
    })
    .then(res=>res.json())
    .then(data=>{
        const name = "Lior"
        const username = "liorthr"
        const email = "liorthr@gmail.com"
        let bodyJs = document.querySelector("body")
        bodyJs.append(name,username,email)
    })
}
addUser()