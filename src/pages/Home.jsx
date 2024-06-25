import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/Slider/Slider.jsx";
import Cards from "../components/Cards.jsx"

function Home() {

  return (
    <div>
      <Header />
      <ImageSlider/>
      <Cards/>
    </div>
  );

}

export default Home;
