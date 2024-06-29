import React from "react";
import ContactInformation from "../components/Contact/information";
import Header from "../components/Header";
import TitleContact from "../components/Contact/ContactTitle";
import ContactMessage from "../components/Contact/MessageContact";
import Footer from "../components/Footer";

function ContactDescription() {
  return (
    <div>
      <Header />
      <div className="bg-[#433254] h-[390px] relative">
        <div className="opacity-[0.12] w-full h-full object-cover bg-[url('src/assets/slaider5.jpg')] bg-fixed"></div>
        <div className="absolute top-0 left-0">
          <ContactInformation />
        </div>
      </div>
      <TitleContact />
      <ContactMessage />
      <Footer />
    </div>
  );
}

export default ContactDescription;
