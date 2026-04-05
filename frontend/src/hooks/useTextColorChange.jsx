import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTextColorChange = (color = "black") => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const section = el.closest("section");

    const initialColor = getComputedStyle(el).color;

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 20%",
      end: "bottom 70%",

      // 👇 ENTER
      onEnter: () => {
        gsap.to(el, { color: color, duration: 0.4 });
      },

      // 👇 LEAVE DOWN
      onLeave: () => {
        gsap.to(el, { color: initialColor, duration: 0.4 });
      },

      // 👇 ENTER BACK (scroll up)
      onEnterBack: () => {
        gsap.to(el, { color: color, duration: 0.4 });
      },

      // 👇 LEAVE BACK (scroll up)
      onLeaveBack: () => {
        gsap.to(el, { color: initialColor, duration: 0.4 });
      },
    });

    return () => st.kill();
  }, [color]);

  return ref;
};

export default useTextColorChange;