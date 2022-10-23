import styles from '/styles/Home.module.css'

export default function BlogPost({title, text, link, info}){
    return(
<>  

<div className={styles.grid}>
            <a href ={link} className={styles.card3}> 
            <h2 className="font-bold text-black-700 dark:text-gray-200">{title}</h2> 
            <p className="text-gray-600 dark:text-gray-400 mb-4">{info}</p>
            <br></br>

            <p className="text-gray-600 dark:text-gray-400 mb-4">{text}</p>

            </a>   
</div>     
</>
    );
}

