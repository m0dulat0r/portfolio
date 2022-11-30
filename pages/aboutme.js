import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'


import BlogPost from 'components/blogpost'
import Footer from "components/footer"

export default function myGear() {
  return (
<>
    
      <Head>
        <title>About Me</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br></br>
      <div className={styles.container}>
      <h3 className="font-bold text-5xl">Hey There</h3>
      </div>

      <br></br>
      <br></br>
      <div className={styles.container}>
        <p>I am Aman Punia, or as you must call me A-man.</p>
        <p>I am 20 year old, cis-het brown male from India.</p>
        <p>I am a sophomore at Netaji Subhas University of Technology (erstwhile NSIT) in Delhi, India.</p>
        <br></br>

        <p>Growing up I was fascinated with the ways of the world. Everything was a science for me to discover. I was blessed by my grandpa to buy me a computer.
          That was the fantasy item for me, full of infinite things to discover and play around. 
        </p>
        <br></br>
        <p> I quickly gained interest and tried to play around my PC, breaking down parts of it. Repairing them reading manuals which I used 
          to download from school broadband, back in 2010 when internet was still a dream for many. It was the good 
          old 1000kbps LAN those days, it used to take a whole period to get a PDF downloaded.
        </p>
      

      </div>    
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    
</>
  );
  }