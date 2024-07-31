import React from 'react'
import Navbar from './../NavBar/Navbar'
import Footer from './../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
