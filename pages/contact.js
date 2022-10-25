import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import BlogPost from 'components/blogpost'
import Footer from "components/footer"

export default function myGear() {
  return (
<>
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br></br>
      <br></br>

      <h3 className="font-bold text-5xl">Contact</h3>
      <br></br>

      <p>I am open to work on innovative and creative projects.
      </p>
      <p>I can efficiently co-work in global time zones.</p>
      <p>Fill the contact form to get a reply from me.</p>

    </div>

    <Footer />
</>
  );
  }