import React from 'react';
import Slider from 'react-slick';
import Step1 from './Step1';
import Step2 from './Step2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <Step1 />
      </div>
      <div>
        <Step2 />
      </div>
    </Slider>
  );
};

export default SliderComponent;
