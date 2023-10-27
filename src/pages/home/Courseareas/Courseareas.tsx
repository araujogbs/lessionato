import Card1 from "../../../components/Areacards/Card1"
import Card10 from "../../../components/Areacards/Card10"
import Card11 from "../../../components/Areacards/Card11"
import Card12 from "../../../components/Areacards/Card12"
import Card2 from "../../../components/Areacards/Card2"
import Card3 from "../../../components/Areacards/Card3"
import Card4 from "../../../components/Areacards/Card4"
import Card5 from "../../../components/Areacards/Card5"
import Card6 from "../../../components/Areacards/Card6"
import Card7 from "../../../components/Areacards/Card7"
import Card8 from "../../../components/Areacards/Card8"
import Card9 from "../../../components/Areacards/Card9"
import division from "./../../../assets/divisions/Rectangle 27.png"
import styles from "./Courseareas.module.css"
import btnicon from "./../../../assets/courseareas/btnicon.svg"

function Courseareas(){
return(
    <>

<div className={styles.areatitle}>
    <h1 id={styles.title}>Áreas mais acessadas</h1>

    <h3 id={styles.description}>Estamos sempre atualizando nossa grade de cursos online. 
        Não fique para trás, escola sua área e se inscreva agora mesmo nos nossos lançamentos!</h3>

    </div>

<div className={styles.coursecards}>

    <Card1/>

    <Card2/>

    <Card3/>

    <Card4/>

    <Card5/>
    
    <Card6/>

    <Card7/>

    <Card8/>

    <Card9/>

    <Card10/>

    <Card11/>

    <Card12/>

    <img className={styles.division} src={division} alt="" />

    </div>

    <div className={styles.courseareasbtn}>

    <button  className={styles.btn}>Lista de áreas <img id={styles.btnicon} src={btnicon} alt="" /></button>

    </div>
    
    
    
    
    </>


)
}

export default Courseareas