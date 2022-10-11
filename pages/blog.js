import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

import BlogPost from '/components/blogpost'

export default function Blog()
{
    return(
<>
    <main className={styles.main}>

    <h1 className={styles.title}>Blog</h1>
    <p>I have been writing blogs since 2018 about technology, gaming, movies & music.</p>

    <h2 className={styles.titleh2}> Most Popular</h2>
    <BlogPost 
      title = "Why Dhairya has a small dick?"
      text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
    />
    <br></br>
    <BlogPost 
      title = "Why Dhairya has a small dick?"
      text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
    />

    <h2 className={styles.titleh2}> All Blogs</h2>

      <BlogPost
        title = "Why Dhairya has a small dick?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
      />
      <BlogPost
        title = "Why Dhairya has a small dick again?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
      />

      <BlogPost
        title = "Why Dhairya has a small dick?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
      />
      <BlogPost
        title = "Why Dhairya has a small dick again?"
        text= "No one can compare to big daddy Aman, he's not small. He's just smaller. His personality makes up for it tho."
      />

    </main>

</>
    );
}