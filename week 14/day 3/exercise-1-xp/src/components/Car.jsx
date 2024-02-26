import App from "../App"
import { useState } from "react"


const Car = (props) =>{
    const [color, setColor] = useState('black')
    const changeColor = () => {
        setColor('blue')
    }
    const carinfo = props.carinfo

    return(
        <>
        <header>
            This car is {carinfo.model} {" "}
            This color is {color} {carinfo.model}
            <button onClick={changeColor}>Change color to blue</button>
        </header>
        </>
    )
}

export default Car