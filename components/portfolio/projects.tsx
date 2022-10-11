import styles from '/styles/Home.module.css'

export default function Project({link, projectName, details, longDetails1, longDetails2, longDetails3}){

    return(
<>
            <div className={styles.grid}>
                <a href={"link"} className={styles.card2}>
                    <h2>{projectName} </h2>
                    <p>{details}</p>
                </a>
            </div>

            <div className={styles.grid}>
                <p className={styles.text}> {longDetails1} </p>
                <p className={styles.text}> {longDetails2} </p>
                <p className={styles.text}> {longDetails3} </p>
            </div>
</>
    );
}