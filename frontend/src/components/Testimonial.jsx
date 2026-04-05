import React, { useState } from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";

const testimonials = [
  {
    name: "DIANNA SULASTRI",
    role: "FOUNDER AT MANDALA",
    text: "THE RESULTS WERE UNDENIABLE — A CONSISTENT INCREASE IN REACH, ENGAGEMENT",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "CRAIG SEPTIMUS",
    role: "MARKETING LEAD",
    text: "THE CONTENT STRATEGY COMPLETELY TRANSFORMED OUR BRAND VISIBILITY.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "CHEYENNE WESTERVELT",
    role: "CREATIVE DIRECTOR",
    text: "EVERYTHING FELT INTENTIONAL — FROM DESIGN TO EXECUTION.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "ALEX MORGAN",
    role: "FOUNDER AT NOVA",
    text: "WE SAW MASSIVE GROWTH IN JUST A FEW WEEKS.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  const textRef = useTextReveal();
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#F5F5F5] overflow-hidden text-black px-4 sm:px-6 md:px-16 py-16 md:py-20 text-center">

      {/* TOP */}
      <p className="text-xs md:text-sm tracking-[0.15em] font-bold text-black mb-6">
        [ TESTIMONIALS ]
      </p>

      <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-6xl font-[font2] uppercase leading-[1.05] tracking-tight mb-6">
        SEE WHY OUR <br /> CLIENTS LOVE US
      </h2>

      <div className="w-12 h-[2px] bg-black mx-auto mb-8"></div>

      {/* QUOTE + TEXT BLOCK */}
      <div className="max-w-xl mx-auto">

        {/* Quote */}
        <p className="text-orange-500 text-4xl md:text-7xl leading-none mb-2">
          “
        </p>

        {/* TEXT */}
        <h3
          key={active}
          className="text-xl  sm:text-2xl md:text-4xl font-[font2] uppercase leading-[1.15] tracking-tight transition-all duration-500"
        >
          {testimonials[active].text}
        </h3>

      </div>

      {/* NAME */}
      <div className="mt-6">
        <p className="font-bold font-[font1] tracking-[0rem] text-sm md:text-base">
          {testimonials[active].name}
        </p>
        <p className="text-gray-500 font-bold text-xs tracking-[0.1em] mt-1">
          {testimonials[active].role}
        </p>
      </div>

      <div className="w-10 h-[2px] bg-black mx-auto my-6"></div>

      {/* AVATARS */}
      <div className="flex justify-center gap-3 flex-wrap">
        {testimonials.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className="relative"
          >
            <img
              src={item.img}
              alt=""
              className={`w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover transition-all duration-300 
                
                ${
                  active === index
                    ? "scale-110 opacity-100"
                    : "opacity-40 hover:opacity-80"
                }
              `}
            />

            {active === index && (
              <span className="absolute inset-0 rounded-lg ring-2 ring-black"></span>
            )}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Testimonial;