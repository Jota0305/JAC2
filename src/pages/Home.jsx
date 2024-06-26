import React from "react";
import Header from "../components/Header";
import ImageSlider from "../components/Slider/Slider.jsx";
import Cards from "../components/Cards.jsx"
import Main from "../components/Main.jsx"
import SectionCount from "../components/Home/SectionCount.jsx";
import Footer from "../components/Footer.jsx"

function Home() {

  return (
    <div>
      <Header />
      <ImageSlider/>
      <Main/>
      <Cards/>
      <SectionCount/>
      <Footer/>
    </div>
  );

}

export default Home;
