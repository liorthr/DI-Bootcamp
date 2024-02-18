function sendInformations() {
    let nameInput = document.getElementById("name-input").value;
    let priceInput = document.getElementById("price-input").value;

    console.log(nameInput, priceInput);
}


fetch('http://localhost:3001/all')
.then(res=> res.json())
.then(data=>{
    console.log(data)
    displayProductsInformations(data)
})
.catch((err)=>{
    console.log(err)
})


function displayProductsInformations(data){
    let listofProductsContainer = document.getElementById("list-of-products");
    listofProductsContainer.innerHTML = '';
    data.forEach(product => {
        let productElement = document.createElement('div')

        let imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.classList.add('image')

        // Append the image to the product element
        productElement.appendChild(imageElement);

        productElement.textContent = `
        
        Name: ${product.name} 
        Price: ${product.price} 
        Description: ${product.description}
        `
        productElement.classList.add('product');


        listofProductsContainer.appendChild(productElement)
    });
}
