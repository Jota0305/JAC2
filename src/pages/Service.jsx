import React from "react";
import Service from "../components/ServiceClinical/OurService";
import ImgContainers from "../components/ServiceClinical/DescriptionTarjet";
import Header from "../components/Header";
import SomeMoreFeatures from "../components/ServiceClinical/MoreFeatures";
import FeaturesMoreDescription from "../components/ServiceClinical/DescriptionFeatures";

function ServiceDescription() {
  return (
    <div>
      <Header />
      <Service />
      <ImgContainers />
      <div className="bg-indigo-900">
        <SomeMoreFeatures />
        <FeaturesMoreDescription />
      </div>
    </div>
  );
}
export default ServiceDescription;
