import React from "react";
import { InformationContact } from "../ServiceClinical/Tarjet";

const ContactInformation = ({ icono, title, description }) => {
  return (
    <div
      className="overflow-hidden p-11 h-52 w-9/12
     bg-white border-2 border-transparent rounded-lg 
     transition-all duration-300 ease-in-out
      hover:border-blue-900 my-10 mx-12"
    >
      <div className="mx-">
        <div
          className="text-blue-900 hover:text-red-600 transition-colors 
            duration-300 ease-in-out flex justify-center "
        >
          {icono}
        </div>
        <div className="flex justify-center">
          <h2
            className="text-2xl font-bold hover:text-red-600
            transition-colors 
            duration-300 ease-in-out my-2"
          >
            {title}
          </h2>
        </div>
        <div className="mx-16">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ContactInformations = () => {
  return (
    <div className="">
      <div className="mx-56 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {InformationContact.map((container, index) => (
          <ContactInformation
            key={index}
            icono={container.icono}
            title={container.title}
            description={container.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInformations;
