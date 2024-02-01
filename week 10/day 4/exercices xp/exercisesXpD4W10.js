//test api 
// const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'db968b2843msha045305651672a8p106c75jsnf87bf1c8c53c',
// 		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
// 	}
// };
// async function fetchData(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// fetchData()

// let body = document.getElementById("body")
// let fnammeJs = document.getElementById("fname")
// let snameJs = document.getElementById("sname")
// let percentageJs = document.getElementById("percentage")
// let resultJs = document.getElementById("result")



// console.log(JSON.parse(fetchData()))


//Exercise 1

// async function displayProg(){
//     try{
//     const r = await 
//     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", {
//         method: "GET",       
//     })
//     return r.json()
//     } catch(error){
//         console.log(error)
//     } 
// }
// displayProg()
//     .then(res=>{
//         console.log(res)
//     })
//     .catch(error=>{
//         console.log(error)
//     })


//Exercise 2

async function displayGif(){
        try{
        const r = await 
        fetch("api.giphy.com/v1/gifs/translate	", {
            method: "GET",       
        })
        return r.json()
        } catch(error){
            console.log(error)
        } 
    }
displayGif()
.then(res=>{
            console.log(res)
   })
        .catch(error=>{
            console.log(error)
       
    })

