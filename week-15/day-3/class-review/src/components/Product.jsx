import { useParams, Link, useNavigate} from "react-router-dom"

const Product = (props) => {

const params = useParams()

const navigate = useNavigate()

const goBack = () => {
    navigate('/about')
}

    return(
        <>
        <h3>iPhone</h3>
        <Link to='/shop'> Go back to Shop</Link>
        <button onClick={()=>goBack()}>About us</button>
        </>
    )
}

export default Product