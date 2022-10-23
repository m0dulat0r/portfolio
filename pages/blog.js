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
                    href= '/blog/blog2'
                />

    <BlogPost 
                title = "How Lifting weights saved my life?"
                text= " Conquering mind and chasing excellency through physical pain"
                href= '/blog/blog4'
              />

<br></br>
<br></br>
    <h2 className="font-bold text-xl justify-center"> All Blogs</h2>
    <br></br>

      <BlogPost
        title = "How Lifting weights destroyed my life?"
        text= " Chasing my genetic potential through physical pain"
        href= '/blog/blog4'
      />
      <BlogPost
        title = "My first love"
        text= "It was just yesterday"
        link=''
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