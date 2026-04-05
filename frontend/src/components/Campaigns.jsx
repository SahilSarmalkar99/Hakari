import React from "react";
import useCardScroll from "../hooks/useCardScroll";
import useCountUp from "../hooks/useCountUp";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";
import { useNavigate } from "react-router-dom";


const campaignsData = [
  {
    id: "01",
    title: "PULSE LAUNCH SURGE",
    stats: ["100M+ organic views", "35% more signups", "4x higher CTR"],
    img: "https://framerusercontent.com/images/z0gHd5JOZfMzlQDLFnmeCZZmZw.png",
  },
  {
    id: "02",
    title: "GREENGLOW BEAUTY",
    stats: ["100M+ engagement", "35K new followers", "4M+ views"],
    img: "https://framerusercontent.com/images/o9nK7v94Tp6zOfWefZjXnPFz8lM.png",
  },
  {
    id: "03",
    title: "URBANEATS FOOD DELIVERY",
    stats: ["100M+ engagement", "35% daily users", "4M+ impressions"],
    img: "https://framerusercontent.com/images/RApJUH3xNvdXr5doAhLzZM41KcA.png",
  },
  {
    id: "04",
    title: "SMOOTHRIDE EVENTS AD VIDEO",
    stats: ["100% visibility", "35% signups", "4M+ views"],
    img: "https://framerusercontent.com/images/Liejtu2YzyAesb9NMuIaX6VvpU.png",
  },
];

const Campaigns = () => {
  const containerRef = useCardScroll();
  const textref = useTextReveal();
  const fadeRef = useFadeIn();
  const navigate = useNavigate();
  
  return (
    <section
      id="campaigns"
      className="bg-[#f5f5f5]  py-16 md:py-24 px-4 sm:px-6 "
      ref={fadeRef}
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-20">
        <p className="text-xs md:text-sm tracking-[0.15em] font-bold text-black mb-6">
          [ CAMPAIGNS - 05 ]
        </p>

        <h1
          ref={textref}
          className="font-[font2] uppercase leading-tight text-[clamp(2rem,5vw,4rem)]"
        >
          OUR LATEST CAMPAIGNS
        </h1>

        <p className="text-gray-600 font-bold font-[font3] mt-4 max-w-xl mx-auto text-sm md:text-base">
          A look at the brands we’ve helped go viral, with measurable results
          that speak for themselves.
        </p>
      </div>

      {/* Cards */}
      <div ref={containerRef} className="relative space-y-12 md:space-y-20">
        {campaignsData.map((item, index) => (
          <div
            key={index}
            className="sticky top-16 md:top-24"
            style={{ zIndex: 10 + index }}
          >
            <div className="bg-[#f3f3f3] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 grid md:grid-cols-2 gap-6 md:gap-12 items-center shadow-sm">
              
              {/* LEFT */}
              <div className="flex flex-col justify-between h-full">
                {/* Top */}
                <div>
                  <p className="text-[#FF5B03] text-2xl md:text-4xl font-bold mb-4">
                    {item.id}.
                  </p>

                  <h2 className="font-[font2] uppercase leading-tight mb-6 text-[clamp(1.5rem,4vw,3.5rem)]">
                    {item.title}
                  </h2>

                  <div className="h-[1px] bg-black/20 w-full mb-6"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-10">
                  {item.stats.map((stat, i) => {
                    const match = stat.match(/(\d+)(.*)/);
                    const number = match ? parseInt(match[1]) : 0;
                    const rest = match ? match[2] : "";

                    const ref = useCountUp(number);

                    return (
                      <div key={i}>
                        <p className="text-xl md:text-4xl font-[font2]">
                          <span ref={ref}>0</span>
                          {rest.split(" ")[0]}
                        </p>

                        <p className="text-gray-500 font-bold font-[font3] text-xs md:text-sm mt-1">
                          {rest.split(" ").slice(1).join(" ")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl md:rounded-2xl w-full h-[200px] sm:h-[260px] md:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16 md:mt-24">
        <button className="bg-[#FF5B03] text-white font-[font3] font-bold px-6 md:px-8 py-2.5 md:py-3 rounded-md text-sm md:text-base hover:scale-105 transition" onClick={() => navigate("/contact")}>
          START A PROJECT →
        </button>
      </div>
    </section>
  );
};

export default Campaigns;