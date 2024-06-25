import React from "react";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import ServiceDescription from "./pages/Service.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<About/>} />
        <Route path="/service" element={<ServiceDescription/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

