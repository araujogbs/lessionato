

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/contabilidade.webp"

function Card4() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Contabilidade e Finanças</h1>
            <span id={styles.carddescription}>A contabilidade e as finanças são áreas essenciais para a gestão de qualquer negócio. Os cursos livres de contabilidade e finanças da Lessionato oferecem uma oportunidade de aprender sobre os fundamentos da contabilidade e das finanças.</span>
        </div>




    )
}

export default Card4