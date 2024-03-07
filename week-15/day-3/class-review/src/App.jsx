import './App.css'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
// import {Routes, Route, Link } from 'react-router-dom'
import Product from './components/Product'
import { Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Root = () => {
  return(
    <>
    <h2>Root</h2>
    <Link to='/'>Home</Link> {" "}
    <Link to='/about'>About</Link> {" "}
    <Link to='/shop'>Shop</Link> {" "}

    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/product.:productID',
        element: <Product/>
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App


/**
 * function App() {

  return (
    <>
    <div>
      <nav>
        <Link to='/'>Home</Link> {"  "}
        <Link to='/about'>About</Link> {"  "}
        <Link to='/shop'>Shop</Link> 
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='*' element={<h2>404 Not Found</h2>}/>
    </Routes>

      
    </>
  )
}
 * 
 */