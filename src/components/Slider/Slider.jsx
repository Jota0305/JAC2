import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

  const images = [
    'src/assets/slaider1.jpg',
    'src/assets/slaider2.jpg',
    'src/assets/slaider3.jpg',
    'src/assets/slaider4.jpg',

  ];

  return (
    <div className="w-full overflow-hidden">
      <Slider>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full h-[590px] object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;