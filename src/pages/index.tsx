import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Descrição para Seo..." />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
