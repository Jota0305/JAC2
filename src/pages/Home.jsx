import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/Slider/Slider.jsx";
import Cards from "../components/Cards.jsx"
import SectionCount from "../components/Home/SectionCount.jsx";

function Home() {

  return (
    <div>
      <Header />
      <ImageSlider/>
      <Cards/>
      <SectionCount/>
    </div>
  );

}

export default Home;
