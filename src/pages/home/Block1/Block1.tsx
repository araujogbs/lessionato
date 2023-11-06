
import styles from "./Block1.module.css"
import logoazul from "./../../../assets/logos/Lessionato logo vetorizado/4.png"
import img1 from "./../../../assets/block1/img1.png"
import img2 from "./../../../assets/block1/img2.png"
import img3 from "./../../../assets/block1/img3.png"
import img4 from "./../../../assets/block1/img4.png"
import division1 from "./../../../assets/divisions/Rectangle 26.png"



function Block1() {
    
    return (
        <>
        

            <div className={styles.block1}>

                <div className={styles.logoandtext}>
                    <img className={styles.logo} src={logoazul} alt="logo azul da lessionato" />

                    <div className={styles.text}>

                        <h1 id={styles.titleblock1} >Potencialize seu Saber, Conquiste o Sucesso! </h1>

                        <h3 id={styles.textblock1} >Descubra cursos de alta qualidade que vão impulsionar sua aprendizagem e te ajudar a atingir seus objetivos. Acesso instantâneo a conhecimento valioso para alcançar o sucesso pessoal e profissional, com certificados digitais para comprovar suas conquistas. Explore nossa seleção e comece a transformar sua vida hoje</h3>

                    </div>

                </div>
                <div  className={styles.imgs}>
                    <img id={styles.upimg} src={img1} alt="imagem 1" />
                    <img id={styles.downimg} src={img2} alt="imagem 2" />
                    <img id={styles.upimg} src={img3} alt="imagem 3" />
                    <img id={styles.downimg} src={img4} alt="imagem 4" />
                </div>

            </div>

            <div>
                <img id={styles.division1} src={division1} alt="primeira divisoria da pagina" />
            </div>


        </>


    )


}

export default Block1