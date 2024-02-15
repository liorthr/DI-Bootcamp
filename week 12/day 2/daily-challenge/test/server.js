const express = require('express')
const app = express()
const path = require('path'); 
// const {users} = require('./data/myData')
const bodyParser = require('body-parser')
const users_router = require('./routes/users.router.js')

app.listen(3001, ()=>{console.log("notre applicatio tourne sur le port 3001")})
app.use(bodyParser.json());

app.use(users_router)



            
            
            