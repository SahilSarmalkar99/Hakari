import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardSlideIn = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            xPercent: 20,          
            opacity: 0,
            scale: 0.96,           
          },
          {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            duration : 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              // scrub: 0.3,          // smooth scroll-based animation
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useCardSlideIn;