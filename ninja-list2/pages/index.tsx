import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href='/ninjas'>Ninja List</Link>
    </div>
  )
}

export default Home
