import React, { useRef } from "react";
import bg from "../assets/display/bg.avif";
import insta from "../assets/logo/insta.svg";
import yt from "../assets/logo/yt.svg";
import linkdin from "../assets/logo/linkdin.svg";
import tt from "../assets/logo/tiktok.svg";
import useTextReveal from "../hooks/useTextReveal";
import useBlurScaleReveal from "../hooks/useBlurScaleReveal";
import Carousel from "./Carousel";
import img from "../assets/display/img1.avif";
import useFadeIn from "../hooks/useFadeIn";
import { useNavigate , useLocation} from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  const ref = useTextReveal();
  const fadeRef = useFadeIn();
  const scaleRef = useBlurScaleReveal();
  const location = useLocation();

  return (
    <div
      ref={fadeRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-start pt-30 pb-10 overflow-hidden text-white px-4 sm:px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] z-0" />

      {/* Badge */}
      <div className="fade-item relative z-10 font-[font3] font-bold  inline-flex items-center gap-2 bg-[#393939] border border-white/20 px-4 sm:px-6 py-2 rounded-full mb-6 sm:mb-10 text-[12px] md:text-[17px]  tracking-widest backdrop-blur-md text-center">
        ✨ BEST DIGITAL AGENCY 2025 ✨
      </div>

      {/* CONTENT */}
      <div ref={scaleRef} className="relative w-full max-w-[1100px] text-center uppercase ">
        
        <h1
          ref={ref}
          className="relative  font-[font2] pointer-events-none leading-[1.1] sm:leading-[1.05] tracking-[-1px] sm:tracking-[-1.5px]
          text-[40px] md:text-[64px] lg:text-[90px] xl:text-[110px] z-20"
        >
          We turn stories into <br className="hidden sm:block" />
          scroll-stopping content
        </h1>

        {/* ICONS */}
        <img
          src={yt}
          className="blur-scale-item absolute -left-[1%] -top-[15%] w-8  z-10 md:w-20  rotate-[20deg] drop-shadow-xl hidden sm:block"
        />

        <img
          src={insta}
          className="blur-scale-item absolute -right-[2%] bottom-[15%] w-8 sm:w-10 md:w-16  hover:scale-110 hover:rotate-[25deg] transition rotate-[-20deg] drop-shadow-xl hidden sm:block"
        />

        <img
          src={tt}
          className="blur-scale-item absolute -left-[5%] bottom-[20%] w-8 sm:w-10 md:w-16 hover:scale-110 hover:rotate-[25deg]  transition -rotate-[8deg] opacity-100 hidden sm:block"
        />

        <img
          src={linkdin}
          className="blur-scale-item absolute right-[7%] top-[5%] w-8 sm:w-10 md:w-14 rotate-[-20deg] opacity-90 hidden sm:block"
        />
      </div>

      {/* Buttons */}
      <div className="fade-item relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-12 w-full md:w-[40%] ">
        <button
          className="  md:w-full  bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all px-2  py-3 rounded-md font-[font3] font-bold text-sm sm:text-base tracking-wide shadow-lg"
          onClick={() => navigate("/contact")}
        >
          START A PROJECT →
        </button>

        <button
          className="md:w-full bg-white text-black px-2  py-3 font-[font3] font-bold rounded-md text-sm sm:text-base tracking-wide hover:bg-gray-200 active:scale-95 transition-all shadow-md"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 200);
            } else {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }}
        >
          SEE SERVICES
        </button>
      </div>

      <div className="fade-item relative z-10 md:pb-10">
        <Carousel />
      </div>

      {/* HERO IMAGE */}
      <div className="fade-item md:mt-5 w-full max-w-[900px] flex justify-center">
        <img
          src={img}
          alt="hero visual"
          className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
