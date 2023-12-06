import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'


import styles from "./FAQ.module.css"

export function FAQ() {
    return(

        <>
<Header/>

        <div className={styles.faq}>
        

        

        <h1 className={styles.title} >FAQ</h1>



        <h2 className={styles.title2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore debitis culpa ut natus iste, magnam nisi nemo deserunt dicta voluptatum mollitia, dolores vero repudiandae pariatur ratione enim. Laudantium, dignissimos?</h2>
        <span className={styles.description} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos? Repellat optio qui modi quam tempore iure fugit minus, impedit, aliquam accusamus consectetur ducimus eos. Minima assumenda dolores incidunt doloribus?
</span>





</div>

<Footer/>

</>
    )
}

export default FAQ