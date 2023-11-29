import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import ModalDelete from './ComponentsAdmin/ModalDelete/indes'
import { styled } from 'styled-components'
import ModalEditUSer from './ComponentsAdmin/ModalUserEdit'
import MenuLateral from './ComponentsAdmin/MenuLateral'



function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    axios.get('192.168.155.6:3001/produtos/lista')
    .then(response => setProductData(response))
  },[])

  console.log(productData)

  return (
    <>
      <ModalDelete />
      <ModalEditUSer />
      <MenuLateral />
      <Outlet/>  
      </>
  )
}

export default App
