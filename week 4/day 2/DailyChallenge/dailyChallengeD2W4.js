

let userWord = prompt("Write a list of words with a comma between each word");
let arrOfUserWord = userWord.split(',').map(word => word.trim());
//console.log(arrOfUserWord);
let star = isNaN("*") * arrOfUserWord.length
console.log(star)

//
for (let i = 0; i < arrOfUserWord.length; i++) {
    arrOfUserWord[i] = " *   " + arrOfUserWord[i] + "   * ";
}

arrOfUserWord.forEach(word => {
    console.log(word);
});
//console.log(arrOfUserWord);
console.log(star)

//At the top its what i try to fix