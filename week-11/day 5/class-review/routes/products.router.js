const express=  require('express');
const { products } = require('../config/db.js');

const router = express.Router();


router.get('/api', (req,res)=>{
    const newproduct = products.map(item=>{
        return{id:item.id, name:item.name}
    })
    
    res.json(products)
});



module.exports = router;






