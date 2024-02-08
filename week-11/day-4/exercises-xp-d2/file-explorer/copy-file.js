const fs = require("node:fs")

const documentContent = fs.readFileSync("./source.txt","utf-8")

console.log(documentContent)

fs.writeFileSync("./destination.txt",`${documentContent}`)