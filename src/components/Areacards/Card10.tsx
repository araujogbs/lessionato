

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/sustentabilidade.webp"

function Card10() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Meio Ambinete e Sustentabilidade</h1>
            <span id={styles.carddescription}>O meio ambiente e a sustentabilidade são essenciais para a humanidade. Os cursos livres de meio ambiente e sustentabilidade são a oportunidade de aprender a reseolver esses problemas.
</span>
        </div>




    )
}

export default Card10