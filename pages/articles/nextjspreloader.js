import styles from '/styles/Home.module.css'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'

export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "How to Dual Boot Linux as daily driver."
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
            No pioneer has been ever a bad manager of his time, 
            </p>
        </main>
        
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}