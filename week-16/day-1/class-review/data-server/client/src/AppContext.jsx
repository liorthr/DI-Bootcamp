import { useState, useEffect, createContext } from 'react'
import Message from './components/Message'
import './App.css'


export const ThemeContext = createContext()
console.log(ThemeContext)

function App() {
  const [msg, setMsg] = useState('Jhon Doe')
  return (
    <>
      <h2>useContext Hook</h2>
      <ThemeContext.Provider value={{msg}}>
         <Message/>
      </ThemeContext.Provider>
      <input onChange={(e)=>setMsg(e.target.value)}/>
    </>
  )
}

export default App
