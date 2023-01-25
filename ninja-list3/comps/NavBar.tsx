import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav>
        <h1>Logo</h1>
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/ninjas'}>Ninja List</Link>
        </div>
    </nav>
  )
}

export default NavBar