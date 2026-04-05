import { useEffect, useRef } from "react";
import gsap from "gsap";

const useGSAP = (animationFn, options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animationFn(ref.current, gsap);
    }, ref);

    return () => ctx.revert();
  }, options.dependencies || []);

  return ref;
};

export default useGSAP;