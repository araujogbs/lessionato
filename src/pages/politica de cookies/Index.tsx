import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'


import styles from "./Politicadecookies.module.css"

export function PoliticaDeCookies() {
    return(

        <>
<Header/>

        <div className={styles.politicadecookies}>
        

        

        <h1 className={styles.title} >Política de Cookies</h1>



        <h2 className={styles.title2} >O que são cookies?</h2>
        <span className={styles.description} >Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são usados para lembrar suas preferências e configurações, como idioma, tamanho da fonte e outras personalizações de exibição. Os cookies também podem ser usados para coletar informações sobre como você usa um site, como as páginas que você visita e os links em que clica.
</span>

<h2 className={styles.title2} >Por que usamos cookies?</h2>
        <span className={styles.description} >* Para melhorar o desempenho do site: Os cookies podem ajudar a melhorar o desempenho do site, armazenando informações sobre as páginas que você visita e os links em que clica. Isso nos ajuda a entender como os visitantes usam nosso site e a fazer melhorias.

</span>

<h2 className={styles.title2} >Que tipos de cookies usamos?</h2>
        <span className={styles.description} >* Cookies essenciais: Esses cookies são necessários para o funcionamento do nosso site. Eles incluem cookies que permitem que você se autentique em nossa área de membros e que armazene itens no seu carrinho de compras.

</span>



</div>

<Footer/>

</>
    )
}

export default PoliticaDeCookies