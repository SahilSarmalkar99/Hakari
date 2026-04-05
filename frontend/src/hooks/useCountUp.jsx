import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCountUp = (endValue) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let obj = { val: 0 };

    gsap.to(obj, {
      val: endValue,
      
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 100%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
  if (ref.current) {
    ref.current.innerText = Math.floor(obj.val).toLocaleString();
  }
},
    });
  }, [endValue]);

  return ref;
};

export default useCountUp;