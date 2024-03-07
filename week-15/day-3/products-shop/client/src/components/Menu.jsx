import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <>
        <header>
            <nav>
                <Link to='/'>Shop</Link> {" "}
                <Link to='/contact'>Conatct</Link>
            </nav>
        </header>
        </>
    )
};

export default Menu;