import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import ProductDetail from './Pages/ProductDetails/index.jsx'
import Login from './Pages/Login/index.jsx'
import EditUser from './Pages/EditUsers/index.jsx'
import EditProducts from './Pages/EditProducts'
import { AuthenticateContextProvider } from './Contexts/Authenticate.jsx'
import ProtectedComponent from './Pages/ProtectedComponent/index.jsx'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: '/home/:id',
          element: <Home/>
        },
        {
          path: '/editarUsuarios/:id',
          element: <EditUser/>
        },
        {
          path: '/editarProdutos/:id',
          element:
              <EditProducts/>
        }
    ]

  },
  {
    path: '/login',
    element: 
    <AuthenticateContextProvider>
    <Login />
    </AuthenticateContextProvider>
  },
  {
    path: '/detalhesProduto',
    element:
      <ProtectedComponent>
        <ProductDetail/>
      </ProtectedComponent>

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
