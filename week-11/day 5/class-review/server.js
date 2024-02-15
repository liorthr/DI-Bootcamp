const express = require('express');
const bp = require('body-parser')
const { products } = require('./config/db.js');
const user_router = require('./routes/products.router.js')

const app = express()

app.use(user_router)

app.use(bp.urlencoded({extented:true}));
app.use(bp.json())

app.listen(3001);

app.get('/api', (req,res)=>{
    const newproduct = products.map(item=>{
        return{id:item.id, name:item.name}
    })

    res.json(products)
});

app.get('/api/search', (req,res)=>{
    console.log(req.query)
    const {name}=req.query
    const product = products.find((item)=>item.name==name)
    if(!product){
        res.status(404).json({msg:"product not found"})
    }
    res.json(products)
})

app.post('/api/products', (req,res)=>{
    console.log(req.body)
    // const answer = req.body
    // products.push(answer)
const {name,price} = req.body

const newProduct = {
    id: products.length+1,
    name,
    price,
}

products.push(newProduct)
res.json(products)
})

// app.put('/api/products/:id', (req,res)=>{
//     const {id} = req.params;
//     const {name,price} = req.body;

//     const index = products.findIndex(item => item.id == id);

//     products[index] = {...products[index], name , price};
//     res.json(products);
// })

app.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params

    const indx = products.findIndex((item)=>item.id ==id);
    if(indx === -1) return res.sendStatus(404);

    products.slice(indx,1);
    res.json(products)
})