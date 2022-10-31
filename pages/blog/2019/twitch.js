import styles from '/styles/Home.module.css'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'



export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "Title"
        />

        <Info
            day="Mon"
            date="Month 99, 2018"
            words="ahem"
            minutes="some"
        />
        
        <br></br> <br></br>
        <main className={styles.container}>
        <p>
        Lorem Ipsum
        </p>
        
        </main>
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}