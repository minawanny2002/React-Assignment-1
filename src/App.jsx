import React from 'react'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Portofolio from './Components/Portofolio/Portofolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'

export default function App() {

  const myRouter = createBrowserRouter([
    {path:"/",
      element:<Layout/>,
      children:[{path:"/"  , element:<Home/>},
                {path:"about"  , element:<About/>},
                {path:"portofolio" , element:<Portofolio/>},
                {path:"contact" , element:<Contact/>}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  )
}
