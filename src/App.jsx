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
import Alert from './Components/Alert'
import ModalNewUser from './ComponentsAdmin/ModalNewUser'
import { AuthenticateContextProvider } from './Contexts/Authenticate'
import ProtectedComponent from './Pages/ProtectedComponent'



function App() {
  const [productData, setProductData] = useState([])


  useEffect(() => {
    axios.get('192.168.155.6:3001/produtos/lista')
    .then(response => setProductData(response))
  },[])

  console.log(productData)

  return (
    <>
      <AuthenticateContextProvider>
        <AdminContextProvider>
          <MenuContextProvider>
            <MenuLateral />
            <ProtectedComponent>
              <Outlet/>  
            </ProtectedComponent>
            <ModalEditUSer />
            <ModalDeleteProduct />
            <ModalHistoric />
          </MenuContextProvider>
        </AdminContextProvider>
      </AuthenticateContextProvider>
    </>
  )
}

export default App
