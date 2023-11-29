import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/index.jsx'
import ProductDetail from './Pages/ProductDetails/index.jsx'
import Login from './Pages/Login/index.jsx'

const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/detalhesProduto',
          element: <ProductDetail/>
        },
    ]

  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
