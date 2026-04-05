import React, { useState } from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";

const faqs = [
  {
    q: "WHAT TYPE OF CONTENT DO YOU CREATE?",
    a: "We specialize in short-form video content, social media campaigns, and performance-driven creatives tailored to your brand.",
  },
  {
    q: "DO YOU WORK WITH ALL INDUSTRIES?",
    a: "Yes, we work across multiple industries including tech, e-commerce, personal brands, and startups.",
  },
  {
    q: "CAN I REQUEST UNLIMITED VIDEOS ON A RETAINER?",
    a: "We offer flexible retainers depending on your needs, including high-volume content production.",
  },
  {
    q: "WHAT IF I DON'T LIKE THE FIRST DRAFTS?",
    a: "We provide revisions to ensure the final output aligns perfectly with your expectations.",
  },
];

const FAQ = () => {
    const textRef = useTextReveal();
    const fadeRef = useFadeIn();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div id="faq" className="bg-[#ffffff] overflow-hidden text-black px-4 sm:px-6 md:px-16 py-20 md:py-28">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs md:text-sm tracking-[0.15em] font-bold text-black mb-6">
          [ ANSWERS TO YOUR QUESTIONS ]
        </p>

        <h2 ref={textRef} className="text-3xl sm:text-4xl md:text-6xl font-[font2] uppercase leading-tight mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <p className="text-gray-600 text-sm md:text-base font-bold font-[font3]">
          Everything you need to know before starting with Hakari.
        </p>
      </div>

      {/* FAQ LIST */}
      <div ref={fadeRef} className="max-w-4xl mx-auto">

        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="fade-item  border-b border-black py-6">

              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg sm:text-xl md:text-2xl font-[font2] uppercase">
                  {item.q}
                </span>

                {/* PLUS / CROSS */}
                <span
                  className={`text-2xl md:text-3xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 font-bold font-[font3] text-sm md:text-base pr-8">
                  {item.a}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default FAQ;