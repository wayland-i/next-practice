import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
