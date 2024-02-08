const fs = require("node:fs"); 

function readFile(){
    fs.readFileSync("./Hello World.txt","utf-8")
}  
function writeFile(){
    fs.writeFileSync("./Bye World.txt","Writing to the file")
}

module.exports = {
    readFile,
    writeFile,
}