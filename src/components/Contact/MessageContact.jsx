import React from "react";

const ContactMessage = () => {
  return (
    <div className="flex justify-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Nombre*</label>
          <input
            type="text"
            className="bg-[#FAF5FF] h-[50px] w-[560px] rounded-lg border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Correo*</label>
          <input
            type="email"
            className="bg-[#FAF5FF] h-[50px] w-[560px] rounded-lg border-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Mensaje*</label>
          <textarea
            name=""
            id=""
            className="bg-[#FAF5FF] h-[125px] w-[560px] rounded-lg border-gray-300"
          ></textarea>
        </div>
        <button className="h-[54px] w-[560px] bg-[#400082] text-white rounded-lg border-gray-300">
          Enviar
        </button>
      </div>
      <div className="bg-slate-600 h-[450px] w-[590px] rounded-lg border-gray-300">
        <img
          src="./src/assets/tarjet/direccion.png"
          alt=""
          className="h-[450px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactMessage;
