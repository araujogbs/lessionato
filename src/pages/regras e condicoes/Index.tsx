import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'


import styles from "./regrasecondicoes.module.css"

export function RegraseCondicoes() {
    return(

        <>
<Header/>

        <div className={styles.regrasecondicoes}>
        

        

        <h1 className={styles.title} >REGRAS E CONDIÇÕES</h1>



        
        <span className={styles.description} >* Os cursos são disponibilizados em até 3 dias úteis do pagamento, dependendo da forma utilizada a identificação não é imediata. <br />
* A data de identificação do pagamento é considerada com a data de início do curso. <br /> 
* Os nossos cursos são auto instrucionais para realização à distância e possuem carga horária de 40 horas. <br />
* A geração do certificado somente é realizada após a aprovação na avaliação e considerando o prazo mínimo de 7 dias corridos, sendo este o tempo mínimo adequado para a realização de um curso de 40 horas. <br />
* A avaliação pode ser realizada quantas vezes forem necessárias, pelo prazo de 6 (seis) meses da data do pagamento. <br />
* Após a emissão do certificado de conclusão do curso, não há mais possibilidade de atualização da nota da avaliação. Nesta emissão será considerada a nota mais alta obtida na avaliação até a impressão. <br />
* Após 8 (oito) meses do pagamento, os cursos são deletados do histórico do usuário, porém a consulta a autenticação do certificado continua válida. <br /> 
* Os nossos cursos são auto instrucionais e não possuem acompanhamento de tutor ou educador e são teóricos, sendo desenvolvidos especificamente para realização à distância.

</span>





</div>

<Footer/>

</>
    )
}

export default RegraseCondicoes