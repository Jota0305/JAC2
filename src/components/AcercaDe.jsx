import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { FaLinode } from "react-icons/fa";

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
              Welcome To Our Detile
            </h1>
            <p className="text-gray-600 text-[18px]">
              Lorem ipsum dolor sit amet,Ea consequuntur .Ea consequuntur illum
              facere aperiam sequi optio consectetur adipisicing elitFuga,
              suscipit totam animi consequatur saepe blanditiis.Lorem ipsum
              dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
              consectetur adipisicing elit.
            </p>
            <div>
              <button className="bg-violet-900 hover:bg-rose-500 transition ease-in-out duration-300 text-white px-10 py-3 mt-8 font-bold rounded-lg text-[18px]">
                Read More
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
                <h1 className="text-[28px] font-[700]">Annual Check-ups</h1>
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
                <h1 className="text-[28px] font-[700]">Work with Hearts</h1>
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
                <h1 className="text-[28px] font-[700]">Help at Hand</h1>
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
                who we are
              </h4>
            </div>
            <h1 className="text-[36px] font-[800]">Why Choose Us</h1>
            <p className="text-gray-700 mb-7 w-[600px]">
              Excepteur sint occaecat non proident, sunt in culpa quis.
              Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
              gravida felis vitae. Phasellus lacinia id, sunt in culpa quis.
              Phasellus lacinia
            </p>
            <img
              className="rounded-lg w-[600px]"
              src="src/assets/about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcerdaDe;
