
import { useState, useEffect ,useRef, useCallback} from "react";
import { countToValue } from "../../helpers";

function SectionCount() {
  const [appointmentsCount, setAppointmentsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const sectionRef = useRef(null);
  const maxTime = 2000;

  const startCounting = useCallback(() => {
    const cleanupAppointmentsCount = countToValue(165, setAppointmentsCount, maxTime);
    const cleanupClientsCount = countToValue(563, setClientsCount, maxTime);

    return () => {
      cleanupAppointmentsCount();
      cleanupClientsCount();
    };
  }, [maxTime]);

  const resetCounts = useCallback(() => {
    setAppointmentsCount(0);
    setClientsCount(0);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cleanup = startCounting();
            return () => cleanup();
          } else {
            resetCounts();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [startCounting, resetCounts]);

  return (
    <div ref={sectionRef} className="w-full h-[370px] mb-96">
      <div className="flex px-80 py-16">
        <div className="mr-10">
          <img
            className="w-[1050px] h-[550px] rounded-2xl"
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
