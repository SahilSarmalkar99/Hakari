import { motion, useReducedMotion } from "framer-motion";

export default function PageWrapper({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    initial: {
      opacity: 0,
      filter: shouldReduceMotion ? "none" : "blur(3px)"
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: shouldReduceMotion
        ? { duration: 0.2 }
        : {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] // ultra-smooth, modern curve
          }
    },
    exit: {
      opacity: 0,
      filter: shouldReduceMotion ? "none" : "blur(3px)",
      transition: shouldReduceMotion
        ? { duration: 0.15 }
        : {
            duration: 0.3,
            ease: [0.7, 0, 1, 1] // fast, clean exit
          }
    }
  };

  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen will-change-[opacity,filter]"
      style={{
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased"
      }}
    >
      {/* Layered fade for depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.35 }}
      >
        {children}
      </motion.div>
    </motion.main>
  );
}