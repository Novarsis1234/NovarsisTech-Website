import React, { useRef, useEffect } from "react";
import Reveal from "../../components/Reveal";

const logos = [
  "/Images/novarsis-logo1.webp",
  "/Images/novarsis-logo2.webp",
  "/Images/novarsis-logo3.webp",
  "/Images/novarsis-logo4.webp",
  "/Images/novarsis-logo5.webp",
  "/Images/novarsis-logo6.webp",
];

const HappyFamilyCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += scrollContent;

    let scrollAmount = 0;
    const scrollSpeed = 1.2;

    const scrollStep = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <section className="relative bg-white py-20 px-6 sm:px-10 overflow-hidden">
      
      {/* ===== Decorative Circles (SAME AS STATS SECTION) ===== */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
              Novarsis <span className="text-[#008300]">Happy Family</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
              Trusted by startups, growing businesses, and enterprises who rely
              on Novarsis Technology for scalable software solutions, digital
              transformation, and long-term partnerships.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden whitespace-nowrap w-full"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-6"
            >
              <div
                className="
                  flex justify-center items-center h-28
                  bg-white rounded-2xl
                  border border-[#008300]/20
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
              >
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="
                    w-32 h-20 object-contain
                    grayscale hover:grayscale-0
                    transition-all duration-700
                    hover:scale-110
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HappyFamilyCarousel;
