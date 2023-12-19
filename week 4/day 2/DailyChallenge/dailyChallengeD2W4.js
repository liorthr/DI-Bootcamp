
/*
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
*/
//At the top its what i try to fix
function printRectangularFrame(words) {
    let maxLength = 0;
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // We use the lenghth of the biggest word 
    const delimiterStarTopBottom = "*".repeat(maxLength + 4)
    console.log(delimiterStarTopBottom);

    // ChatGPT
    for (let word of words) {
        console.log(`* ${word}${' '.repeat(maxLength - word.length)} *`);
    }

    console.log(delimiterStarTopBottom);
}

let userInput = prompt("Enter several words separated by commas:");
let wordsArray = userInput.split(',').map(word => word.trim());

printRectangularFrame(wordsArray);
