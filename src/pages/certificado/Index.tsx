import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'

import certificated from '../../assets/certificatedblock/certificated.png'



import styles from "./certificado.module.css"

export function Certificado() {
    return(

        <>
<Header/>

        <div className={styles.certificado}>
        

        

        <h1 className={styles.title} >Certificado</h1>


<div className={styles.inputarea}>
<label className={styles.label}  htmlFor="">Consulte seu certificado</label>
<span >
<input className={styles.input} type="text" placeholder="Nº de autenticidade" />   <button  className={styles.btn} >consultar</button>
</span>
</div>


<span className={styles.description} ><br /> <br />
    Somos uma empresa de cursos livres que oferece uma ampla variedade de cursos de atualização e qualificação profissional. <br /> <br />

Mas você sabe se o certificado emitido pela Lessionato é reconhecido pelo MEC? <br /> <br />

A resposta é não. <br /> <br /> 

O MEC só autoriza cursos de graduação e pós-graduação. Já as Secretarias Estaduais de Educação autorizam cursos técnicos profissionalizantes e do ensino médio. <br /> <br />

Os cursos livres não se classificam como cursos de graduação, pós-graduação ou técnico profissionalizantes. <br /> <br />

Mas isso não significa que nossos cursos não tenham valor.<br />
A legislação brasileira que rege os cursos livres é composta pelos seguintes atos normativos: <br /> <br />

Constituição Federal, artigo 205, "caput", que prevê que a educação é direito de todos e será incentivada pela sociedade.
Lei nº 9.394, de 20 de dezembro de 1996, que estabelece as Diretrizes e Bases da Educação Nacional. A lei define os cursos livres como uma modalidade de educação profissional, como Educação Profissional de Nível Básico.
Decreto Presidencial nº 5.154, de 23 de julho de 2004, que regulamenta a organização da educação profissional. O decreto estabelece que os cursos livres podem ser ofertados por instituições públicas ou privadas de ensino, sem necessidade de autorização ou reconhecimento do Ministério da Educação (MEC).
Resolução CNE nº 04/99 – MEC (art. 7º, § 3º), de 7 de outubro de 1999, que estabelece normas para a oferta de cursos livres. 
Assim, os cursos livres são uma modalidade de ensino legal e regulamentada no Brasil. Eles são uma importante oportunidade para que os trabalhadores possam se qualificar e atualizar suas competências, de forma a melhorar sua empregabilidade e seu desempenho no mercado de trabalho.

Os cursos livres são uma ótima maneira de aprender novas habilidades, se atualizar na sua área ou mudar de carreira. <br /> <br />

Podem ser utilizados junto ao empregador, concursos e instituições educacionais, porém devem ser verificadas pelo educando se o certificado é aceito. <br /> <br />

Confira o exemplo de um dos nossos certificados: <br /> <br />





</span>

<img className={styles.certificated} src={certificated} alt="exemplo do certificado" />






</div>

<Footer/>

</>
    )
}

export default Certificado