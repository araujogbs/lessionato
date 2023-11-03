import imgcarousel from  "./../../../assets/carousel/Rectangle 36.png"
import styles from "./Carousel.module.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from "swiper/modules"
import img1 from  "./../../../assets/carousel/carrousel1.png"
import img2 from  "./../../../assets/carousel/carrousel2.png"
import img3 from  "./../../../assets/carousel/carrousel3.png"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'






function Carousel(){
    
const slides = [img1, img2, img3];


    return(

        <>
        
        <Swiper
        
        navigation
        pagination>
            {slides.map(slides => (
                <SwiperSlide>

                    <img src={slides} alt="slides" />

                    </SwiperSlide>
            ) )}
        </Swiper>
        
        </>






    )
}

export default Carousel