import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const CarouselExample = () => {
  return (
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      showThumbs={false}
      showStatus={false}
      className="carousel-container"
    >
      <div>
        <img src="https://www.40defiebre.com/wp-content/uploads/2012/10/carrusel_slider.png" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div>
        <img src="https://ayudawp.com/wp-content/uploads/2021/06/carrusel-fotos.png" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div>
        <img src="https://ayudawp.com/wp-content/uploads/2021/06/slider-porfolio.png" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
      <div>
        <img src="https://www.rocketwp.com.br/wp-content/uploads/2019/03/plugins-slider.jpeg" alt="Image 4" />
        <p className="legend">Image 4</p>
      </div>
    </Carousel>
  );
};

export default CarouselExample;
