

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/historia.webp"

function Card7() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >História e Geografia</h1>
            <span id={styles.carddescription}>A história e a geografia são áreas essenciais para a compreensão do mundo. Os cursos livres de história e geografia da Lessionato oferecem uma oportunidade de aprender sobre o passado e o presente do mundo e como ele funciona.
</span>
        </div>




    )
}

export default Card7