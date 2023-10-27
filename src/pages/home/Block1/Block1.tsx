
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

                        <h1 id={styles.titleblock1} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate </h1>

                        <h3 id={styles.textblock1} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum fugiat, nam alias quasi recusandae nihil enim laboriosam velit impedit, totam, porro voluptatum itaque nisi earum voluptatibus? Saepe quis iusto facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam non recusandae praesentium explicabo officiis voluptate beatae ipsa aspernatur unde, aperiam fuga natus perferendis dolore voluptas quis numquam tempore. Nisi!</h3>

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