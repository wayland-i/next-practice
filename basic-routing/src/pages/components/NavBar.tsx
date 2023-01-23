import React from 'react'
import Link from 'next/link'

function NavBar() {

    // const handleAbout = () => {

    // }



  return (
    <div>
        <h1>NavBar</h1>
        <Link href='/'>
            <button>Home</button>
        </Link>
        <Link href='/About'>
            <button>about</button>
        </Link>
        <button>Friends</button>
        <button>Secret Page</button>
    </div>
  )
}

export default NavBar