import { useState } from "react"
import Switch from '@mui/material/Switch';

const Event = () => {
    const clickMe = () =>{
        alert('I was clicked')
    }
    const handleKeyDown = () => {
        const valueInput = document.querySelector('input').value
        alert(`The enter key was pressed, your input is: ${valueInput}`)
    }
    const [isToggleOn, setisToggleOn]= useState(true)

    const toggleSwitch = () => {
        setisToggleOn(!isToggleOn);
    }

    const onOrOffText = isToggleOn ? 'ON' : 'OFF';
    return (

        <>
            <h1 style={
                {
                    border: "1px solid white",
                    margin: "20px",
                    padding: "20px",
                }
            }>{onOrOffText}</h1>
            <button onClick={toggleSwitch}>Change to {isToggleOn ? 'off' : 'on'}</button>
            <button onClick={clickMe}>Appear Alert</button>
            <input type="text" onKeyDown={handleKeyDown}/>
        </>
    )
}

export default Event 