import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import useState from 'react'

import BlogPost from '/components/blogpost'
import Footer from "components/footer"


export default function Blog()
{
  
    return(
<>
    <main className={styles.main}>

    <h1 className= "font-bold text-5xl justify-center"> My Blog</h1>
    <br></br>

    <p className="text-gray-600 dark:text-gray-400 mb-16">I have been writing blogs since 2018 about technology, gaming, movies & philosophy.</p>
    <h2 className="font-bold text-xl justify-center">Most Popular</h2>
    <br></br>

    <BlogPost 
                title = "Time Management Lately"
                text= "Time you enjoy wasting is not time wasted."
                link= '/blog/blog1'
              />

    <BlogPost 
                    title = "Discovering NextJS"
                    text= "A framework for a framework. lol."
                    link= '/blog/blog2'
                />

    <BlogPost 
                title = "How Lifting weights saved my life?"
                text= " Conquering mind and chasing excellency through physical pain"
                link= '/blog/blog4'
              />

<br></br>
<br></br>
    <h2 className="font-bold text-xl justify-center"> All Blogs</h2>
    <br></br>
      
      <BlogPost
        title = "Dev Rant: TailWindCSS"
        text= "I mean is it too hard to add a install script?"
        link='/blog/2022/TailWindCSSRant'
        info='Mon Oct 24, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "College Fest: ResoNanz"
        text= " My rant for fests"
        href= '/blog/2022/resonanz'
        info='Fri Oct 21, 2022 · 172 words · 1 minutes'
      />  

      <BlogPost
        title = "Discovering NextJS"
        text= "A framework for a framework. lol, what a small world."
        href= '/blog/2022/nextjs'
        info='Sat Oct 22, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "How lifting destroyed my life"
        text= "Seriously, how can this be a vice"
        href= '/blog/2022/liftingruinedmylife'
        info='Sat Sept 22, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "CGPA Reveal"
        text= "what did I just open up"
        href= '/blog/2022/cgpareveal'
        info='Sat Sept 22, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "My recent interest in being a civil servant"
        text= "What a sick joke"
        href= '/blog/2022/upsc'
        info='Sat Sept 22, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "Travelling"
        text= "What a sick joke"
        href= '/blog/2022/upsc'
        info='Sat Sept 22, 2022 · 172 words · 1 minutes'
      />

      <BlogPost
        title = "blog?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
        link=''
      />
      <BlogPost
        title = "blog again?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
        link=''
      />

    </main>

    <Footer />

</>
    );
}