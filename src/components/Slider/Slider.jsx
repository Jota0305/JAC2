import React, { useRef } from "react";
import Slider from "react-slick";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null); // Referencia al slider para controlar la navegación

  const images = [
    "src/assets/slaider1.jpg",
    "src/assets/slaider2.jpg",
    "src/assets/slaider3.jpg",
    "src/assets/slaider4.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const adelante = () => {
    sliderRef.current.slickNext(); // Avanzar al siguiente slide
  };

  const atras = () => {
    sliderRef.current.slickPrev(); // Retroceder al slide anterior
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative bg-black">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="opacity-50 w-full h-[590px] object-cover"
              />

              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-4 rounded-md hover:opacity-50"
                onClick={atras}
              >
                <RiArrowLeftSLine />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-4 rounded-md hover:opacity-50"
                onClick={adelante}
              >
                <RiArrowRightSLine />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
