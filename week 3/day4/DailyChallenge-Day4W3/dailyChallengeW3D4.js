let sentence = "The food is not very bad, I like it "
let wordNot = sentence.substring(12 , 15)
let wordBad = sentence.substring(21, 24)
/*console.log(wordNot)
console.log(wordBad) */

let positionWordNot = sentence.indexOf("not")
let positionWordBad = sentence.indexOf("bad")
let positonLastWord = sentence.charAt(sentence.length - 1)
/*console.log(positionWordNot)
console.log(positionWordBad)*/
let removeWholePart = sentence.substring(positionWordNot, (positionWordBad+ 3))
if (positionWordBad > positionWordNot){
    removeWholePart = "good"
    console.log(sentence.substring(0,positionWordNot)+ removeWholePart + sentence.substring((positionWordBad + 3),) )
}else{
    console.log(sentence)
}
