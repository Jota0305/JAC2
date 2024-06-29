import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { IoBasketballOutline } from "react-icons/io5";
import { FaGooglePlusG } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-customColor w-full h-[600px] flex mt-20 pl-28">
      <div className="w-[600px] h-[550px] border-r-[1px] border-b-[1px] text-justify py-40 px-52 border-white border-opacity-5">
        <a href="/" className="text-rose-500 font-bold mb-5 text-[30px]">
          Dent<span className="text-white">ile</span>
        </a>
        <p className="text-gray-600 w-72">
          Porque, para llegar al más mínimo detalle, nadie debe practicar ningún
          tipo de trabajo a menos que obtenga algún beneficio de él.
        </p>
        <h2 className="text-white font-bold mt-5">Redes Sociales</h2>
        <div className="flex mt-5 gap-4">
          <a className="bg-white w-9 h-9 rounded-full cursor-pointer">
            <BiLogoFacebook className="text-violet-900 ml-[7px] mt-2 w-5 h-5 hover:text-rose-500 transition ease-in-out duration-300" />
          </a>
          <a className="bg-white w-9 h-9 rounded-full cursor-pointer">
            <TiSocialTwitter className="text-violet-900 ml-[7px] mt-2 w-5 h-5 hover:text-rose-500 transition ease-in-out duration-300" />
          </a>
          <a className="bg-white w-9 h-9 rounded-full cursor-pointer">
            <IoBasketballOutline className="text-violet-900 ml-[7px] mt-2 w-5 h-5 hover:text-rose-500 transition ease-in-out duration-300" />
          </a>
          <a className="bg-white w-9 h-9 rounded-full cursor-pointer">
            <FaGooglePlusG className="text-violet-900 ml-2 mt-2 w-5 h-5 hover:text-rose-500 transition ease-in-out duration-300" />
          </a>
        </div>
      </div>
      <div className=" w-full h-[210px]">
        <div className="px-10 py-10">
          <h1 className="text-white font-bold text-[20px]">
            Boletin informativo
          </h1>
          <p className="text-gray-600">
            Al suscribirse a nuestra lista de correo, siempre recibirá nuestras
            últimas noticias y actualizaciones.
          </p>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Introduce tu correo electrónico..."
              className="px-5 w-[500px] h-[55px] text-[18px] mt-5 py-2 rounded-l-lg focus:outline-none focus:ring-0"
            />
            <button className="text-white bg-rose-500 hover:bg-rose-600 transition ease-in-out duration-300 px-10 py-2 h-[55px] w-[200px] rounded-r-lg absolute bottom-0 font-bold">
              ENVIAR
            </button>
          </div>
        </div>
        <hr className="mt-2 text-white opacity-5 w-[740px]" />
        <div className="text-white mt-3 px-10 grid grid-cols-3 w-full pr-[390px] h-[320px] border-b-[1px] border-white border-opacity-5">
          <div>
            <h1 className="tex-white font-bold text-[20px] mb-4">
              Información
            </h1>
            <div className="grid text-gray-600 gap-3">
              <a
                className="hover:text-white transition ease-in-out dura"
                href="/"
              >
                Inicio
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href="/About"
              >
                Acerca De
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href=""
              >
                Blog
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href="/service"
              >
                Servicios
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href="/contact"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white font-bold text-[20px] mb-4">Tratos</h2>
            <div className="grid text-gray-600 gap-3">
              <a
                className="hover:text-white transition ease-in-out dura"
                href=""
              >
                Odontología Preventiva
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href=""
              >
                Odontología Infantil
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href=""
              >
                Dentaduras Postizas Asequibles
              </a>
              <a
                className="hover:text-white transition ease-in-out dura"
                href=""
              >
                Extracción Dental
              </a>
            </div>
          </div>
          <div className="ml-10">
            <h3 className="text-white font-bold text-[20px] mb-4">
              Horas Laborales
            </h3>
            <div className="grid grid-cols-2 text-gray-600 gap-3">
              <p>Lunes</p>
              <p>09:00 - 17:00</p>
              <p>Martes</p>
              <p>09:00 - 17:00</p>
              <p>Miercoles</p>
              <p>09:00 - 17:00</p>
              <p>Jueves</p>
              <p>09:00 - 17:00</p>
              <p>Viernes</p>
              <p>09:00 - 17:00</p>
              <p>Sábado y Domingo</p>
              <p className="ml-11">Cerrado</p>
            </div>
          </div>
        </div>
        <div className="text-white relative mt-3 w-full">
          <div className="absolute -left-3">
            <h1 className="text-gray-600 text-[16px]">
              © 2020 Dentile. Reservados todos los derechos | Diseñado por{" "}
              <a
                className="text-white font-bold hover:text-rose-500"
                href="https://W3layouts.com"
              >
                Coders
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
