const products = require('./products');

function searchObj(name) {
    const product = products.find(product => product.name === name);
    
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}

searchObj('Lap');
