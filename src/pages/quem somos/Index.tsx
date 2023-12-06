import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'


import styles from "./Quemsomos.module.css"

export function Quemsomos() {
    return(

        <>
<Header/>

        <div className={styles.quemsomos}>
        

        

        <h1 className={styles.title} >Quem somos?</h1>


        <span className={styles.description} >A LESSIONATO é uma marca de ensino à distância privada com sede na cidade de São Paulo – SP, pertencente a GEMBA Serviços & Consultoria LTDA – CNPJ 50.378.662/001-78.
O desenvolvimento da marca e dos serviços educacionais estão intimamente ligados à missão da empresa em oferecer serviços de qualidade atendendo a expectativa dos clientes disseminando conhecimento e valorizando princípios éticos.
Atualmente disponibilizamos mais de 100 cursos livres que possuem autenticação para auxiliar a capacitação e aprendizado.
A atuação da empresa está amparada pela Lei 9.394/96 e Decreto Presidencial nº 5.154/04.
</span>

        
</div>

<Footer/>

</>
    )
}

export default Quemsomos