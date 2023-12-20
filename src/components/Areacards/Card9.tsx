

import styles from "./Card.module.css"
import mainimg from "./../../assets/courseareas/matematica.webp"

function Card9() {
    return (


        <div className={styles.card}>
            <img className={styles.mainimg} src={mainimg} alt="" />

            <div id={styles.cardline}></div>


            <h1 className={styles.title} >Matemática e Estatística</h1>
            <span id={styles.carddescription}>A matemática e as estatísticas são áreas essenciais para a compreensão do mundo. Os cursos livres de matemática e estatísticas da Lessionato oferecem uma oportunidade de aprender sobre os fundamentos da matemática e das estatísticas.
</span>
        </div>




    )
}

export default Card9