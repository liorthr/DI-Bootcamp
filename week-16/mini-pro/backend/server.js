const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/routers.js')

const app = espress()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api', taskRoutes)

app.listen(3001, ()=>{
    console.log(`run on port 3001`)
})