import { useState, useRef} from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  // const [name,setName] = useState('Leonardo')
  const nameRef = useRef('Tommy ')
  console.log("NameRef =>", nameRef)

let name = 'Anduardo'

  // const changeName = () => {
  //   name= 'Paticaloca',
  //   consol.log("name=> ", name)
  // }

  const changeTommy = () =>{
    nameRef.current = 'Omer Adam'
    console.log("nameRef=>", nameRef.current)
  } 
  return (
    <>
      <h2>useRef HOOK</h2>
      <button onClick={()=> setCount(count + 1)}>+ {count}</button>
      <div>
        {/* <h2>{name}</h2> */}
        <h2>{nameRef.current}</h2>
        {/* <button onClick={()=>setName('Polo')}>Change the name</button> */}
        <button onClick={()=>changeTommy()}>Change the name</button>
      </div>
    </>
  )
}

export default App
