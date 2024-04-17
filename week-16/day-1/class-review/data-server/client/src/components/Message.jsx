import { useContext } from "react"
import { ThemeContext } from "../AppContext"
import InputMessage from "./InputMessage"


const Message = () => {

    const {msg} = useContext(ThemeContext)
    return(
        <>
        <h1>{msg}</h1>
        <InputMessage/>
        </>
    )
}

export default Message

