import styles from "./footer.module.css"
import lessionatologo from "./../../../assets/logos/lessionato logo escrito.png"


function footer() {
    return (



        <>

            <div className={styles.footer}>

                <ul>
                    <li>Gemba Serviços & Consultorias</li>
                    <li>CPNJ:&nbsp;&nbsp;&nbsp;  50.378.662/0001-78</li> 
                    <li><img className={styles.logo} src={lessionatologo} alt="" /></li>   
                    <li></li>
                </ul>


                <ul>
                    <h3>Institucional </h3>
                    <li>Quem somos</li>
                    <li>Política de Privacidade</li>
                    <li>Política de Cookies</li>
                    <li>Regras e Condições</li>
                </ul>


                <ul>
                <h3>Links Úteis</h3>
                    <li>FAQ</li>
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




        </>


    )
}

export default footer