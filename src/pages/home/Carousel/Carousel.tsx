import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

import img1 from '../../../assets/carousel/teste3.jpg';
import img2 from '../../../assets/carousel/teste1.jpg';
import img3 from '../../../assets/carousel/teste2.jpg';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];
  const imageCount = images.length;
  const delay = 3000; // Tempo em milissegundos para trocar as imagens automaticamente

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + imageCount) % imageCount);
  };

  useEffect(() => {
    // Configura um intervalo para trocar automaticamente as imagens
    const interval = setInterval(nextImage, delay);

    // Limpa o intervalo quando o componente é desmontado
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          style={{ transition: 'opacity 1s ease-in-out' }}
        />
      </div>
      <button onClick={prevImage} className={styles.prevButton}>
        &#9664;
      </button>
      <button onClick={nextImage} className={styles.nextButton}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
