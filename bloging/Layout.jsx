import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './compunents/Navbar'
import Footer from './compunents/Footer'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    // <div>Layout</div>
  )
}

export default Layout