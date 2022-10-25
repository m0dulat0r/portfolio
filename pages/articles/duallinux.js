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

        <p>CSGO has been always been a fascination for me. The mechanics, the gameplay & the RUSH B community is ❤️</p>
        <p>Let me put out the Autoexec that helped me execute B Rushes with an KD ratio of 0.90 consistently for 3 years.</p> 
        <p>To create the autoexec, follow the steps:</p>
        <br></br>
        <p><b>1.</b>
        Navigate to steam/common/Counter Strike Global Offensive/cfg & create a text file.</p>
        <p><b>2.</b>
        Save that file as autoexec.cfg</p>
        
        </main>
        
        <br></br><br></br><br></br><br></br>
        <Footer />
</>
    );
}