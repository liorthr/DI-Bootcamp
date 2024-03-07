import { useContext } from "react"
import { AppContext } from "../App"


const TestContext = ()=>{

    const { count, setCount } = useContext(AppContext)

    return(
        <>
        <h2>Context example</h2>
        {count}
        <button onClick={()=>setCount(count+1)}></button>
        </>
    )
}
export default TestContext