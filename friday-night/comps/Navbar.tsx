import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Link style={{ 'fontSize': '5rem', 'marginRight': '5%'}} href={'/'}>Home</Link>
        <Link style={{ 'fontSize': '5rem'}} href={'/users'}>Users</Link>
    </div>
  )
}

export default Navbar;