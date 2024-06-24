import React from 'react'
import Header from '../components/Header';
import Slaider from '../components/Slider/Slider.jsx';

function Home() {
const mockImagenes = [
"src/assets/slaider1.jpg",
"src/assets/slaider2.jpg",
"src/assets/slaider3.jpg",
"src/assets/slaider4.jpg"
];

  return (
  <div>
      <Header/>
      <Slaider imagenes={mockImagenes} />
  </div>
  
  )
}

export default Home;