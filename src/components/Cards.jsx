import React from "react";
import { LuSignal } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaEarListen } from "react-icons/fa6";

function Cards() {
  return (
    <div className="w-full h-[410px] bg-white flex justify-center items-center gap-24">
      <div className="mt-10 w-60 bg-violet-100 rounded-lg px-5 py-16 h-60 relative text-center hover:bg-black hover:text-white transition duration-300 ease-in-out transform">
        <div className="bg-rose-500 rounded-full w-16 h-16 absolute -top-9 left-[90px]">
          <div className="absolute left-5 bottom-5 text-[25px] text-white">
            <LuSignal />
          </div>
        </div>
        <h1 className="mb-3 font-[800] text-[20px]">Dental Brige</h1>

        <p className="mb-4">
          Miembros de Mecenas eu commodo ligula eget dolor dolor let amet ligula
        </p>

        <a className="text-rose-500 text-[18px] font-[800]" href="#">
          Leer más
        </a>
      </div>
      <div className="mt-10 w-60 bg-violet-100 rounded-lg px-5 py-16 h-60 relative text-center hover:bg-black hover:text-white transition duration-300 ease-in-out transform">
        <div className="bg-rose-500 rounded-full w-16 h-16 absolute -top-9 left-[90px]">
          <div className="absolute left-5 bottom-5 text-[25px] text-white">
            <FaEarListen />
          </div>
        </div>
        <h1 className="mb-3 font-[800] text-[20px]">Dental Brige</h1>

        <p className="mb-4">
          Miembros de Mecenas eu commodo ligula eget dolor dolor let amet ligula
        </p>

        <a className="text-rose-500 text-[18px] font-[800]" href="#">
          Leer más
        </a>
      </div>
      <div className="mt-10 w-60 bg-violet-100 rounded-lg px-5 py-16 h-60 relative text-center hover:bg-black hover:text-white transition duration-300 ease-in-out transform">
        <div className="bg-rose-500 rounded-full w-16 h-16 absolute -top-9 left-[90px]">
          <div className="absolute left-5 bottom-5 text-[25px] text-white">
            <IoDiamondOutline />
          </div>
        </div>
        <h1 className="mb-3 font-[800] text-[20px]">Dental Brige</h1>

        <p className="mb-4">
          Miembros de Mecenas eu commodo ligula eget dolor dolor let amet ligula
        </p>

        <a className="text-rose-500 text-[18px] font-[800]" href="#">
          Leer más
        </a>
      </div>
      <div className="mt-10 w-60 bg-violet-100 rounded-lg px-5 py-16 h-60 relative text-center hover:bg-black hover:text-white transition duration-300 ease-in-out transform">
        <div className="bg-rose-500 rounded-full w-16 h-16 absolute -top-9 left-[90px]">
          <div className="absolute left-5 bottom-5 text-[25px] text-white">
            <FaWandMagicSparkles />
          </div>
        </div>
        <h1 className="mb-3 font-[800] text-[20px]">Dental Brige</h1>

        <p className="mb-4">
          Miembros de Mecenas eu commodo ligula eget dolor dolor let amet ligula
        </p>

        <a className="text-rose-500 text-[18px] font-[800]" href="#">
          Leer más
        </a>
      </div>
    </div>
  );
}

export default Cards;
