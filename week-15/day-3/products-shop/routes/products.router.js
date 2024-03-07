const express = require('express')
const { 
    getAllProducts,
    getProductById,
    addNewProduct,

} = require('../controllers/products.controller.js')


const router = express.Router()

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/addNewProduct', addNewProduct)

module.exports = router