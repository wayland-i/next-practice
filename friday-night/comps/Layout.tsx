import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
        <Navbar></Navbar>
        {children}
        
    </div>
  )
}

export default Layout;