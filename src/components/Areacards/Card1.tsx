

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/agricultura.jpg"

function Card1() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Agricultura</h1>
            <span id={styles.carddescription}>A agricultura é a base da nossa sociedade. Os cursos livres de agricultura da Lessionato oferecem uma oportunidade de aprender sobre as últimas práticas agrícolas e como elas podem ajudar a melhorar a produtividade e a sustentabilidade.

</span>
        </div>




    )
}

export default Card1