import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
        <div>
            <h1>Ninja List</h1>
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja listing</Link>
    </nav>
  )
}

export default Navbar;