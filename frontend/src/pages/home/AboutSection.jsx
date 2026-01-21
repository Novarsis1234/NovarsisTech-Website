import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaUserTie, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

const AboutSection = () => {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [years, setYears] = useState(0);
  const [scale, setScale] = useState(1);
  const [startCount, setStartCount] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  // Scroll-based parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          setAnimateHeading(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter
  useEffect(() => {
    if (!startCount) return;
    let count = 1;
    const interval = setInterval(() => {
      if (count <= 10) {
        setYears(count);
        setScale(1 + count * 0.02);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 250);
    return () => clearInterval(interval);
  }, [startCount]);

  // Mouse Parallax
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    setCirclePos({ x: offsetX / 15, y: offsetY / 15 });
  };
  const handleMouseLeave = () => setCirclePos({ x: 0, y: 0 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-6 lg:px-20 bg-green-200"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Image */}
        <div
          className="relative flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Floating Glow Circle */}
          <div
            className="absolute w-52 h-52 bg-[#008300]/20 blur-3xl rounded-full transition-transform duration-500"
            style={{
              transform: `translate(${circlePos.x}px, ${circlePos.y - offsetY * 0.15}px)`,
            }}
          ></div>

          <img
            src="/Images/novarsis-parallex1.avif"
            alt="Team"
            className="relative z-10 rounded-3xl shadow-2xl w-[420px] object-cover border-4 border-black/20 transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${offsetY * 0.15}px) scale(${scale})`,
            }}
          />

          {/* Experience Badge */}
          <div className="absolute bottom-[-20px] left-10 bg-black/10 backdrop-blur-lg border border-black/20 rounded-2xl px-6 py-4 flex items-center space-x-3 shadow-xl z-20">
            <h2 className="text-5xl font-extrabold text-black">{years}</h2>
            <div className="text-black text-sm font-semibold leading-tight">
              <p>Years</p>
              <p>Experience</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-black">
          <Reveal>
            <p className="uppercase text-sm font-semibold tracking-widest text-[#008300] mb-3">
              About Our Company
            </p>
          </Reveal>

          {/* Heading */}
          <h2
            className={`text-4xl sm:text-5xl font-extrabold mb-6 leading-snug ${
              animateHeading ? "animate-reveal" : "opacity-0 translate-x-[-100%]"
            }`}
          >
            We are Partner of Your{" "}
            <span className="bg-[#008300] bg-clip-text text-transparent">
              Success
            </span>
          </h2>

          <Reveal>
            <p className="text-black mb-8 leading-relaxed">
              Novarsis Technology delivers cutting-edge digital solutions that
              transform businesses. From web design to brand strategy, we blend
              technology with creativity to accelerate your growth.
            </p>
          </Reveal>

          {/* Cards */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center bg-black/10 backdrop-blur-lg border border-black/20 px-6 py-4 rounded-2xl w-[240px] hover:bg-black/20 transition-all duration-300">
              <FaUserTie className="text-[#008300] text-3xl mr-3" />
              <div>
                <h4 className="font-bold text-black text-lg">IT Consultant</h4>
                <p className="text-black text-sm">Smarter Solutions</p>
              </div>
            </div>

            <div className="flex items-center bg-black/10 backdrop-blur-lg border border-black/20 px-6 py-4 rounded-2xl w-[240px] hover:bg-black/20 transition-all duration-300">
              <FaCogs className="text-[#008300] text-3xl mr-3" />
              <div>
                <h4 className="font-bold text-black text-lg">IT Specialist</h4>
                <p className="text-black text-sm">Faster Execution</p>
              </div>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-3 mb-10 text-black">
            <li className="flex items-center">
              <FaCheckCircle className="text-[#008300] mr-2" />
              Skilled and certified IT experts
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#008300] mr-2" />
              Reliable, efficient, and scalable technology solutions
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#008300] mr-2" />
              Expertise across web, branding, and organic traffic growth
            </li>
          </ul>

          {/* Button */}
          <Link
            to={"/services"}
            className="bg-[#008300] hover:opacity-90 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes reveal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-reveal {
          animation: reveal 1.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
