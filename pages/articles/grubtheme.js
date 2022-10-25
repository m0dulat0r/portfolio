import styles from '/styles/Home.module.css'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'

export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "How to custom theme GRUB menu"
        />
        <Info
            day="Mon"
            date="May 2, 2022"
            words="172"
            minutes="1"
        />
        <br></br> <br></br>
        <main className={styles.container}>
        <p> Making a unresponsive website is boring creativity, hence I thought about making a Pre-loader animation for my website.</p>
        </main>
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}