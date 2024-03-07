import './App.css'
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import Menu from './components/Menu'

// export const BASE_URL = process.env.VITE_APP_BASE_URL
export const BASE_URL = import.meta.env.VITE_APP_BASE_URL
console.log(BASE_URL)

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/:id' element={<Product/>}/>
    </Routes>
     
    </>
  )
}

export default App
