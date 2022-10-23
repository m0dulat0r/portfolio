import styles from '/styles/Home.module.css'
import BlogPost from '/components/blogpost'
import Footer from "components/footer"


export default function BlogEntry({title, text}){

    return(
<>    
        <main className={styles.container}>
        <br></br>
        <h1 className= "font-bold text-5xl justify-center"> Discovering NextJs </h1>
        <br></br>
        <h2 className ="font-light text-xl justify-center">Mon May 2, 2022 · 172 words · 1 min</h2>
        </main>
        <div className={styles.container}>
        <h1 className={styles.title}>  </h1>
        <h2 className ={styles.description}>Fri Sep 7, 2022 · 250 words · 2 min</h2>
        </div>

        <br></br> <br></br>
        <main className={styles.container}>
            <p>So, I was just watching on some reddit posts over in r/webdev and saw a lot of redditors ranting about how WordPress is taking over JS these days
             and few other tech stack circle jerks in the comments, and that&apos;s where I discovered the sense of &apos;&apos;btw, I use Arch&apos;&apos; emotion 
             among the Next developers.That&apos;s when I decided to experiment with NEXT and build my portfolio and blog on it.
            </p> 

            <p>Being the lazy person I am, I had to put a bet for myself to make a switch to this new technology, so I made a bet for my favourite thing
                about me. My hair, I would shave my head and get it shining smooth, in case I fail to build the app in 3 days.
            </p>
            <p> NEXT was built by Vercel, a company with which I have deployed some web applications in the past. So, yeah WHY NOT <b>Vercel</b> again.
            So, I went ahead and started with the <u><a href= "https://nextjs.org/learn/foundations/about-nextjs">Start Learning</a></u> documentation.
            </p>
        </main>

        <Footer />

</>
    );
}