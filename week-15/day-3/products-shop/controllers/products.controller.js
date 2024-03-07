const {
    _getAllProducts,
    _getProductById,
    _addNewProduct,
} = require('../models/products.model.js')

const getAllProducts = async (req,res)=>{
    try{
        const data = await _getAllProducts()
        res.json(data)
    }catch (error){
        console.log(error)
        res.status(404).json({msg: error.message})
    }
}

const getProductById = async (req,res)=>{
    try{
        const {id} = req.params
        const data = await _getProductById(id)
        res.json(data)
    }catch (error){
        console.log(error)
        res.status(404).json({msg: error.message})
    }
}

// const addNewProduct = async (req,res)=>{
//     const {
//         name, 
//         price,
//         description,
//     }= req.body
//     _addNewProduct(
//         name, 
//         price,
//         description,
//         )
//         .then(data=>{
//             res.json(data)
//         })
//         .catch((err)=>{
//             console.log(err)
//             res.status(404).json({mesg: 'product not Found'})
//         }) 
// }
const addNewProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            description,
        } = req.body;

        const data = await _addNewProduct(name, price, description);
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Product not found' });
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
}