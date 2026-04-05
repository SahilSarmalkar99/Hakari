import React from "react";
import "./Carousel.css";
import useFadeIn from "../hooks/useFadeIn";

import l1 from "../assets/img/logo1.svg"
import l2 from "../assets/img/logo2.svg"
import l3 from "../assets/img/logo3.svg"
import l4 from "../assets/img/logo4.svg"
import l5 from "../assets/img/logo5.svg"

const Item = [l1, l2, l3, l4, l5];

const Carousel = () => {

  const ref = useFadeIn();
  return (
    <div >
    

      {/* Carousel */}
    <div  ref={ref} className=" overflow-hidden carousel-simple py-10">

      <div className="group-simple">
        {Item.map((img, i) => (
          <div key={`first-${i}`} className="card-simple">
            <img src={img} alt={`tech-${i}`} />
          </div>
        ))}
      </div>

      <div aria-hidden className="group-simple">
        {Item.map((img, i) => (
          <div key={`second-${i}`} className="card-simple">
            <img src={img} alt={`tech-${i}`} />
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Carousel;