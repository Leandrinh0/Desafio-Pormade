import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import ProductDetail from './Pages/ProductDetails/index.jsx'
import Login from './Pages/Login/index.jsx'
import EditUser from './Pages/EditUsers/index.jsx'
import EditProducts from './Pages/EditProducts'

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
          path: '/editarUsuarios',
          element: <EditUser/>
        },
        {
          path: '/editarProdutos',
          element: <EditProducts/>
        }
    ]

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/detalhesProduto',
    element: <ProductDetail/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
