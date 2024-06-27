import React from "react";
import ContactInformation from "../components/Contact/information";
import Header from "../components/Header";

function ContactDescription() {
  return (
    <div>
      <Header />
      <div className="bg-[#433254] h-[590px] relative">
        <div className="opacity-[0.12] w-full h-full object-cover bg-[url('src/assets/slaider5.jpg')] bg-fixed"></div>
        <div className="absolute top-0 left-0">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
}

export default ContactDescription;
