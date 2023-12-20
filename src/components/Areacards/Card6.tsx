

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/quimica.webp"

function Card6() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Física e Química</h1>
            <span id={styles.carddescription}>A física e a química são áreas essenciais para a compreensão do mundo natural. Os cursos livres de física e química da Lessionato oferecem uma oportunidade de aprender sobre a base da física e da química e como elas podem ser aplicadas na vida real.
</span>
        </div>




    )
}

export default Card6