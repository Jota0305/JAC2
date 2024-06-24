import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/Slider/Slider.jsx";
import Main from "../components/Main.jsx";

function Home() {
  // const listaImagenes = [
  //   "src/assets/slaider1.jpg",
  //   "src/assets/slaider2.jpg",
  //   "src/assets/slaider3.jpg",
  //   "src/assets/slaider4.jpg",
  // ];


  return (
    <div>
      <Header />
      <ImageSlider/>
      <Main />
      {/* <Slaider imagenes={listaImagenes} /> */}
    </div>
  );

}

export default Home;
