import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import ModalDelete from './ComponentsAdmin/ModalDelete/indes'
import ModalEditUSer from './ComponentsAdmin/ModalUserEdit'
import MenuLateral from './ComponentsAdmin/MenuLateral'
import { AdminContextProvider } from './Contexts/AdminContext'
import { MenuContextProvider } from './Contexts/MenuContext'
import ModalNewProduct from './ComponentsAdmin/ModalNewProduct'
import ModalDeleteProduct from './Components/ModalDeleteProduct'
import ModalHistoric from './Components/ModalHistoric'



function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    axios.get('192.168.155.6:3001/produtos/lista')
    .then(response => setProductData(response))
  },[])

  console.log(productData)

  return (
    <>
      <AdminContextProvider>
        <MenuContextProvider>
          <ModalDelete />
          <ModalEditUSer />
          <ModalNewProduct />
          <ModalDeleteProduct />
          <MenuLateral />
          <ModalHistoric />
          <Outlet/>  
        </MenuContextProvider>
      </AdminContextProvider>
    </>
  )
}

export default App
