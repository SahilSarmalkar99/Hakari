import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useCardSlideIn from "../hooks/useCardSlideIn";

const aboutData = [
  {
    title: "AWARD-WINNING\nCREATIVE POWERHOUSE",
    desc: "Our content doesn’t just look good—it drives results. From signups to sales, our campaigns deliver measurable ROI across platforms and verticals.",
  },
  {
    title: "WORKED 300+ GLOBAL CLIENTS",
    desc: "Our content doesn’t just look good—it drives results. From signups to sales, our campaigns deliver measurable ROI across platforms and verticals.",
  },
  {
    title: "$80M+ CLIENT\nREVENUE GENERATED",
    desc: "Our content doesn’t just look good—it drives results. From signups to sales, our campaigns deliver measurable ROI across platforms and verticals.",
  },
];

const AboutUs = () => {

    const ref = useTextReveal();
    const cardRef = useCardSlideIn();

  return (
    <div  className="w-full  bg-[#FF5B03] text-white px-6 py-20 md:py-24 overflow-hidden">
      
      {/* Heading */}
      <h1 ref={ref} className="text-center text-4xl md:text-6xl font-[font2]  mb-16 tracking-wide">
        A LITTLE ABOUT US
      </h1>

      {/* Boxes */}
      <div ref={cardRef} className="grid md:grid-cols-3 gap-8 ">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="card px-4 relative border-l border-white"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold leading-tighter whitespace-pre-line">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-32 text-sm md:text-base text-white/90 leading-tight max-w-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutUs;