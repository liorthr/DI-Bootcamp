const path = require("path")
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>{
    console.log(`listen on port ${PORT}`)
})
