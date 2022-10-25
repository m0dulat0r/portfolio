import styles from '/styles/Home.module.css'
import Footer from "components/footer"

import Heading from 'components/blogposts/heading'
import Info from 'components/blogposts/info'

export default function BlogEntry({title, text}){

    return(
<>    
        <Heading
            title= "How to Create a Pre Loader in NextJS"
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
        <p> The process was a little confusing since it involved playing with &apos;_app.js &apos;, which I have never given any attention before (poor little thing)</p>
        <p> It was fairly the best upgrade I did on the application, as it increased the visual delicacy exponentially.</p>


        </main>
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}