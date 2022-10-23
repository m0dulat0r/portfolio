import styles from '/styles/Home.module.css'

export default function Info({day, date, words, minutes}){
    return(
<>
    <main className={styles.container}>
        <h2 className ="font-light text-xl justify-center">{day} {date} · {words} words · {minutes} minutes</h2>
    </main>
 </>
    );
}