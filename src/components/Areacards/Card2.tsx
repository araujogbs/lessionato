

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/veterinaria.jpeg"

function Card2() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Biologia e Veterinária</h1>
            <span id={styles.carddescription}>A biologia e a veterinária são áreas essenciais para a compreensão do mundo natural. Os cursos livres de biologia e veterinária da Lessionato oferecem uma oportunidade de aprender sobre a base da vida e como ela funciona.
</span>
        </div>




    )
}

export default Card2