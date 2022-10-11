import styles from '/styles/Home.module.css'
import Link from 'next/link'


export default function Footer(){
  return (
<>
<div className={styles.footer}>
              <div className={styles.card}>
                  <a href="index">
                    <p> Home</p>
                  </a>

                  <a href="about">
                    <p> About</p>
                  </a>

                  <a href="portfolio/growthhacker">
                    f 
                  </a>
              </div>

              <div className={styles.card}>
                  <a href="portfolio/developer">
                    <p> LinkedIn</p>
                  </a>


                  <a href="portfolio/designer">
                    <p> Github</p>
                  </a>

                  <a href="portfolio/growthhacker">
                    <p>Twitter</p>
                  </a>

                <a href="portfolio/growthhacker">
                    <p>Instagram</p>
                </a>
              </div>

              <div className={styles.card}>
                  <a href="portfolio/developer">
                    a
                  </a>


                  <a href="portfolio/designer">
                   b
                  </a>



                  <a href="portfolio/growthhacker">
                    c
                  </a>
              </div>
        
</div>
</>
  );
}
 