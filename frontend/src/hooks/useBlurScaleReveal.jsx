import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const useBlurScaleReveal = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current.querySelectorAll(".blur-scale-item");

      gsap.set(elements, {
        scale: 5,
        opacity: 0,
        y: 50,
        filter: "blur(20px)",
      });

      gsap.to(elements, {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        stagger: 0,
        onComplete: () => {
          gsap.set(elements, { clearProps: "all" }); // 💎 restores Tailwind fully
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useBlurScaleReveal;
