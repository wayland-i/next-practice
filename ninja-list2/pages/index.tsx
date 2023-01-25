import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit est, tempor non risus vel, congue placerat risus. Nulla facilisi. Fusce velit nibh, tincidunt euismod sapien non, malesuada congue odio. Sed luctus tempus suscipit. Sed velit velit, mollis vitae est vel, auctor commodo dolor. Sed velit nulla, convallis at fringilla a, malesuada a velit. Sed congue magna id ipsum pharetra, a congue nibh bibendum.
        </p>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit est, tempor non risus vel, congue placerat risus. Nulla facilisi. Fusce velit nibh, tincidunt euismod sapien non, malesuada congue odio. Sed luctus tempus suscipit. Sed velit velit, mollis vitae est vel, auctor commodo dolor. Sed velit nulla, convallis at fringilla a, malesuada a velit. Sed congue magna id ipsum pharetra, a congue nibh bibendum.
        </p>
        <Link className={styles.btn} href='/ninjas'>Ninja List</Link>
      </div>
    </>
  )
}

export default Home
