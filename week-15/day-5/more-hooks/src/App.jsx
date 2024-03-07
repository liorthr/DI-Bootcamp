import './App.css'
import { useState, createContext} from 'react'
// import Display from './components/Display'
// import Action from './components/Action'
import TestContext from './components/TestContext'

export const AppContext = createContext()


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppContext.Provider value={{count, setCount}}>
      <TestContext/>
    </AppContext.Provider>

      {/* <Display countApp={count}/> */}
      {/* <Action countAppButton={count} setCountApp={setCount}/> */}
    </>
  )
}

export default App
