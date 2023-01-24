import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
    </div>
  )
}

export default Navbar;