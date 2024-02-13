const express = require('express')
const app = express()
app.listen(3001, ()=>{
    console.log("connexion réussie")
})
const index = require("./routes/index.js") ;
const router = require('./routes/index.js')
