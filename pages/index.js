import Head from 'next/head'
import Header from '../src/components/Header.js'
import Body from '../src/components/Body.js';

export default function Home() {

  return (
    <div className="is-family-sans-serif has-background-primary">
      <Head>
        <title>7 Bottles</title>
        <meta name="description" content="7 Bottles solving with genetic algorithm" />
        <link rel="icon" href="/adn.png" />
      </Head>
      <Header />
      <main className="container box has-background-primary-light">
        <Body />
      </main>
      <footer className="footer">

      </footer>
    </div>
  )
}
