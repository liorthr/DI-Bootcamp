const nameJs = document.getElementById("name")
const passwordJs = document.getElementById("password")
const formJs = document.getElementById("form")
const errorElement = document.getElementById("error")

formJs.addEventListener("submit", (e)=>{
    let messages = []
    if (nameJs.value === "" || nameJs.value == null) {
        messages.push("Name is required")
    }
    if (passwordJs.value.length <= 6) {
        messages.push("Mdp plus que 6 carcateres")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})