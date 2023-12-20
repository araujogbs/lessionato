

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
import divisioncourse from "../../assets/divisions/Rectangle 25.png"



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

                            <h1 id={styles.titleblock1} >Apreender e Certificar te garante um futuro promissor </h1>

                            <h3 id={styles.textblock1} >A Lessionato é uma empresa de cursos livres com atuação em diversas áreas do conhecimento. Com uma ampla variedade de cursos disponíveis, a Lessionato atende a todos os públicos, independentemente da idade, formação ou interesses.</h3>

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



            
<img className={styles.division} src={divisioncourse} alt="" />


<div className={styles.areatitlecourses}>
<h1 id={styles.title}>Nossos cursos mais acessados</h1>

<h3 id={styles.description}>Nossos cursos online são perfeitos para quem quer investir na sua capacitação de forma prática e
 rápida, mas claro, sem perder a qualidade. Escolha os cursos que mais se encaixam com suas pretensões profissionais!
</h3>

</div>

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
    
<span className={styles.certificateddescription}>Você já ouviu falar da Lessionato? <br /> <br />


Somos uma empresa de cursos livres que oferece uma ampla variedade de cursos de atualização e qualificação profissional. <br /> <br />

Os cursos livres são uma ótima maneira de aprender novas habilidades, se atualizar na sua área ou mudar de carreira. <br /><br />

Podem ser utilizados junto ao empregador, concursos e instituições educacionais, porém devem ser verificadas pelo educando se o certificado é aceito. <br /><br />
os cursos livres são uma modalidade de ensino legal e regulamentada no Brasil. Eles são uma importante oportunidade para que os trabalhadores possam se qualificar e atualizar suas competências, de forma a melhorar sua empregabilidade e seu desempenho no mercado de trabalho.



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