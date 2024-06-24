// import react from "@vitejs/plugin-react-swc";
import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidad == 0)
    return;

  const siguienteImagen = () =>{ setImagenActual(imagenActual == cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual == 0 ? cantidad - 1 : imagenActual -1);
  };

    return (
      <div className="flex flex-row justify-center">
        <button onClick={anteriorImagen}>
          <RiArrowLeftSLine />
        </button>
        {imagenes.map((imagen, index) => {
          return (
            <div>
              {imagenActual == index && (
                <img key={index} src={imagen} alt="imagen" />
              )}
            </div>
          );
        })}
        <button onClick={siguienteImagen}>
          <RiArrowRightSLine />
        </button>
      </div>
    );
}

export default Slider;
