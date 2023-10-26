import "./Header.css"
import logo from "./../../assets/logos/logobrancafundopng.png"
import logoescrita from "./../../assets/logos/lessionato logo escrito.png"
import loginIcon from "./../../assets/header/loginIcon.svg"
import registerIcon from "./../../assets/header/registerIcon.svg"
import ytlogo from "./../../assets/header/social medias/youtube.svg"
import instalogo from "./../../assets/header/social medias/instagram.svg"
import twitterlogo from "./../../assets/header/social medias/twitter.svg"
import cart from "./../../assets/header/cart.svg"


function Header() {
    return (
        <>

            <div className="aboveHeader">

                <span>Lessionato Educação Online</span>

                <div className="loginAndRegister" >

                     <h1 id="loginicon"> <img src={loginIcon} alt="login" />&nbsp; Login</h1>
                    

                     <h1 id="registericon" > <img src={registerIcon} alt="cadastre-se" />&nbsp; Cadastre-se</h1>


                </div>



            </div>



            <div className="navbar">
                <div className="logos">
                <img id="logolessionato" src={logo} alt="sadsa" />&nbsp;&nbsp;&nbsp;&nbsp;
                <img id="logoescrita" src={logoescrita} alt="" />
                </div>

                <ul className="navpages">
                    <li>Home</li>
                    <li>Cursos</li>
                    <li>Certificado</li>
                    <li>FAQ</li>
                    <li>Quem somos</li>
                </ul>


<div className="socialMediasAndCart">
                <ul className="socialmedias">
                    <li> <img src={ytlogo} alt="canal do youtube" /></li>
                    <li><img src={twitterlogo} alt="perfil do twitter" /></li>
                    <li><img src={instalogo} alt="perfil do instagram" /></li>
                </ul>

                <img id="cart" src={cart} alt="carrinho de compras" />
                </div>
            </div>
            <div id="line"></div>

        </>
    )

}

export default Header