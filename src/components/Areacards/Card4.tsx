

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/admimg.png"

function Card4() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Titulo</h1>
            <span id={styles.carddescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi consectetur, deleniti, error reprehenderi</span>
        </div>




    )
}

export default Card4