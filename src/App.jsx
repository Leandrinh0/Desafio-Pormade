import { useEffect, useState } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import ModalEditUSer from './ComponentsAdmin/ModalUserEdit'
import MenuLateral from './ComponentsAdmin/MenuLateral'
import { AdminContextProvider } from './Contexts/AdminContext'
import { MenuContextProvider } from './Contexts/MenuContext'
import ModalDeleteProduct from './Components/ModalDeleteProduct'
import ModalHistoric from './Components/ModalHistoric'
import { AuthenticateContextProvider } from './Contexts/Authenticate'
import ProtectedComponent from './Pages/ProtectedComponent'
import { ItensCartProvider } from './Contexts/ItensCartContex'



function App() {

  return (
    <>
      <AuthenticateContextProvider>
        <ItensCartProvider>
          <AdminContextProvider>
            <MenuContextProvider>
              <MenuLateral />
              <ProtectedComponent>
                <Outlet/>  
              </ProtectedComponent>
              <ModalEditUSer />
              <ModalHistoric />
            </MenuContextProvider>
          </AdminContextProvider>
        </ItensCartProvider>
      </AuthenticateContextProvider>
    </>
  )
}

export default App
