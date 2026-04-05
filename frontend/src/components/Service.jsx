import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useCardSlideIn from "../hooks/useCardSlideIn";

const services = [
  {
    title: "SHORT-FORM VIDEO CREATION",
    tags: ["REACH", "IMPACT", "SPEED"],
    desc: "SCALE YOUR INFLUENCE WITH A TAILORED CONTENT ROADMAP.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    title: "SOCIAL MEDIA GROWTH",
    tags: ["AUTHORITY", "SPEED", "REACH"],
    desc: "SCALE YOUR INFLUENCE WITH A TAILORED CONTENT ROADMAP.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    title: "PAID CAMPAIGN CREATIVE",
    tags: ["REACH", "IMPACT", "AUTHORITY"],
    desc: "MAXIMIZE ROI WITH ADS THAT FEEL NATIVE BUT CONVERT.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

const Service = () => {
    const textRef = useTextReveal();
    const cardRef = useCardSlideIn();

  return (
    <div id="services" className="bg-[#f5f5f5] overflow-hidden text-black px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div>
          <p className="text-xs md:text-sm tracking-[0.15em] font-bold text-black mb-6">[ SERVICES ]</p>

          <h2 ref={textRef} className="text-4xl md:text-6xl font-[font2] uppercase leading-tight mb-6">
            HOW WE CAN HELP
          </h2>

          <p  className="text-gray-600 font-[font3] font-bold max-w-sm">
            We help brands capture attention, grow communities, and drive
            measurable results through short-form video and viral content
            strategies.
          </p>
        </div>

        {/* RIGHT */}
        <div ref={cardRef} className="md:col-span-2 flex flex-col">
          {services.map((item, index) => (
            <div
              key={index}
              className="card group border-b border-black/10 py-10 cursor-pointer overflow-hidden"
            >
              <div className="flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-6">
                {/* LEFT CONTENT */}
                <div>
                  <h3 className="text-3xl md:text-5xl font-[font2] uppercase mb-6">
                    {item.title}
                  </h3>

                  <div className="flex gap-3 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-black/5 text-gray-600 px-4 font-[font2] tracking-[0.1rem] py-2 rounded-full text-sm md:text-[17px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE (DESC + IMAGE SWITCH) */}
                <div className="relative w-full md:w-[220px] h-[160px] md:h-[120px] mt-6 md:mt-0">
                  {/* DESCRIPTION */}
                  <p className="absolute inset-0 text-sm text-gray-600 transition-all duration-300 font-[font2] opacity-0 md:opacity-100 md:group-hover:opacity-0">
                    {item.desc}
                  </p>

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-100 md:opacity-0 md:scale-95 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:scale-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
