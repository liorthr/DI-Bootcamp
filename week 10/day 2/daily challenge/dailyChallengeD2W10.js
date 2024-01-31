const arrayOfWord = ["tomatoes", "apple", "ginger"]

function makeAllCaps(array){
    return new Promise((resolve, reject) => {
        for(let i=0; i<array.length; i++){
            if(typeof array[i]!=="string"){
                reject("There are no or not only string in this array")
            }
        }
        resolve("All elements are string type")
    })
}

makeAllCaps(arrayOfWord) 
    .then(res => console.log(res))
    .then(error => console.log(error))



    
function sortWords(array){
    return new Promise((resolve, reject) => {
        
    })
}