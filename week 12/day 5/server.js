const express = require('express')
const app = express()
// const {db} = require('./config/connexion.js')
const {router} = require('./routes/prouters.js')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
//display on html
app.use('/', express.static(__dirname + '/public'))

app.use(router)



app.listen(3001, ()=>{
    console.log('run on port 3001') 
})