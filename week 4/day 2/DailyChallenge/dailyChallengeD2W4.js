let userWord = prompt("Write a list of word with a comma between each word")
let arrOfUserWord = userWord.split(',').map(word => word.trim())
console.log(arrOfUserWord)

for(let x of arrOfUserWord){
    arrOfUserWord[x] = " * " + arrOfUserWord + " * "
}
console.log(arrOfUserWord)