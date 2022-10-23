import Head from 'next/head'
import styles from '/styles/Home.module.css'

import Snippet from 'components/snippet'
import Footer from "components/footer"

export default function myGear() {
  return (
<>
<main className={styles.main}>

      <Head>
        <title>Code Snippets</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br></br>
      <div className={styles.container}>
      <h3 className="font-bold text-5xl">Code Snippets</h3>
      <br></br>
      </div>

    <p className="text-gray-600 dark:text-gray-400 mb-16">Code and API that can be used to automate tasks.</p>
    <br></br>

    <Snippet 
        link='/pages/snippets/spotify.js'
        img=''
        name='Spotify'
        info='Allows you to show your Top Tracks.'
    />

    <Snippet 
        link='/pages/snippets/spotify.js'
        img=''
        name='Spotify'
        info='Allows you to show your Top Tracks.'
    />

    <Snippet 
        link='/pages/snippets/spotify.js'
        img=''
        name='Spotify'
        info='Allows you to show your Top Tracks.'
    />

    <Snippet 
        link='/pages/snippets/spotify.js'
        img=''
        name='Spotify'
        info='Allows you to show your Top Tracks.'
    />

</main>
<Footer />
</>
  );
  }