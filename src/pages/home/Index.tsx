

{/* IMPORTS BLOCK1*/ }

import logoazul from "./../../assets/logos/Lessionato logo vetorizado/4.png"
import img1 from "./../../assets/block1/img1.png"
import img2 from "./../../assets/block1/img2.png"
import img3 from "./../../assets/block1/img3.png"
import img4 from "./../../assets/block1/img4.png"
import division1 from "./../../assets/divisions/Rectangle 26.png"


{/* IMPORTS AREA DOS CURSOS*/ }

import Card1 from "../../components/Areacards/Card1"
import Card10 from "../../components/Areacards/Card10"
import Card11 from "../../components/Areacards/Card11"
import Card12 from "../../components/Areacards/Card12"
import Card2 from "../../components/Areacards/Card2"
import Card3 from "../../components/Areacards/Card3"
import Card4 from "../../components/Areacards/Card4"
import Card5 from "../../components/Areacards/Card5"
import Card6 from "../../components/Areacards/Card6"
import Card7 from "../../components/Areacards/Card7"
import Card8 from "../../components/Areacards/Card8"
import Card9 from "../../components/Areacards/Card9"
import division from "./../../assets/divisions/Rectangle 27.png"
import btnicon from "./../../assets/courseareas/btnicon.svg"


{/* IMPORTS carrosel*/ }

import Carousel from "./Carousel/Carousel"

{/* IMPORTS CURSOS*/ }

import Courses from "./Courses/courses"
import divisioncourse from "../../assets/divisions/Rectangle 29.png"



{/* IMPORTS AREA CERTIFICADO*/ }

import lessionatologo from "./../../assets/logos/1.png"
import lessionatologoL from "./../../assets/logos/lessionatologoblock1.png"
import divisioncertificated from "./../../assets/divisions/Rectangle 32.png"
import certificatedlogo from "./../../assets/certificatedblock/certificadologo.png"
import certificated from "./../../assets/certificatedblock/certificated.png"






import styles from "./styles.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer/Index"


export function Home() {
    return (




        <>

            {/* HEADER */}

            <Header/>


            {/* BLOCK1 */}

            <div>
                <div className={styles.block1}>

                    <div className={styles.logoandtext}>
                        <img className={styles.logo} src={logoazul} alt="logo azul da lessionato" />

                        <div className={styles.text}>

                            <h1 id={styles.titleblock1} >Potencialize seu Saber, Conquiste o Sucesso! </h1>

                            <h3 id={styles.textblock1} >Descubra cursos de alta qualidade que vão impulsionar sua aprendizagem e te ajudar a atingir seus objetivos. Acesso instantâneo a conhecimento valioso para alcançar o sucesso pessoal e profissional, com certificados digitais para comprovar suas conquistas. Explore nossa seleção e comece a transformar sua vida hoje</h3>

                        </div>

                    </div>
                    <div className={styles.imgs}>
                        <img id={styles.upimg} src={img1} alt="imagem 1" />
                        <img id={styles.downimg} src={img2} alt="imagem 2" />
                        <img id={styles.upimg} src={img3} alt="imagem 3" />
                        <img id={styles.downimg} src={img4} alt="imagem 4" />
                    </div>

                </div>

                <div>
                    <img id={styles.division1} src={division1} alt="primeira divisoria da pagina" />
                </div>

            </div>





            {/* AREA DOS CURSOS*/}
            <div>
                <div className={styles.areatitle}>
                    <h1 id={styles.title}>Áreas mais acessadas</h1>

                    <h3 id={styles.description}>Estamos sempre atualizando nossa grade de cursos online.
                        Não fique para trás, escola sua área e se inscreva agora mesmo nos nossos lançamentos!</h3>

                </div>

                <div className={styles.coursecards}>

                    <Card1 />

                    <Card2 />

                    <Card3 />

                    <Card4 />

                    <Card5 />

                    <Card6 />

                    <Card7 />

                    <Card8 />

                    <Card9 />

                    <Card10 />

                    <Card11 />

                    <Card12 />

                    <img className={styles.division} src={division} alt="" />

                </div>

                <div className={styles.courseareasbtn}>

                    <button className={styles.btn}>Lista de áreas <img id={styles.btnicon} src={btnicon} alt="" /></button>

                </div>

            </div>



            <Carousel/>


<br /><br /><br /><br /><br /><br /><br />
            
<img id={styles.division} src={divisioncourse} alt="" />



            <Courses/>


{/* AREA DOS CERTIFICADO*/ }

<div>

<img className={styles.divisioncertificated} src={divisioncertificated} alt="" />

<div className={styles.certificatedblock}>


<div>
<img id={styles.logolessionatoL} src={lessionatologoL} alt="" />
<img id={styles.logolessionato} src={lessionatologo} alt="logo lessionato" />
</div>


<h1 className={styles.title}>Certificado Digital <img src={certificatedlogo} alt="logo do certificado" /></h1>


<div className={styles.descriptionandcertificated}> 
    
<span className={styles.certificateddescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit


    sit amet, consectetur adipiscing elit, veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</span>

<img className={styles.certificated} src={certificated} alt="exemplo de certificado" />

</div>

</div>
</div>




{/* FOOTER*/ }



<Footer/>









        </>








    )

}

export default Home