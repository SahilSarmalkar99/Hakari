import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useCardSlideIn from "../hooks/useCardSlideIn";
import img1 from "../assets/benefits/img1.svg"
import img2 from "../assets/benefits/img2.svg"
import img3 from "../assets/benefits/img3.svg"
import img4 from "../assets/benefits/img4.svg"
import { useNavigate } from "react-router-dom";

// 🔥 DATA (edit here only)
const benefitsData = [
  {
    tag: "REACH",
    title: "EXPAND YOUR AUDIENCE",
    desc: "We analyze your target market to uncover what truly resonates.",
    img: img1,
  },
  {
    tag: "IMPACT",
    title: "DRIVE REAL ENGAGEMENT",
    desc: "Go beyond views with videos that spark trends, shares, and attention.",
    img: img2,
  },
  {
    tag: "AUTHORITY",
    title: "BUILD BRAND CREDIBILITY",
    desc: "Position yourself as a leader with storytelling that connects emotionally.",
    img: img3,
  },
  {
    tag: "SPEED",
    title: "LAUNCH CONTENT FASTER",
    desc: "Get high-performing videos produced and published in record time.",
    img: img4,
  },
];

const Benefits = () => {
  const ref = useTextReveal();
  const card = useCardSlideIn();
  const navigate = useNavigate();
  return (
    <section id="benefits" className="w-full bg-[#FFFFFF] px-6  text-center relative overflow-hidden">
      {/* Top Tag */}
      <p className="text-xs md:text-sm tracking-[0.1em] font-bold text-black mb-10">
        [ WORLD CLASS TEAM, SERVING TOP COMPANIES ]
      </p>

      {/* Heading */}
      <h1
        ref={ref}
        className="
        overflow-hidden
        font-[font2] 
        uppercase 
        text-black 
        leading-tight 
        max-w-5xl 
        mx-auto
        text-3xl 
        md:text-6xl 

      "
      >
        WE TURN ATTENTION INTO GROWTH
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-600 font-bold font-[font3] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        At Hakari, we specialize in short-form content that doesn’t just look
        good, it performs. By blending creative storytelling with data-driven
        strategy, we help brands break through the noise and capture loyal
        audiences.
      </p>

      {/* Cards */}
      <div
      ref={card}
        className="
        mt-16 
        grid 
        gap-6 
        sm:grid-cols-2 
        lg:grid-cols-4
      "
      >
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="
            card
              bg-[#eeeeee] 
              rounded-2xl 
              p-6 
              flex 
              flex-col 
              items-center 
              text-center 
              hover:shadow-lg 
              transition
            "
          >
            {/* Tag */}
            <span className="bg-black text-white text-sm font-bold font-[font3] px-4 py-1 rounded-full mb-6">
              {item.tag}
            </span>

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full max-w-[220px] mb-6 object-contain"
            />

            {/* Title */}
            <h3 className="font-[font2] text-lg md:text-xl uppercase mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Center CTA */}
      <div className="m-14 flex justify-center">
        <button className="bg-[#FF5B03] text-white px-8 py-3 font-[font3] font-bold rounded-md text-sm  hover:scale-105 transition" onClick={() => navigate("/contact")}>
          START A PROJECT →
        </button>
      </div>

      
    </section>
  );
};

export default Benefits;
