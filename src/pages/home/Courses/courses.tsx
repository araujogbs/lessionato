import background from "./../../../assets/divisions/Rectangle 33.png"
import styles from "./courses.module.css"

import Card1 from "../../../components/Coursecards/Card1"
import Card2 from "../../../components/Coursecards/Card2"
import Card3 from "../../../components/Coursecards/Card3"
import Card4 from "../../../components/Coursecards/Card4"
import Card5 from "../../../components/Coursecards/Card5"
import Card6 from "../../../components/Coursecards/Card6"
import Card7 from "../../../components/Coursecards/Card7"
import Card8 from "../../../components/Coursecards/Card8"
import Card9 from "../../../components/Coursecards/Card9"
import Card10 from "../../../components/Coursecards/Card10"
import Card11 from "../../../components/Coursecards/Card11"
import Card12 from "../../../components/Coursecards/Card12"
import Card13 from "../../../components/Coursecards/Card13"
import Card14 from "../../../components/Coursecards/Card14"
import Card15 from "../../../components/Coursecards/Card15"

function courses(){
    return(

        <>
       

<div className={styles.areatitle}>


    </div>

    <div className={styles.coursecards} >

        

    <Card1/>

    <Card2/>

    <Card3/>

    <Card4/>

    <Card5/>

    <Card6/>

    <Card7/>

    <Card8/>

    <Card9/>

    <Card10/>

    <Card11/>

    <Card12/>

    <Card13/>

    <Card14/>

    <Card15/>
    <img className={styles.background} src={background} alt="" />

    </div>

    
    
        
        </>
    )
}

export default courses