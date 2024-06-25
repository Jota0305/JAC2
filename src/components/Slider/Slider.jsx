import React, { useRef } from "react";
import Slider from "react-slick";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const sliderRef = useRef(null); // Referencia al slider para controlar la navegación

  const images = [
    {
      src: "src/assets/slaider1.jpg",
      texts: [
        { text: "Dental Care For Life", className: "text-lg font-bold" },
        { text: "Experience, Trust And", className: "text-6xl font-bold" },
        { text: "Proven Success", className: "text-6xl font-bold" },
      ],
    },
    {
      src: "src/assets/slaider3.jpg",
      texts: [
        { text: "Care For Your Smile", className: "text-lg font-bold" },
        { text: "Get All The Essential", className: "text-6xl font-bold" },
        { text: "Dental Care Today", className: "text-6xl font-bold" },
      ],
    },
    {
      src: "src/assets/slaider2.jpg",
      texts: [
        { text: "Dental Care For Life", className: "text-lg font-bold" },
        { text: "Experience, Trust And", className: "text-6xl font-bold" },
        { text: "Proven Success", className: "text-6xl font-bold" },
      ],
    },
    {
      src: "src/assets/slaider4.jpg",
      texts: [
        { text: "Care For Your Smile", className: "text-lg font-bold" },
        { text: "Get All The Essential", className: "text-6xl font-bold" },
        { text: "Dental Care Today", className: "text-6xl font-bold" },
      ],
    },
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
                src={image.src}
                alt={`Slide ${index}`}
                className="opacity-50 w-full h-[590px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center z-1 text-white">
                {image.texts.map((textItem, textIndex) => (
                  <div key={textIndex} className={` ${textItem.className}`}>
                    {textItem.text}
                  </div>
                ))}
                <a
                  href="#"
                  className="bg-rose-500 font-bold transition ease-in-out duration-600 hover:bg-violet-900 text-white py-3 px-5 rounded-lg mt-11"
                >
                  Ver Nuestro Servicios
                </a>
              </div>
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
