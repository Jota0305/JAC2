import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { FaLinode } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";

function AcerdaDe() {
  return (
    <div>
      <div className="w-full h-[760px] mb-32">
        <div className="px-[500px] py-20">
          <img
            className="w-[900px] rounded-lg"
            src="src/assets/slaider3.jpg"
            alt="Foto"
          />
          <div className="text-center">
            <h1 className="text-black text-[40px] font-[800] mt-3 mb-1">
              Bienvenido a Nuestro Dentile
            </h1>
            <p className="text-gray-600 text-[18px]">
              Lorem ipsum dolor sit amet,Ea consequuntur .Ea consequuntur illum
              facere aperiam sequi optio consectetur adipisicing elitFuga,
              suscipit totam animi consequatur saepe blanditiis.Lorem ipsum
              dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
              consectetur adipisicing elit.
            </p>
            <div>
              <button className="bg-violet-900 border-none hover:bg-rose-500 transition ease-in-out duration-300 text-white px-10 py-3 mt-8 font-bold rounded-lg text-[18px]">
                Leer más
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-100 w-full h-[800px] bg-opacity-50">
        <div className="flex justify-center w-full py-36 gap-16">
          <div className="">
            <div className="flex gap-6 mb-20">
              <span className="w-20 h-20 rounded-full bg-violet-900 hover:bg-rose-500 transition ease-in-out duration-300">
                <FaLinode className="ml-[25px] mt-[26px] w-8 h-8 text-white" />
              </span>
              <div className="w-[450px]">
                <a
                  href="#"
                  className="text-[28px] font-[700] hover:text-rose-500"
                >
                  Chequeos Anuales
                </a>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-6 mb-20">
              <span className="w-20 h-20 rounded-full bg-violet-900 hover:bg-rose-500 transition ease-in-out duration-300">
                <FaHeartPulse className="ml-[25px] mt-[26px] w-8 h-8 text-white" />
              </span>
              <div className="w-[450px]">
                <a
                  href="#"
                  className="text-[28px] font-[700] hover:text-rose-500"
                >
                  Trabajar con corazones
                </a>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex gap-6 ">
              <span className="w-20 h-20 rounded-full bg-violet-900 hover:bg-rose-500 transition ease-in-out duration-300">
                <FaRegHandshake className="ml-[22px] mt-[22px] w-10 h-10 text-white" />
              </span>
              <div className="w-[450px]">
                <a
                  href="#"
                  className="text-[28px] font-[700] hover:text-rose-500"
                >
                  Ayuda a la mano
                </a>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                  aperiam sequi optio consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <span className="absolute left-0 bottom-[20px] w-10 border-b-[1px] border-pink-500"></span>
              <h4 className="ml-12 font-bold bottom-[10px] absolute w-full text-violet-900 text-[20px]">
                Quienes Somos
              </h4>
            </div>
            <h1 className="text-[36px] font-[800]">Por qué elegirnos</h1>
            <p className="text-gray-700 mb-7 w-[600px]">
              A menos que estén ciegos, no salen, tienen la culpa. Ese era el
              barco del Lacinia eu ullamcorper. Eso es precisamente, el
              desencadenante de la vida embarazada. Barco Lacinia que, ellos
              tienen la culpa. lacinia
            </p>
            <img
              className="rounded-lg w-[600px]"
              src="src/assets/about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-[500px]">
        <div className="flex justify-center px-80 gap-10 py-28 items-center">
          <div className="mb-24">
            <div className="relative">
              <span className="absolute left-0 bottom-[10px] w-10 border-b-[1px] border-pink-500"></span>
              <h4 className="ml-12 font-[800] bottom-[0px] absolute w-full text-violet-900 text-[16px]">
                Doctores expertos
              </h4>
            </div>
            <h1 className="text-[36px] font-[800]">Nuestro equipo</h1>
            <p className="w-[300px] text-justify text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sunt in
              culpa qui officia sed deserunt mollit anim id est laborum mollit
              anim id est nulla.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="overflow-hidden group">
              <a href="#" className="text-black text-[26px] font-[800] block">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                    src="src/assets/theresa.jpg"
                    alt="Theresa Cruz"
                  />
                </div>
                Theresa Cruz
              </a>
              <p className="text-gray-600 text-[18px]">Presidenta y CEO</p>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaFacebookF className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaTwitter className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <CgMail className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <IoMdCall className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden group">
              <a href="#" className="text-black text-[26px] font-[800] block">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                    src="src/assets/scott.jpg"
                    alt="Theresa Cruz"
                  />
                </div>
                Scott Colon
              </a>
              <p className="text-gray-600 text-[18px]">Doctor</p>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaFacebookF className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaTwitter className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <CgMail className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <IoMdCall className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden group">
              <a href="#" className="text-black text-[26px] font-[800] block">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="rounded-lg transform transition-transform duration-700 group-hover:scale-110"
                    src="src/assets/bertha.jpg"
                    alt="Theresa Cruz"
                  />
                </div>
                Bertha Sherman
              </a>
              <p className="text-gray-600 text-[18px]">Doctor</p>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaFacebookF className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <FaTwitter className="w-3 h-3 ml-[8px] mt-[8px]" />
                  </a>
                </div>
                <div className="flex gap-3">
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <CgMail className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                  <a
                    className="bg-violet-100 text-violet-900 w-7 h-7 rounded-full hover:text-white hover:bg-violet-900 transition ease-in-out duration-300"
                    href="#"
                  >
                    <IoMdCall className="w-4 h-4 ml-[6px] mt-[6px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] mt-20">
        <div className="py-14 px-80">
          <div className="relative">
            <span className="absolute left-0 -bottom-[px] w-10 border-b-[1px] border-pink-500"></span>
            <h4 className="ml-12 font-[800] -bottom-[10px] absolute w-full text-violet-900 text-[16px]">
              Cuidamos Tu Sonrisa
            </h4>
          </div>
          <h1 className="text-[46px] font-[800]">Servicios Destacados</h1>
          <div className="flex gap-8 text-center mt-12">
            <a
              className="text-black text-[22px] font-[700] hover:text-rose-500 transition ease-in-out duration-300 transform hover:-translate-y-2"
              href="#"
            >
              <img
                className="w-72 rounded-lg"
                src="src/assets/card1.jpg"
                alt="Foto"
              />
              <h1 className="mt-4">Terapia Periodontal</h1>
            </a>
            <a
              className="text-black text-[22px] font-[700] hover:text-rose-500 transition ease-in-out duration-300 transform hover:-translate-y-2"
              href="#"
            >
              <img
                className="w-72 rounded-lg"
                src="src/assets/card2.jpg"
                alt="Foto"
              />
              <h1 className="mt-4">Odontología Cosmetica</h1>
            </a>
            <a
              className="text-black text-[22px] font-[700] hover:text-rose-500 transition ease-in-out duration-300 transform hover:-translate-y-2"
              href="#"
            >
              <img
                className="w-72 rounded-lg"
                src="src/assets/card3.jpg"
                alt="Foto"
              />
              <h1 className="mt-4">Implantes Dentales</h1>
            </a>
            <a
              className="text-black text-[22px] font-[700] hover:text-rose-500 transition ease-in-out duration-300 transform hover:-translate-y-2"
              href="#"
            >
              <img
                className="w-72 rounded-lg"
                src="src/assets/card4.jpg"
                alt="Foto"
              />
              <h1 className="mt-4">Odontología Pediatrica</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcerdaDe;
