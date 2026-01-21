import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "/Images/novarsis-home1.webp",
    heading: "IT Solutions & Services.",
    subHeading: "Welcome to Novarsis Technology",
    text: "We deliver complete IT and digital solutions — from website development and social media marketing to design, eCommerce, animation, and branding.",
    animation: "from-left",
  },
  {
    id: 2,
    image: "/Images/novarsis-home2.webp",
    heading: "Creative Branding & Digital Growth.",
    subHeading: "Experience the best IT Solutions",
    text: "Elevate your identity with expert branding, design, marketing, and animation solutions.",
    animation: "from-bottom",
  },
  {
    id: 3,
    image: "/Images/novarsis-home3.webp",
    heading: "Let’s Build Your Next Project.",
    subHeading: "Experience the best IT Solutions",
    text: "Connect with us today, fill out the form, and let’s create something impactful together.",
    showForm: true,
    animation: "from-right",
  },
];

const HomeSection = () => {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const startAutoSlide = useCallback(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const stopAutoSlide = useCallback(() => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div
            className={`relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 h-full text-white transition-all duration-1000 ${
              slide.animation === "from-left"
                ? index === current
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
                : slide.animation === "from-bottom"
                ? index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
                : slide.animation === "from-right"
                ? index === current
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
                : ""
            }`}
          >
            {/* Badge */}
            <p className="bg-[#008300] px-4 py-1 rounded-full text-xs sm:text-sm mb-4">
              {slide.subHeading}
            </p>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {slide.heading}
            </h1>

            {/* Text */}
            <p className="max-w-xl text-sm sm:text-base lg:text-lg mb-6">
              {slide.text}
            </p>

            {/* Buttons / Form */}
            {!slide.showForm ? (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="bg-[#008300] text-white px-6 py-2 rounded-md text-sm sm:text-base"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-800 px-6 py-2 rounded-md text-sm sm:text-base"
                >
                  Contact
                </Link>
              </div>
            ) : (
              <form className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-xs sm:max-w-md">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-3 py-2 rounded text-sm text-gray-800 border"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-3 py-2 rounded text-sm text-gray-800 border"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="3"
                    className="px-3 py-2 rounded text-sm text-gray-800 border"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#008300] text-white py-2 rounded-md text-sm font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
     {/* Navigation Buttons - Bottom Center */}
 <button
    onClick={prevSlide}
    className="
      absolute
      left-1/2 -translate-x-1/2 bottom-6
      sm:left-5 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0
      bg-[#008300]/80 hover:bg-[#008300]
      text-white
      p-3 sm:p-4
      rounded-full
      shadow-lg
      z-30
      transition-all duration-300
    "
    aria-label="Previous Slide"
  >
    <FaArrowLeft size={18} />
  </button>

  {/* NEXT */}
  <button
    onClick={nextSlide}
    className="
      absolute
      left-1/2 translate-x-1/2 bottom-6
      sm:left-auto sm:right-5 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0
      bg-[#008300]/80 hover:bg-[#008300]
      text-white
      p-3 sm:p-4
      rounded-full
      shadow-lg
      z-30
      transition-all duration-300
    "
    aria-label="Next Slide"
  >
    <FaArrowRight size={18} />
  </button>

    </section>
  );
};

export default HomeSection;
