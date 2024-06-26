import React from "react";
import { useState, useEffect } from "react";

function SectionCount() {
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const countToValue = (
    targetValue,
    setterFunction,
    increment = 1,
    interval = 1
  ) => {
    let currentValue = 0;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        clearInterval(timer);
        currentValue = targetValue;
      }
      setterFunction(currentValue);
    }, interval);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".bg-purple-100");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        // Start counting when section is in viewport
        countToValue(165, setAppointmentsCount); // Replace 165 with your final appointment count
        countToValue(563, setClientsCount); // Replace 563 with your final clients count
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-[370px]">
      <div className="flex px-44 py-16">
        <div className="mr-10">
          <img
            className="w-[800px] h-[550px] rounded-2xl"
            src="src/assets/section-count/ab1.jpg"
            alt="imagen"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <div className="relative">
              <span className="absolute left-0 bottom-[10px] w-10 border-b-[1px] border-pink-500"></span>
              <h6 className="ml-12 font-bold text-base">For a New smile</h6>
            </div>
            <div className="">
              <h3 className="text-5xl font-bold mb-4 mt-4">
                Caring Technologies For Your Dental Health
              </h3>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                perferendis, ratione temporibus molestias praesentium, in
                quaerat soluta dignissimos fugit ex, aut accusamus quisquam ad
                officia nostrum debitis impedit nemo necessitatibus?
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="text-6xl text-green-700">{appointmentsCount}</p>
              <h4 className="text-2xl font-bold">Daily appointments</h4>
              <p>lorem ipsum dolor sit ament consectetur adipisicing elit</p>
            </div>
            <div>
              <p className="text-6xl text-green-700">{clientsCount}</p>
              <h4 className="text-2xl font-bold">Happy Clients</h4>
              <p>lorem ipsum dolor sit ament consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCount;
