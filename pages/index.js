import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import BlogPost from 'components/blogpost'
import Footer from "components/footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aman Punia</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


          <h1 className={styles.title}> Hello</h1>
          <h2 className={styles.titleh2}> I am Aman</h2>
          <h3 className={styles.titleh3}> Developer | Designer | Growth Hacker</h3>
          <br></br><br></br><br></br>
          <p> I am a freelancer and open to work on creative digital products.</p>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

          <div>
            <h2>Portfolio</h2>
            <div className={styles.row}>
              <div className={styles.grid}>
                  <a href="portfolio/developer" className={styles.card}>
                    <h2>Development &rarr;</h2>
                    <p>Portfolio.</p>
                  </a>
                </div>

              <div className={styles.grid}>
                  <a href="portfolio/designer" className={styles.card}>
                    <h2>Designing &rarr;</h2>
                    <p>Portfolio.</p>
                  </a>
              </div>

              <div className={styles.grid}>
                  <a href="portfolio/growthhacker" className={styles.card}>
                    <h2>Growth Hacking &rarr;</h2>
                    <p>Portfolio.</p>
                  </a>
              </div>
            </div>
          </div>

          <div>
          <h2>Blog Articles</h2>
          <div className={styles.container}>
            
          <BlogPost 
            title = "Why Dhairya has a small dick?"
            text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
           />

          <BlogPost 
                title = "Why Dhairya has a small dick?"
                text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
            />

          <BlogPost 
            title = "Why Dhairya has a small dick?"
            text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
          />
        
          </div>
          <p>Read my <Link href="blog"> Blog</Link></p>
          </div>
          <Footer />
      </main>      
    </div>
  )
}
