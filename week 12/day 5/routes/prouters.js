const express = require('express')
const router = express.Router()
const {
    get_all_products,
    get_one_product,
    add_product,
} = require('../controllers/pcontrollers.js')

router.get('/all', get_all_products)
router.get('/search', get_one_product)
router.post('/addNewProduct', add_product)

module.exports = {
    router,
}