import React from "react";

const ContactMessage = () => {
  return (
    <div className="flex justify-center gap-8">
      <div>
        <div className="flex flex-col">
          <label htmlFor="">Nombre*</label>
          <input
            type="text"
            className="bg-red-500 h-[50px] w-[560px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Correo*</label>
          <input
            type="email"
            className="bg-red-500 h-[50px] w-[560px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Mensaje*</label>
          <textarea
            name=""
            id=""
            className="bg-red-500 h-[125px] w-[560px] rounded-2xl"
          ></textarea>
        </div>
        <button className="h-[54px] w-[560px] bg-gray-800 text-white rounded-2xl">
          Enviar
        </button>
      </div>
      <div className="bg-slate-600 h-[450px] w-[590px] rounded-2xl"></div>
    </div>
  );
};

export default ContactMessage;
