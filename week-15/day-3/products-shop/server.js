const express = require('express');
const cors = require('cors');
const router = require('./routes/products.router.js')


const app = express()
app.use(cors())
app.use(express.json());


app.listen(process.env.PORT|| 3001, ()=>{
    console.log(`run on port ${process.env.PORT|| 3001}`)
})

app.use('/api/products', router);