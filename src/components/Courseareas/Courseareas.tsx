import Card1 from "../Coursecards/Card1"
import Card10 from "../Coursecards/Card10"
import Card11 from "../Coursecards/Card11"
import Card12 from "../Coursecards/Card12"
import Card2 from "../Coursecards/Card2"
import Card3 from "../Coursecards/Card3"
import Card4 from "../Coursecards/Card4"
import Card5 from "../Coursecards/Card5"
import Card6 from "../Coursecards/Card6"
import Card7 from "../Coursecards/Card7"
import Card8 from "../Coursecards/Card8"
import Card9 from "../Coursecards/Card9"
import division from "./../../assets/divisions/Rectangle 27.png"
import "./Courseareas.css"
import btnicon from "./../../assets/courseareas/btnicon.svg"

function Courseareas(){
return(
    <>

<div className="areatitle">
    <h1 id="title">Áreas mais acessadas</h1>

    <h3 id="description">Estamos sempre atualizando nossa grade de cursos online. 
        Não fique para trás, escola sua área e se inscreva agora mesmo nos nossos lançamentos!</h3>

    </div>

<div className="coursecards">

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

    <img className="division" src={division} alt="" />

    </div>

    <div className="courseareasbtn">

    <button className="btn">Lista de áreas <img id="btnicon" src={btnicon} alt="" /></button>

    </div>
    
    
    
    
    </>


)
}

export default Courseareas