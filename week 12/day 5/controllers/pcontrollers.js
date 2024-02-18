const {
    getProducts,
    getOneProducts,
    addProduct,
} = require('../models/pmodels.js')

const get_all_products = (req,res)=>{
    getProducts()
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            console.log(err)
            res.status(404).json({mesg: 'Not Found'})
        })
}

const get_one_product = (req,res)=>{
    const {name} = req.query
    getOneProducts(name)
    .then(data=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).json({mesg: 'Not Found'})
    })
}

const add_product = (req,res)=>{
    const { name , price , description} = req.body;
    addProduct(name,price,description)
    .then(data=>{
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).json({mesg: 'Not Found'})
    })
}


module.exports = {
    get_all_products,
    get_one_product,
    add_product,

}