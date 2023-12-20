

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/turismo.jpeg"

function Card12() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Turismo e Hotelaria</h1>
            <span id={styles.carddescription}>O turismo e a hotelaria são áreas essenciais para a economia. Os cursos livres de turismo e hotelaria da Lessionato oferecem uma oportunidade de aprender sobre as diferentes áreas do turismo e da hotelaria e como elas podem ser exercidas.</span>
        </div>




    )
}

export default Card12