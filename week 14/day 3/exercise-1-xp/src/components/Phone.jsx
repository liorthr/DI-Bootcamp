import { useState } from "react"

const Phone = () => {
    const [brand, setBrand] = useState("Samsung")
    const [model, setModel] = useState("Galaxy 20")
    const [color, setColor] = useState("black")
    const [year, setYear] = useState(2020)

const ChangeColor = () => {
    setColor("blue")
}

    return(
        <>
        <h1>My phone is a {brand}</h1>
        <h3>It is {color} {model} from {year}</h3> 
        <button onClick={ChangeColor}>Change color</button>    
        </>
    )
}

export default Phone