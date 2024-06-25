import React, { useState } from 'react';
import ServiceDescription from '../pages/Service';


import {
  RiMap2Line,
  RiMailLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Link } from 'react-router-dom';
//import Service from './ServiceClinical/OurService';

function Header() {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div className="font-fuentPrincipal">
      <div className="bg-violet-900 flex justify-center text-white">
        <div className="flex gap-10  p-2 ">
          <h4 className="flex items-center gap-2">
            <RiMap2Line />
            Calle siempre feliz #5410, El Boaque , Trujillo
          </h4>
          <h4 className="flex items-center gap-2">
            <RiMailLine />
            informes@clinicadental.com
          </h4>
        </div>
        <div className="flex gap-10 ml-80">
          <a className="flex items-center text-rose-500 font-bold" href="">
            RESERVA TU CITA
          </a>
          <h4 className="flex items-center">
            Atencion personalizada las 24 horas
          </h4>
        </div>
      </div>
      <div className="flex justify-center p-6">
        <div className="flex items-center">
          <a className="font-bold text-4xl text-rose-500" href="/home">
            Dent<span className="text-black">ile</span>
          </a>
        </div>
        <div className="ml-40 flex items-center">
          <ul className="flex items-center gap-10">
            <li>
              <a
                className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600 "
                href="#"
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600 "
                href="#"
              >
                ACERCA DE
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600 "
                href="/service"
              >
                SERVICIOS
              </a>
            </li>
            <li className="relative group">
              <a
                className="flex items-center h-5 hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600 cursor-pointer"
                onClick={toggleSubMenu}
              >
                BLOG <RiArrowDownSLine className="ml-1" />
              </a>
              <ul
                className={`mt-1 bg-white w-28 p-2 border rounded-lg absolute left-2 -translate-x-1/2 ml-10 ${
                  isSubMenuVisible ? "block" : "hidden"
                }`}
              >
                <li className="mb-2">
                  <a
                    className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600"
                    href=""
                  >
                    BLOG
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600"
                    href=""
                  >
                    SIMPLE
                  </a>
                </li>
                <li>
                  <a
                    className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600"
                    href=""
                  >
                    COMPLETO
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="hover:border-b-2 hover:border-red-500 transition ease-in-out duration-600 "
                href="#"
              >
                CONTACTANOS
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ml-40">
          <div className="flex items-center">
            <button className="flex items-center justify-center  w-10 h-10 bg-red-500 rounded-full hover:bg-violet-900">
              <a className="text-white font-bold text-2xl " href="#">
                <RiSearchLine />
              </a>
            </button>
          </div>
          <div className="ml-6">
            <h3>Llámenos para cualquier pregunta</h3>
            <h1 className="font-bold text-2xl">+51 935200000</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
