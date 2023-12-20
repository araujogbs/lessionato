

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/psicologia.jpeg"

function Card3() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Coaching e Psicologia</h1>
            <span id={styles.carddescription}>O coaching e a psicologia são áreas que podem ajudar você a alcançar seus objetivos profissionais. Os cursos de coaching e psicologia da Lessionato oferecem uma oportunidade de aprender sobre técnicas de coaching e psicologia para podem ser aplicadas na sua vida.</span>
        </div>




    )
}

export default Card3