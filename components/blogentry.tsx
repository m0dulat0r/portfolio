import styles from 'styles/Home.module.css'

export default function BlogEntry({title, text}) {
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <br></br>

            <p>{text}</p>
        </div>
    );
}