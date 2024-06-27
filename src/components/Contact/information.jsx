import React from "react";
import { InformationContact } from "../ServiceClinical/Tarjet";

const ContactInformation = ({ icono, title, description }) => {
  return (
    <div className="overflow-hidden p-11 h-72 w-9/12 bg-white border-2 border-transparent rounded-lg transition-all duration-300 ease-in-out hover:border-blue-900">
      <div
        className="text-blue-900 hover:text-red-600 transition-colors 
            duration-300 ease-in-out"
      >
        {icono}
      </div>
      <h2
        className="text-2xl font-bold hover:text-red-600 transition-colors 
            duration-300 ease-in-out my-2"
      >
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

const ContactInformations = () => {
  return (
    <div>
      <div className="mx-56 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
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
