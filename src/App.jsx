import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    axios.get('192.168.155.6:3001/produtos/lista')
    .then(response => setProductData(response))
  },[])

  console.log(productData)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Outlet/>  
    </>
  )
}

export default App
