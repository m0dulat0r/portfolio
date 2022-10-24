import styles from '/styles/Home.module.css'

import BlogPost from '/components/blogpost'
import Footer from "components/footer"


export default function Blog()
{
  
    return(
<>
    <main className={styles.main}>

    <h1 className= "font-bold text-5xl justify-center"> My Articles</h1>
    <br></br>

    <p className="text-gray-600 dark:text-gray-400 mb-16">Get some technical How-To's over here</p>
    <h2 className="font-bold text-xl justify-center">Most Popular</h2>
    <br></br>

    <BlogPost 
                title = "Setting up CSGO"
                text= "For you to RUSH B"
                link= '/articles/csgo'
              />

<br></br>
<br></br>
    <h2 className="font-bold text-xl justify-center"> All Articles</h2>
    <br></br>
      
    <BlogPost 
                title = "Setting up CSGO"
                text= "For you to RUSH B"
                link= '/articles/csgo'
                info='Fri Oct 21, 2022 · 172 words · 1 minutes'

              />

    </main>
<Footer />

</>
    );
}