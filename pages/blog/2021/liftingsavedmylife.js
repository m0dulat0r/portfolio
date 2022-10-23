import styles from '/styles/Home.module.css'
import BlogPost from '/components/blogpost'
import Footer from "components/footer"


export default function BlogEntry({title, text}){

    return(
<>    
<div className={styles.container}>
        <h1 className={styles.title}> How lifting weight saved my life </h1>
        <h2 className ={styles.description}>Sun Dec 4, 2021 · 172 words · 1 min</h2>
        </div>
        <br></br> <br></br>
        <main className={styles.container}>
            <p>Hey there</p> 
            <p>&apos;&apos;The day you started lifting is the day you became forever small, because you will never be as big as you wanna be.&apos;&apos; - Dom Mazzetti
           </p>
        </main>

        <Footer />
</>
    );
}