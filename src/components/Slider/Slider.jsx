import React from "react";

function Slider({ imagenes }) {
  return (
    <div className="flex justify-center w-100% h-100%">
      <button></button>
      {imagenes.map((imagen, index) => {
        return <img key={index} src={imagen} alt="imagen" />;
      })}
      <button></button>
    </div>
  );
}

export default Slider;