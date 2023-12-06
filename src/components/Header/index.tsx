import { Link } from 'react-router-dom'

{/* IMPORTS HEADER*/ }


import logo from "./../../assets/logos/logobrancafundopng.png"
import logoescrita from "./../../assets/logos/lessionato logo escrito.png"
import loginIcon from "./../../assets/header/loginIcon.svg"
import registerIcon from "./../../assets/header/registerIcon.svg"
import ytlogo from "./../../assets/header/social medias/youtube.svg"
import instalogo from "./../../assets/header/social medias/instagram.svg"
import twitterlogo from "./../../assets/header/social medias/twitter.svg"
import cart from "./../../assets/header/cart.svg"

import styles from "../../pages/home/styles.module.css"

function Header() {
    return (

        <>

<div className={styles.aboveHeader}>

                <span>Lessionato Educação Online</span>

                <div className={styles.loginAndRegister} >

                    <h1 id={styles.loginicon}> <img src={loginIcon} alt={styles.login} />&nbsp; Login</h1>


                    <h1 id={styles.registerIcon} > <img src={registerIcon} alt="cadastre-se" />&nbsp; Cadastre-se</h1>


                </div>



            </div>



            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img id={styles.logolessionatoheader} src={logo} alt="logo lessionato" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <img id={styles.logoescrita} src={logoescrita} alt="" />
                </div>

                <ul className={styles.navpages}>
                    <Link to="/lessionato/"><li>Home</li></Link> 
                    <Link to="/lessionato/cursos"><li>Cursos</li></Link> 
                    <li>Certificado</li>
                    <Link to="/lessionato/FAQ"><li>FAQ</li></Link>
                    <Link to="/lessionato/quem-somos"><li>Quem somos</li></Link>
                </ul>


                <div className={styles.socialMediasAndCart}>
                    <ul className={styles.socialmedias}>
                        <li> <img src={ytlogo} alt="canal do youtube" /></li>
                        <li><img src={twitterlogo} alt="perfil do twitter" /></li>
                        <li ><img src={instalogo} alt="perfil do instagram" /></li>
                    </ul>

                    <img id={styles.cart} src={cart} alt="carrinho de compras" />
                </div>
            </div>
            <div id={styles.line}></div>
            </>

    )}

    export default Header