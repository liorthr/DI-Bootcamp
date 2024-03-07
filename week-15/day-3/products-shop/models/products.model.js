const {db} = require('../config/db.js')

const _getAllProducts = () => {
    return db('products')
    .select('id','name', 'price')
}

const _getProductById = (id) => {
    return db('products')
    .select('*')
    .where({id})

}

const _addNewProduct = (
    productName,
    productPrice, 
    productDescription,
) =>{
    return db('products')
    .insert({
        name: productName,
        price: productPrice,
        description: productDescription,
    }, ['*'])
}

const _deleteProduct =



module.exports = {
    _getAllProducts,
    _getProductById,
    _addNewProduct

}