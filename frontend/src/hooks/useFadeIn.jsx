import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useFadeIn = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(".fade-item");

      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",   // when section enters viewport
            toggleActions: "play none none none",
            // markers: true, // enable for debugging
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useFadeIn;