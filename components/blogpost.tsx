import styles from '/styles/Home.module.css'

export default function BlogPost({title, text,}){
    return(
<>
            <div className={styles.card3}>
                <h2>{title}</h2>
                <br></br>
                <br></br>
                
                <p>{text}</p>
            </div>
</>
    );
}

