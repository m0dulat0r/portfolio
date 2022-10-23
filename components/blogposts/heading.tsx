import styles from '/styles/Home.module.css'

export default function Heading({title}){

    return(
<>
    <main className={styles.container}>
            <br></br>
        <h1 className= "font-bold text-5xl justify-center"> {title} </h1>
        <br></br>
        </main>
</>
);
}