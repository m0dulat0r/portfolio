import styles from '/styles/Home.module.css'


export default function LandingPage({branch}){

    return(
<>
        <div className={styles.main}>
            <h1 className={styles.title}>{branch} Portfolio</h1>
        </div>

</>
    );
}