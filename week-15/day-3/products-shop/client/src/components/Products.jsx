import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../App";

const Products = (props) => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        allProducts()
    }, [])
    const allProducts = async() => {
        try{
            const res = await fetch(`${BASE_URL}/api/products`);
            const data = await res.json();
            console.log(data)
            setProducts(data)
        }catch (error){
            console.lof(error)
        }
    }


    return(
        <>
        <h2>Shop</h2>
        {
            products.map(item=>{
                return(
                    <div key={item.id} style={
                        {
                            border: '1px solid white',
                            borderRadius: '16px',
                            backgroundColor: 'blueviolet',
                            margin:'20px',
                            padding:'20px'
                        }
                    }>
                        <h2>{item.name}</h2>
                        <h3 style={
                            {
                                border: '3px solid blue',
                                backgroundColor: 'orange',
                                color: 'green',  
                            }
                        }>{item.price}$</h3>
                        <Link to={`/${item.id}`}>Buy Now</Link>

                    </div>
                )
            })
        }
        </>
    )
}

export default Products;