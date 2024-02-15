const {products} = require('../config/db.js');
const {_getAllProducts} = require('../models/products.models.js')

const getAllProducts = (req,res)=>{
    _getAllProducts()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err);
    })
}