import React from "react";
import { motion } from "framer-motion";

const ScrollingBanner = () => {
  const text =
    "Grow Digitally With Us * Data-Driven Results * Targeted Strategies * Social Media Success * Search Engine Mastery * Continuous Growth * ";

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white via-[#f9fbff] to-white py-4 sm:py-6 md:py-8">
      
      {/* Scrolling Text */}
      <motion.div
        className="
          whitespace-nowrap
          font-extrabold
          text-[#008300]
          tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em]
          leading-tight
          text-[1.8rem]
          sm:text-[3rem]
          md:text-[4.5rem]
          lg:text-[6rem]
        "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mx-4 sm:mx-6 md:mx-10">
            {text.split("*").map((part, idx) => (
              <React.Fragment key={idx}>
                <span className="inline-block">
                  {part.trim()}
                </span>

                {idx < text.split("*").length - 1 && (
                  <motion.span
                    className="
                      inline-block
                      mx-4 sm:mx-6 md:mx-12
                      text-orange-500
                      text-[2.2rem]
                      sm:text-[3.5rem]
                      md:text-[5rem]
                      lg:text-[6.5rem]
                      font-bold
                    "
                    whileHover={{
                      rotate: 360,
                      scale: 1.3,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  >
                    *
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
