import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Miranda Business Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Miranda Business Solutions" />
       
      </main>

      <Footer />
    </div>
  )
}
