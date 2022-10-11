import styles from '/styles/Home.module.css'

export default function Services({Service, Point1, Point2, Point3}){

    return(
<>
            <div className={styles.card}>
                    <h2>{Service}</h2>
                    <p>{Point1}</p>
                    <p>{Point2}</p>
                    <p>{Point3}</p>
            </div>
</>
    );
}