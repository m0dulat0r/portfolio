import styles from '/styles/Home.module.css'

export default function Tools({toolTittle, tool1, tool2, tool3}){

    return(
<>
        <div className={styles.card3}>
            <h2>{toolTittle}</h2>
            <p>{tool1}</p>
            <p>{tool2}</p>
            <p>{tool3}</p>
        </div>
</>
    );
}