import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";




const Product = (props) => {

    const [product, setProduct] = useState([]);
    const params = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        getInfo()
    },[])
    const getInfo = async() => {
        try{
            const res = await fetch(`${BASE_URL}/api/products/${params.id}`);
            const data = await res.json();
            console.log(data)
            setProduct(data)
        }catch (error){
            console.lof(error)
        }
    }

    const goToShop = () => {
        navigate('/')
    }

    return(
        <>
        <h2>Product</h2>
        {
            product.map(item=>{
                return(
                    <div key={item.id} style={
                        {
                            border: '5px solid blue',
                            borderRadius: '16px',
                            margin: '20px',
                            padding: '20px',
                        }
                    }>
                        <h1>{item.name}</h1>
                        <h3>{item.price}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })
        }
        <Link to='/'>Continue Shopping</Link>
        <div>
            <button onClick={()=>goToShop()}>Go Back to Shop</button>
        </div>
        </>
    )
}

export default Product;