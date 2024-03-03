import './App.css'
import User from './components/User'
import { useState } from 'react'
import AppClass from './AppClass'

function App() {

  const [username, setUsername] = useState('Jhon')
  

  return (
    <>
    <div>
      <input type="text" className='username' onChange={(e)=>{
        setUsername(e.target.value)
      }}/>
      <button onClick={
        (user)=>{
          console.log(`New user: ${user}`)
        }
      }>Change name</button>
    </div>
      <User 
      username={username}
      num={122} 
      yesno={true}
      posts = {[1,2,3]}
      handleClick = {()=>alert()}
      /> 
      <AppClass/>
    </>
  )
}

export default App
