import React from "react";
import "./FooterCarousel.css";

const items = [
  "CREATOR-FIRST",
  "DATA-DRIVEN",
  "GROWTH-FOCUSED",
  "FAST DELIVERY",
  "GLOBAL REACH",
];

const FooterCarousel = () => {
  return (
    <div className="w-full bg-black ">
      {/* Carousel */}
      <div className="tagcarousel-simple  py-14 relative">

        <div className="group-reverse-simple">
          {items.map((tag, i) => (
            <span key={`row1-${i}`} className="tag-simple">
              {tag}
            </span>
          ))}
        </div>

        <div aria-hidden className="group-reverse-simple">
          {items.map((tag, i) => (
            <span key={`row2-${i}`} className="tag-simple">
              {tag}
            </span>
          ))}
        </div>

        {/* glow overlays */}
        <div className="fade-left" />
        <div className="fade-right" />
      </div>
    </div>
  );
};

export default FooterCarousel;