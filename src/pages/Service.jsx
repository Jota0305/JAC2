import React from "react";
import Service from "../components/ServiceClinical/OurService";
import ImgContainers from "../components/ServiceClinical/DescriptionTarjet";
import Header from "../components/Header";
import SomeMoreFeatures from "../components/ServiceClinical/MoreFeatures";
import FeaturesMoreDescription from "../components/ServiceClinical/DescriptionFeatures";
import SectionCount from "../components/Home/SectionCount";
import Footer from "../components/Footer";

function ServiceDescription() {
  return (
    <div className="">
      <Header />
      <Service />
      <ImgContainers />
      <div className="bg-[#433254] h-[590px] relative">
        <div className="opacity-[0.12] w-full h-full object-cover bg-[url('src/assets/slaider5.jpg')] bg-fixed"></div>
        <div className="absolute top-0 left-0">
          <SomeMoreFeatures />
          <FeaturesMoreDescription />
          <SectionCount />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default ServiceDescription;
