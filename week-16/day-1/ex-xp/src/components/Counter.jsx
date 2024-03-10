import { useState } from "react"
const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    return(
        <>
        <h2>Count: {counter}</h2>
        <button onClick={()=> {
            setCounter(counter+1)
            console.log(counter)
            }}>Click to Add 1</button>


        </>
    )
}

export default Counter;