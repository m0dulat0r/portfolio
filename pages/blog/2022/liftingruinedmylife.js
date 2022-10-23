import styles from '/styles/Home.module.css'
import BlogPost from '/components/blogpost'
import Footer from "components/footer"


export default function BlogEntry({title, text}){

    return(
<>    

    <div className={styles.container}>
        <h1 className={styles.title}> How lifting weight destroyed my life </h1>
        <h2 className ={styles.description}>Sat Sep 1, 2022 · 300 words · 3 min</h2>
        </div>
        <br></br> <br></br>
        <main className={styles.container}>
            <p>&apos;&apos;The day you started lifting is the day you became forever small, because you will never be as big as you wanna be.&apos;&apos; - Dom Mazzetti
           </p>
           <p>I can critique myself all day in the mirror, even when I haven&apos;t seen my back.</p>

           <br></br>
           <p> I have made a visual marker of what I am right now, I don&apos;t like this. I feel disgusted when I am not consistent by my splits or I am not sleeping
            on the time. Like why am I not sleeping on time, eating the meals, scrambling the eggs.
           </p>
           <br></br>
           <p>
           It&apos;s just the pump loop. You get a pump, want to be as big as the pump all the time, get bigger, now your pump is
            bigger and it starts from the beginning.
            </p>
        </main>

        <Footer />
</>
    );
}