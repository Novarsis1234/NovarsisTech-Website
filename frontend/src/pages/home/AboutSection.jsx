import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaUserTie, FaCogs } from "react-icons/fa";
import Reveal from "../../components/Reveal";

const AboutSection = () => {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [years, setYears] = useState(0);
  const [scale, setScale] = useState(1);
  const [startCount, setStartCount] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  /* Scroll Parallax */
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Intersection Trigger */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          setAnimateHeading(true);
        }
      },
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Counter */
  useEffect(() => {
    if (!startCount) return;
    let count = 1;
    const interval = setInterval(() => {
      if (count <= 8) {
        setYears(count);
        setScale(1 + count * 0.015);
        count++;
      } else clearInterval(interval);
    }, 180);
    return () => clearInterval(interval);
  }, [startCount]);

  /* Mouse Parallax */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCirclePos({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };
  const handleMouseLeave = () => setCirclePos({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-20 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/parallex4.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div
          className="relative flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glow */}
          <div
            className="absolute w-40 sm:w-52 h-40 sm:h-52 bg-[#008300]/25 blur-3xl rounded-full transition-transform duration-500"
            style={{
              transform: `translate(${circlePos.x}px, ${circlePos.y - offsetY * 0.1}px)`,
            }}
          />

          <img
            src="/Images/novarsis-parallex1.avif"
            alt="Team"
            className="relative z-10 w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px]
              rounded-3xl shadow-2xl object-cover
              border border-white/20 transition-transform duration-700"
            style={{
              transform: `translateY(${offsetY * 0.15}px) scale(${scale})`,
            }}
          />

          {/* Experience Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 
            bg-white/90 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4 
            flex items-center space-x-3 shadow-xl z-20">

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]">
              {years}
            </h2>
            <div className="text-black text-xs sm:text-sm font-semibold leading-tight">
              <p>Years</p>
              <p>Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white text-center lg:text-left">
          <Reveal>
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-widest text-[#008300] mb-3">
              About Our Company
            </p>
          </Reveal>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug ${
              animateHeading
                ? "animate-reveal"
                : "opacity-0 -translate-x-full"
            }`}
          >
            We are Partner of Your{" "}
            <span className="text-[#008300]">Success</span>
          </h2>

          <Reveal>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Novarsis Technology delivers cutting-edge digital solutions that
              help brands scale faster. We combine innovation, design, and
              performance-driven development to build future-ready businesses.
            </p>
          </Reveal>

          {/* CARDS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-10">
            {[
              { icon: <FaUserTie />, title: "IT Consultant", text: "Smarter Solutions" },
              { icon: <FaCogs />, title: "IT Specialist", text: "Faster Execution" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center bg-white/90 backdrop-blur-xl
                px-5 py-4 rounded-2xl w-full sm:w-[240px]
                hover:scale-105 transition"
              >
                <div className="text-[#008300] text-3xl mr-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-black">{item.title}</h4>
                  <p className="text-black text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* POINTS */}
          <ul className="space-y-3 max-w-xl mx-auto lg:mx-0">
            {[
              "Skilled and certified IT experts",
              "Reliable, efficient, and scalable technology solutions",
              "Expertise across web, branding, and organic growth",
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <FaCheckCircle className="text-[#008300] mt-1 mr-2" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes reveal {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-reveal {
          animation: reveal 1.1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
