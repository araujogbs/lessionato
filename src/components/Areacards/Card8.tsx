

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/informatica.webp"

function Card8() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Informática e Tecnologia</h1>
            <span id={styles.carddescription}>A informática e a tecnologia são áreas essenciais para o mundo moderno. Os cursos livres de informática e tecnologia da Lessionato oferecem uma oportunidade de aprender sobre as últimas tendências em informática e tecnologia.
</span>
        </div>




    )
}

export default Card8