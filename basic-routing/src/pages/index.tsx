import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);

  }

  return (
    <div>
      <h1>Home</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  )
}
