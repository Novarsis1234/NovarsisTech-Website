import React, { useState } from "react";
import {
  FaGlobe,
  FaRocket,
  FaChartLine,
  FaShoppingCart,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

const services = [
  {
    title: "Web Development",
    desc: "We build fast, secure, and scalable websites using modern technologies to deliver seamless performance and excellent user experience.",
    icon: <FaGlobe size={20} />,
    img: "/Images/service-web.webp",
    path: "/webdeveloper",
  },
  {
    title: "App Development",
    desc: "High-performance Android and iOS applications with intuitive UI, strong backend architecture, and scalable performance.",
    icon: <FaMobileAlt size={20} />,
    img: "/Images/service-app.webp",
    path: "/appdevelopment",
  },
  {
    title: "UI / UX Design",
    desc: "User-centric UI/UX designs that enhance engagement, usability, and customer satisfaction across all platforms.",
    icon: <FaPaintBrush size={20} />,
    img: "/Images/service-uiux.webp",
    path: "/uiuxdesign",
  },
  {
    title: "CMS Development",
    desc: "Custom WordPress & CMS solutions that are easy to manage, secure, and perfectly aligned with business goals.",
    icon: <FaShoppingCart size={20} />,
    img: "/Images/service-cms.webp",
    path: "/cmsdevelopment",
  },
  {
    title: "Digital Marketing",
    desc: "Result-driven digital marketing strategies to increase brand visibility, leads, and conversions online.",
    icon: <FaRocket size={20} />,
    img: "/Images/service-digital.webp",
    path: "/digitalmarketing",
  },
  {
    title: "SEO Optimization",
    desc: "Advanced SEO techniques to improve rankings, drive organic traffic, and ensure long-term online growth.",
    icon: <FaSearch size={20} />,
    img: "/Images/service-seo.webp",
    path: "/seooptimization",
  },
  {
    title: "Graphic Designing",
    desc: "Creative branding, logo design, and marketing visuals that communicate clearly and convert effectively.",
    icon: <FaChartLine size={20} />,
    img: "/Images/service-graphic.webp",
    path: "/graphicdesigning",
  },
];

const ServiceItems = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index + visibleCards < services.length) setIndex(index + 1);
  };

  return (
    <section
      className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/parallex5.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center mb-14 px-6">
          <Reveal>
            <p className="text-[#008300] font-semibold uppercase tracking-wide">
              What We’re Offering
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#008300] mt-2">
              Dealing in all Professional IT Services
            </h2>
          </Reveal>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative max-w-7xl mx-auto px-6">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full bg-[#008300] text-white
            items-center justify-center shadow-lg
            hover:bg-[#009e3c] transition disabled:opacity-40 z-20"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            disabled={index + visibleCards >= services.length}
            className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full bg-[#008300] text-white
            items-center justify-center shadow-lg
            hover:bg-[#009e3c] transition disabled:opacity-40 z-20"
          >
            <FaChevronRight />
          </button>

          {/* CARDS */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(index, index + visibleCards).map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md 
                hover:shadow-2xl transition-all duration-500 
                transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-52 object-cover"
                  />

                  {/* ICON */}
                  <div className="absolute top-4 right-4 
                    bg-[#008300] text-white p-3 rounded-lg shadow-md 
                    group-hover:bg-white group-hover:text-[#008300] transition">
                    {service.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#008300] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {service.desc}
                  </p>

                  <Link to={service.path}>
                    <div className="mt-5 text-[#008300] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      <span>Read More</span>
                      <span>→</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
