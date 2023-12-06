{/* IMPORTS FOOTER*/ }


import { Link } from "react-router-dom"
import lessionatologofooter from "./../../assets/logos/lessionato logo escrito.png"

import styles from "./footer.module.css"

function Footer() {
    return(
        

            <div className={styles.footer}>

<ul>
    <li>Gemba Serviços & Consultorias</li>
    <li>CPNJ:&nbsp;&nbsp;&nbsp;  50.378.662/0001-78</li> 
    <li><img className={styles.logofooter} src={lessionatologofooter} alt="" /></li>   
    <li></li>
</ul>


<ul>
    <h3>Institucional </h3>
    <Link to="/lessionato/quem-somos"><li>Quem somos</li></Link>
    <Link to="/lessionato/politica-de-privacidade"> <li>Política de Privacidade</li></Link> 
    <Link to="/lessionato/politica-de-cookies"> <li>Política de Cookies</li></Link> 
    <Link to="/lessionato/regras-e-condicoes"><li>Regras e Condições</li></Link>
</ul>







<ul>
<h3>Links Úteis</h3>
    <Link to="/lessionato/FAQ"><li>FAQ</li></Link>
    <li>Legislação</li>
    <li>Modelo de Certificado</li>
    <li>Validação de Certificado</li>
    <li>Redes Sociais</li>
    <li>Fale conosco</li>
</ul>

<ul>
    <h3>Cursos</h3>
    <li>Lista de cursos</li>
    <li>Lista de áreas</li>
</ul>

</div>


    )
}

export default Footer

