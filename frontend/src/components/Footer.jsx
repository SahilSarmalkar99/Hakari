import { ArrowRight, X  } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import FooterCarousel from "./FooterCarousel";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const textRef = useTextReveal();
  return (
    <div className="bg-black overflow-hidden text-white px-4 sm:px-6 md:px-16 py-20">
      {/* TOP CTA */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-6xl font-[font2] uppercase leading-[1.1] tracking-tight mb-8">
          YOUR PARTNER IN SHORT-FORM CONTENT,
          <br />
          STRATEGY, AND BRAND AMPLIFICATION.
        </h2>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 font-[font3] font-bold py-3 rounded-lg flex items-center gap-2 mx-auto text-sm tracking-wide" onClick={() => navigate("/contact")}>
          START A PROJECT <ArrowRight size={16} />
        </button>
      </div>

      {/* TAGS / CAROUSEL SPACE */}
      <FooterCarousel />


{/* DIVIDER */}
<div className="border-t border-white/10 mb-10 md:mb-12"></div>

{/* LINKS SECTION */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

  {/* SOCIAL */}
  <div className="space-y-5 text-sm">

    {[
      { label: "X (TWITTER)", icon: <X size={14} /> },
      { label: "FACEBOOK", icon: <FaFacebook size={14} /> },
      { label: "LINKEDIN", icon: <FaLinkedin size={14} /> },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group cursor-pointer">

        {/* ICON */}
        <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105">
          {item.icon}
        </span>

        {/* TEXT */}
        <p className="opacity-70 group-hover:opacity-100 transition duration-300">
          {item.label}
        </p>

      </div>
    ))}

  </div>

  {/* COL 1 */}
  <div className="space-y-5 text-sm">
    {["ABOUT", "WHY US", "SERVICES"].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group cursor-pointer">

        <span className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-black border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105">
          <ArrowRight size={14} />
        </span>

        <p className="opacity-70 group-hover:opacity-100 transition duration-300 group-hover:translate-x-1">
          {item}
        </p>

      </div>
    ))}
  </div>

  {/* COL 2 */}
  <div className="space-y-5 text-sm">
    {["PRICING", "BLOG", "FAQ"].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group cursor-pointer">

        <span className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-black border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105">
          <ArrowRight size={14} />
        </span>

        <p className="opacity-70 group-hover:opacity-100 transition duration-300 group-hover:translate-x-1">
          {item}
        </p>

      </div>
    ))}
  </div>

  {/* COL 3 */}
  <div className="space-y-5 text-sm">
    {["PRIVACY POLICY", "TERMS & CONDITIONS", "404"].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group cursor-pointer">

        <span className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-black  border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105">
          <ArrowRight size={14} />
        </span>

        <p className="opacity-70 group-hover:opacity-100 transition duration-300 group-hover:translate-x-1">
          {item}
        </p>

      </div>
    ))}
  </div>

</div>

      {/* DIVIDER */}
      <div className="border-t border-white/40 mb-8"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-sm"></div>
          <p className="text-2xl font-[font2] tracking-wide">HAKARI</p>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm text-white/60 text-center">
          © 2025 HAKARI. ALL RIGHTS RESERVED.
        </p>

      </div>
    </div>
  );
};

export default Footer;
