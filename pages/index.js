import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

import BlogPost from 'components/blogpost'
import Footer from "components/footer"

export default function Home() {
  return (
<>
    <div className={styles.container}>
      <Head>
        <title>Aman Punia</title>
        <meta name="description" content="Portfolio Aman Punia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}> Hi</h1>
          <br></br>
          <h2 className={styles.titleh2}> I am Aman</h2>
          <br></br>
          <h2 className={styles.titleh3}> I am a Developer | Designer | Growth Hacker</h2>
          <br></br>
          I am a freelancer and open to work on creative digital products
          <br></br>
        </main>

      <main className={styles.main}>

        <div className="flex flex-col justify-center items-start max-w-3xl border-gray-300 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                  Aman Punia
                </h1>
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">Developer | Designer | Growth Hacker</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">
                  Developing a faster web, better brands & growth marketing strategies.<br></br>
                  Freelancing and working out all day everyday.
                </p>
              </div>
              
              <div>
                <Image
                  alt="Aman Punia"
                  height={176}
                  width={176}
                  src='/public/profile.jpg'
                    />
              </div>
            </div>
        </div>

        <div>
          <h2 className='font-bold text-xl justify-center'>Portfolio</h2>
        </div>
        
          <p className="text-gray-600 dark:text-gray-400 mb-16">
              Check out my portfolio, skills & technologies!
          </p>
            
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

          <br></br><br></br>
          
          <div>
            <h2 className="font-bold text-xl justify-center">Blog Articles </h2> 
          </div>

            <p className="text-gray-600 dark:text-gray-400 mb-16">
                Check out my blogs, showing popular ones below.
              </p>

          <div>
            <BlogPost 
              title = "Time Management Lately"
              text= "Time you enjoy wasting is not time wasted."
              link= '/blog/2022/timemanagement'
              info="Mon May 2, 2022 · 172 words · 1 minutes"
              />

            <BlogPost 
              title = "Discovering NextJS"
              text= "A framework for a framework. lol."
              href= '/blog/2022/nextjs'
              info="Fri Sep 7, 2022 · 250 words · 2 min"
              />

            <BlogPost 
              title = "How Lifting weights saved my life?"
              text= " Conquering mind and chasing excellency through physical pain"
              href= '/blog/2021/liftingsavedmylife'
              info="Sun Dec 4, 2021 · 172 words · 1 min"
              />

            <p className="back-600 dark:text-gray-400 mb-16">Read all of my <u className="gray"><Link href="blog">blogs</Link></u></p>
          </div>
      </main>
    <Footer />
  </div>
</>          
  );
}
