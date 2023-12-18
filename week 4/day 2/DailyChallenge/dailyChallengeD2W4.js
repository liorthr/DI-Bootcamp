let userWord = prompt("Write a list of word with a comma between each word")
let arrOfUserWord = userWord.split(',').map(word => word.trim())
console.log(arrOfUserWord)