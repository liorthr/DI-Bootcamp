const fs = require("node:fs")

fs.readdir("../file-explorer",(err,files)=>{
    if(err){
        return `Sorry but error : ${err}`
    }
    files.forEach(file => {
        console.log(file)
    });
})