import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav>
        <div className='logo'>
          <Link href='/'>
            <Image src='/logo.png' width={128} height={77} alt='logo'/>
          </Link>
        </div>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/ninjas'>Ninja listing</Link>
        </div>
    </nav>
  )
}

export default Navbar;