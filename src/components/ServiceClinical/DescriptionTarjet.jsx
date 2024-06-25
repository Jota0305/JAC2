import React from 'react';
import { containers } from './Tarjet';


const ImgContainer = ({ imageUrl, title, description }) => {
  return (
    <div className='p-4 mt-4  border-2 border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-blue-900'>
      <img src={imageUrl} alt={title} className='w-full h-auto rounded-2xl
       scale-90 hover:scale-100 duration-700'/>
      <h3 className='text-lg font-semibold mt-2 text-center' >{title}</h3>
      <p className='text-sm text-center' >{description}</p>
      <button className='bg-blue-900 hover:bg-red-700 
      text-white font-bold py-2 px-8 rounded mt-2 ml-48 
      '>Cotizar</button>
    </div>
  );
};

const ImgContainers = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {containers.map((container, index) => (
        <ImgContainer
          key={index}
          imageUrl={container.imageUrl}
          title={container.title}
          description={container.description}
        />
      ))}
    </div>
    </div>
  );
};

export default ImgContainers;
