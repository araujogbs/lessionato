

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/social.jpeg"

function Card5() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Educação e Serviço Social</h1>
            <span id={styles.carddescription}>A educação e o serviço social são áreas essenciais para o desenvolvimento da sociedade. Os cursos livres de educação e serviço social da Lessionato é uma oportunidade de aprender sobre a área e como elas podem ser aplicadas na sua vida profissional.</span>
        </div>




    )
}

export default Card5