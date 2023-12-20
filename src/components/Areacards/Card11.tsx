

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/religião.webp"

function Card11() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Religiões</h1>
            <span id={styles.carddescription}>A religião é uma parte importante da vida de muitas pessoas. Os cursos livres de religião da Lessionato oferecem uma oportunidade de aprender sobre as diferentes religiões e como elas podem influenciar as pessoas.
</span>
        </div>




    )
}

export default Card11