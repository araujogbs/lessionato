
import { Link } from 'react-router-dom'
import { useState } from 'react';


{/* IMPORTS HEADER*/ }


import logo from "./../../assets/logos/logobrancafundopng.png"
import logoescrita from "./../../assets/logos/lessionato logo escrito.png"
import loginIcon from "./../../assets/header/login.png"
import registerIcon from "./../../assets/header/register.png"
import ytlogo from "./../../assets/header/social medias/youtube.svg"
import instalogo from "./../../assets/header/social medias/instagram.svg"
import twitterlogo from "./../../assets/header/social medias/twitter.svg"
import cart from "./../../assets/header/cart.svg"
import menubaropen from '../../assets/header/menubar/sidemenu.svg'

import styles from "./header.module.css"

// ... (importações e estilos)

function Header() {
    const [isNavPagesVisible, setIsNavPagesVisible] = useState(false);

    const toggleNavPagesVisibility = () => {
        setIsNavPagesVisible(!isNavPagesVisible);
    };

    const closeNavPages = () => {
        setIsNavPagesVisible(false);
    };

    const handleInstagramClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
        window.open("https://www.instagram.com/lessionato", '_blank');
    };

    return (
        <div className={styles.header}>
            <div className={styles.aboveHeader}>
                <span>Lessionato Educação Online</span>
                <div className={styles.loginAndRegister}>
                    <Link to="/lessionato/login"><h1 id={styles.loginicon}> <img src={loginIcon} alt='login' /></h1></Link>
                    <Link to="/lessionato/cadastro"><h1 id={styles.registericon}> <img src={registerIcon} alt="cadastre-se" /></h1></Link>
                </div>
            </div>
            <div className={styles.navbar}>
                <img
                    className={styles.menubaropen}
                    src={menubaropen}
                    alt=""
                    onClick={toggleNavPagesVisibility}
                />
                <div className={styles.logo}>
                <Link to="/lessionato/" onClick={closeNavPages}>  <img id={styles.logolessionatoheader} src={logo} alt="logo lessionato" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <img id={styles.logoescrita} src={logoescrita} alt="" />

                    </Link>

                </div>
                <ul className={`${styles.navpages} ${isNavPagesVisible ? '' : styles.hidden}`}>
                    <Link to="/lessionato/" onClick={closeNavPages}><li>Home</li></Link>
                    <Link to="/lessionato/cursos" onClick={closeNavPages}><li>Cursos</li></Link>
                    <Link to="/lessionato/certificado" onClick={closeNavPages}><li>Certificado</li></Link>
                    <Link to="/lessionato/FAQ" onClick={closeNavPages}><li>FAQ</li></Link>
                    <Link to="/lessionato/quem-somos" onClick={closeNavPages}><li>Quem somos</li></Link>
                </ul>
                <div className={styles.socialMediasAndCart}>
                    <ul className={styles.socialmedias}>
                        <li> <img src={ytlogo} alt="canal do youtube" /></li>
                        <li> <img src={twitterlogo} alt="perfil do twitter" /></li>
                        <li>
                            <a href="https://www.instagram.com/lessionato" target='_blank' onClick={handleInstagramClick}>
                                <img src={instalogo} alt="perfil do instagram" />
                            </a>
                        </li>
                    </ul>
                    <img id={styles.cart} src={cart} alt="carrinho de compras" />
                </div>
            </div>
            <div id={styles.line}></div>
        </div>
    );
}

export default Header;


