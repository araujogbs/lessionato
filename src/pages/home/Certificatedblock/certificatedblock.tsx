import styles from "./certificatedblock.module.css"
import lessionatologo from "./../../../assets/logos/1.png"
import lessionatologoL from "./../../../assets/logos/lessionatologoblock1.png"
import division from "./../../../assets/divisions/Rectangle 32.png"
import certificatedlogo from "./../../../assets/certificatedblock/certificadologo.png"
import certificated from "./../../../assets/certificatedblock/certificated.png"

function CertificatedBlock() {
    return (
<>
        

            <img className={styles.division} src={division} alt="" />

            <div className={styles.certificatedblock}>


<div>
    <img id={styles.logolessionatoL} src={lessionatologoL} alt="" />
            <img id={styles.logolessionato} src={lessionatologo} alt="logo lessionato" />
            </div>


            <h1 className={styles.title}>Certificado Digital <img src={certificatedlogo} alt="logo do certificado" /></h1>


            <div className={styles.descriptionandcertificated}> 
                
            <span className={styles.certificateddescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
            <br /><br /><br />

                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <img className={styles.certificated} src={certificated} alt="exemplo de certificado" />

            </div>







            </div>

            </>
    )
}

export default CertificatedBlock