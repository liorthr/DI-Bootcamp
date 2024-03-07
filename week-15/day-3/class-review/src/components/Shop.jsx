import Product from "./Product";
import { Link } from "react-router-dom";
import { useState } from "react";


const items = [
    {id: 15, name: "iPhone 15"},
    {id: 8, name: "iPad 8 + "},
    {id: 2, name: "Apple Ultra Watch 2"},
]
const Shop = () => {
    const [products, setProducts] = useState(items)
    return(
        <>
        <h2>Shop</h2>
        {
            products.map(item=> {
                return(
                    <>
                    <Link to='/product/${item.i}'>{item.name} {" OR "}</Link>
                    </>
                )
            })
        }
        </>
    )
}

export default Shop;