const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const todos = require('./data/dataToDo.js')
const router = require('./routes/todos.js');

app.use(bodyParser.json());
app.use(router)

//get all to-do items
// Add a new to-do item
// Update a to-do item by ID
// Delete a to-do item by ID

app.listen(3001, ()=>{console.log("notre applicatio tourne sur le port 3001")})