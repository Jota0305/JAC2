import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ServiceDescription from "./pages/Service.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactInformation from "./components/Contact/information.jsx";
import ContactDescription from "./pages/contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/service" element={<ServiceDescription />} />
        <Route path="/contact" element={<ContactDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
