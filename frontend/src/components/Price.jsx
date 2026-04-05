import React, { useState } from "react";
import useCountUp from "../hooks/useCountUp";
import useTextReveal from "../hooks/useTextReveal";
import useCardSlideIn from "../hooks/useCardSlideIn";
import { useNavigate } from "react-router-dom";


const plans = {
  monthly: [
    {
      title: "ONE-TIME",
      price: 5000,
      features: [
        "Creative strategy & content plan",
        "5–10 viral-ready short-form videos",
        "Hook optimization & captioning",
        "Edits & revisions included",
        "14-day delivery window",
      ],
    },
    {
      title: "ONGOING PARTNERSHIP",
      price: 4200,
      features: [
        "Unlimited content requests",
        "Daily/weekly delivery pipeline",
        "Full creative team access",
        "Cross-platform optimization",
        "Priority revisions & fast turnaround",
      ],
    },
  ],
  yearly: [
    {
      title: "ONE-TIME",
      price: 4500,
      features: [
        "Creative strategy & content plan",
        "5–10 viral-ready short-form videos",
        "Hook optimization & captioning",
        "Edits & revisions included",
        "14-day delivery window",
      ],
    },
    {
      title: "ONGOING PARTNERSHIP",
      price: 3800,
      features: [
        "Unlimited content requests",
        "Daily/weekly delivery pipeline",
        "Full creative team access",
        "Cross-platform optimization",
        "Priority revisions & fast turnaround",
      ],
    },
  ],
};

const Price = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("monthly");
  const textRef = useTextReveal();
  const cardRef = useCardSlideIn();

  return (
    <section id="pricing" className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20 relative overflow-hidden">
      {/* TOP */}
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs tracking-[0.2em] font-bold text-white/80 mb-12">
          [ PRICING ]
        </p>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          {/* LEFT TEXT */}
          <div className="max-w-2xl">
            <h1
              ref={textRef}
              className="text-4xl md:text-6xl font-[font2] uppercase leading-[1.05]"
            >
              SIMPLE PRICING FOR EVERY CREATOR AND BRAND
            </h1>

            <p className="text-gray-400 mt-6 text-base md:text-lg">
              Choose the plan that fits your growth journey. Scale confidently
              with monthly or yearly options.
            </p>
          </div>

          {/* TOGGLE */}
          <div className="flex items-center gap-4 mb-2">
            <span
              className={`text-sm font-bold ${mode === "monthly" ? "text-white" : "text-white/40"}`}
            >
              MONTHLY
            </span>

            <div
              onClick={() => setMode(mode === "monthly" ? "yearly" : "monthly")}
              className="w-16 h-8 bg-white/20 rounded-full flex items-center px-1 cursor-pointer"
            >
              <div
                className={`w-6 h-6 bg-[#FF5B03] rounded-full transition duration-300 ${
                  mode === "yearly" ? "translate-x-8" : ""
                }`}
              />
            </div>

            <span
              className={`text-sm font-bold ${mode === "yearly" ? "text-white" : "text-white/40"}`}
            >
              ANNUALLY
            </span>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {plans[mode].map((plan, index) => {
            const priceRef = useCountUp(plan.price); // ✅ correct usage

            return (
              <div key={index} className="flex flex-col">
                {/* TOP GRADIENT CARD */}
                <div
                  className="rounded-2xl p-8 relative overflow-hidden"
                  style={{
                    background:
                      index === 0
                        ? "linear-gradient(135deg,#ff4d00,#3bc9db)"
                        : "linear-gradient(135deg,#000000,#ff4d00)",
                  }}
                >
                  {/* ICON */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black mb-6 text-xl">
                    ⚡
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold uppercase mb-3">
                    {plan.title}
                  </h3>

                  {/* PRICE (COUNT ANIMATION) */}
                  <h2 className="text-5xl md:text-6xl font-[font2]">
                    $<span ref={priceRef}>0</span>
                  </h2>
                </div>

                {/* FEATURES */}
                <div className="mt-8">
                  <p className="text-sm font-bold font-[font3] uppercase mb-6 tracking-wide">
                    WHAT’S INCLUDED
                  </p>

                  <div className="space-y-4">
                    {plan.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <div className="w-5 h-5 border border-white rounded-full flex items-center justify-center text-xs">
                          ✓
                        </div>

                        <p className="text-sm font-bold font-[font3] md:text-base">{f}</p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-8 bg-[#FF5B03] px-6 py-3 rounded-md font-[font3] font-bold text-sm hover:scale-105 transition" onClick={() => navigate("/contact")}>
                    START MY PROJECT →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* TESTIMONIAL */}
<div
  ref={cardRef}
  className="relative max-w-7xl mx-auto mt-20 sm:mt-24 md:mt-32 border-t border-white/10 pt-14 sm:pt-16 md:pt-20 px-4 sm:px-6 text-white"
>
  {/* Subtle background glow */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

  <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="card relative">
      
      {/* Big Quote */}
      <span className="absolute -left-3 sm:-left-4 md:-left-6 -top-4 sm:-top-5 md:-top-6 text-orange-500 text-[70px] sm:text-[90px] md:text-[120px] leading-none opacity-90">
        “
      </span>

      {/* Content */}
      <div className="pl-6 sm:pl-8 md:pl-10">
        
        {/* Small label */}
        <p className="text-gray-400 font-[font2] tracking-[0.15em]  text-[10px] md:text-[14px]  mb-4 sm:mb-6">
          [ HELPING MILLION DOLLAR BUSINESSES SCALE ]
        </p>

        {/* Main text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[font2] uppercase leading-[1.1] md:leading-[1.05] tracking-[-0.01em] md:tracking-[-0.02em] max-w-full md:max-w-3xl">
          WORKING WITH HAKARI FELT PERSONAL. THE DESIGN WAS STUNNING, AND
          EVERYTHING HAD MEANING.
        </h2>

        {/* User */}
        <div className="flex items-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-cover border border-white/10"
          />
          <div>
            <p className="font-semibold tracking-wide font-bold font-[font3] text-sm sm:text-base">
              DIANNA SULASTRI
            </p>
            <p className="text-xs sm:text-sm font-bold font-[font3] text-gray-400 tracking-wide">
              FOUNDER AT CRYPTOWAVE
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE CARD */}
    <div className="flex justify-center md:justify-end mt-8 md:mt-0">
      <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-3 sm:p-4 w-[180px] sm:w-[200px] md:w-[240px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-105">
        
        <img
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
          alt=""
          className="rounded-xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-105"
        />

        <p className="text-center text-gray-400 font-bold font-[font3] text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em]">
          [ CRYPTOWAVE ]
        </p>

      </div>
    </div>

  </div>
</div>
    </section>
  );
};

export default Price;
