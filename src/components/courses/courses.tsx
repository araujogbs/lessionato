import "./courses.css"
import division from "../../assets/divisions/Rectangle 29.png"

function courses(){
    return(

        <>
        
<img id="division" src={division} alt="" />

<div className="coursesareatitle">
    <h1 id="coursesarea">Áreas mais acessadas</h1>

    <h3 id="description">Estamos sempre atualizando nossa grade de cursos online. 
        Não fique para trás, escola sua área e se inscreva agora mesmo nos nossos lançamentos!</h3>

    </div>
        
        </>
    )
}

export default courses