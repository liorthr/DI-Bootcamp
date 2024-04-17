const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`)
})


app.get('/api/hello', (req,res)=>{
    res.json({message: 'Hello From Express'})
})

app.post('/api/world', (req,res)=>{
    const {input} = req.body;
    res.json({
        message: `I received you POST request: ${input}`,
    })
})