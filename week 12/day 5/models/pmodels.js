const {db} = require('../config/connexion.js')

const getProducts = ()=>{
    return db('products').select('*')
}
const getOneProducts = (name)=>{
    // const nameProduct = req.params.name
    return db('products').select('*').whereILike('name',  `%${name}%`)
}
const addProduct = (productName, productPrice, productDescription)=>{
    return db('products')
    .insert({
        name: productName,
        price: productPrice,
        description: productDescription,
    },['*']);

}

module.exports = {
    getProducts,
    getOneProducts,
    addProduct,
}