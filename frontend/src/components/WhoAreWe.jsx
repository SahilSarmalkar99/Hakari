import React from "react";
import useTextColorChange from "../hooks/useTextColorChange";

const WhoAreWe = () => {

  const ref = useTextColorChange();
  return (
    <section id="about" className="w-full min-h-screen overflow-hidden bg-[#FFFFFF] flex flex-col items-center justify-center px-6 py-20 text-center">
      
      {/* Top Tag */}
      <p className="text-xs md:text-sm tracking-[0.1em] font-bold text-black mb-10">
        [ WHO WE ARE ]
      </p>

      {/* Main Heading */}
      <h1 
       ref={ref}  
       className="
        font-[font2] 
        uppercase 
        text-[#D1D1D1] 
        leading-tight 
        tracking-tight
        max-w-4xl
        text-3xl 
        md:text-6xl
      ">
        Hakari is a sleek, minimalistic framer template designed specifically
        for agencies and creators. At Hakari, we prioritize clean typography
        and bold design.
      </h1>

      {/* Divider */}
      <div className="mt-16 flex flex-col items-center gap-3">
        <div className="w-24 h-[2px] bg-black/40"></div>
        <div className="w-6 h-[2px] bg-black/40"></div>
      </div>

     
    </section>
  );
};

export default WhoAreWe;