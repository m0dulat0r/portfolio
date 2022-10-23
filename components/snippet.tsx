import styles from '/styles/Home.module.css'
import Image from 'next/image';

export default function Snippet({link,img,name,info}){
    return(
<>  

<div className={styles.grid}>
            <a href ={link} className={styles.card3}>                     
                <h2 className="text-gray-700 dark:text-gray-200 mb-4">{name}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-16">{info}</p>
                <br></br>
            </a>   
</div>     
</>
    );
}

