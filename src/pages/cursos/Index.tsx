import Courses from '../home/Courses/courses'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/Index'

import styles from './cursos.module.css'

export function Cursos(){
    return(
        <>

        <Header/>

        
<div className={styles.cursos}>

    <h1 className={styles.title}>Confira todos os nossos cursos</h1>

        <Courses/>
        
        </div>

        <Footer/>
        
        
        </>



    )
}

export default Cursos
