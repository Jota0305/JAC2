import React from "react";
import Service from "../components/ServiceClinical/OurService";
import ImgContainers from "../components/ServiceClinical/DescriptionTarjet";
import Header from "../components/Header";

function ServiceDescription(){
    return(
        <div>
            <Header/>
            <Service/>
            <ImgContainers/>
        </div>
    )
};
export default ServiceDescription;

