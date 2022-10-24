import styles from '/styles/Home.module.css'
import BlogPost from '/components/blogpost'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'



export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "Time Management like A-man"
        />

        <Info
            day="Mon"
            date="May 2, 2022"
            words="172"
            minutes="1"
        />
        
        <br></br> <br></br>
        <main className={styles.container}>
        <p>
        Time management is a crucial skill that set aparts people who can do it and people who can&apos;t do it in a wide spectrum. 
        No pioneer has been ever a bad manager of his time, </p>
        <p>
        There are some work related choices we often screw up. For me as a university student, I come across a lot of students with the indecisiveness.
        They dip their toes in literally every pool they see. After all, why miss an opportunity?
        Unfortunately, students often get wound up in less important tasks, events or commitments that hinder their devotion to more important
        events and purposes they have for their career.
        </p>
        
        </main>
        
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}