import Head from 'next/head'
import Header from '../src/components/Header.js'
import Body from '../src/components/Body.js';
import Information from '../src/components/Information.js';
import Footer from '../src/components/Footer.js';

export default function Home() {

  return (
    <div className="is-family-sans-serif has-background-dark">
      <Head>
        <title>7 Bottles</title>
        <meta name="description" content="7 Bottles solving with genetic algorithm" />
        <link rel="icon" href="/adn.png" />
      </Head>
      <Header />

      <main className="container box ">
        <Information />
        <Body />
      </main>
        <Footer />
    </div>
  )
}
