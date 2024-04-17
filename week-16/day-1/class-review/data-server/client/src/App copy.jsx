import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [msg, setMsg] = useState('')
  const [input, setInput] = useState('')

  useEffect(()=>{
    getMessageFromServer()
  },[])

  const getMessageFromServer = async() => {
    try{
      const res = await fetch('http://localhost:3001/api/hello')
      const message = await res.json()
      setMsg(message.message)
    }catch(error){
      console.log(error)
    }
  }
const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:3001/api/world',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({input})
  })
  .then((res)=>res.json())
  .then((data)=>{
    setMsg(data.message)
  })
  .catch((err)=>{
    console.log(err)
  })
}
  return (
    <>
    <div>
      <h2>{msg}</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setInput(e.target.value)}/>
      </form>
    </div>
      
    </>
  )
}

export default App
