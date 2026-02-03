import React from "react";
import {
  FaLaptop,
  FaLock,
  FaTrophy,
  FaEye,
  FaBolt,
  FaCode,
  FaSitemap,
  FaPenNib,
} from "react-icons/fa";
import Reveal from "../../components/Reveal";

const SecuritySection = () => {
  const services = [
    { icon: <FaLaptop />, label: "Web Consultation" },
    { icon: <FaTrophy />, label: "Security Optimization" },
    { icon: <FaLock />, label: "Operational Security" },
    { icon: <FaEye />, label: "Smarter Insights" },
    { icon: <FaBolt />, label: "Super Faster" },
    { icon: <FaCode />, label: "Developer Friendly" },
    { icon: <FaSitemap />, label: "Organize Easily" },
    { icon: <FaPenNib />, label: "User Friendly Design" },
  ];

  return (
    <section className="relative bg-[#f9fbff] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

      {/* Left Accent Border */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#008300]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center group">
          
          {/* Glow */}
          <div className="absolute -inset-6 bg-[#008300]/10 blur-3xl rounded-3xl opacity-70"></div>

          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl
            transform transition duration-700 group-hover:scale-105 group-hover:rotate-1">
            <img
              src="/Images/novarsis-Protecting-Your-Privacy-Piccc.webp"
              alt="Cyber Security"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* Side Line */}
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#008300] rounded-full hidden md:block"></div>

          <Reveal>
            <p className="text-[#008300] font-semibold mb-2 uppercase tracking-widest text-sm">
              Advance Protect
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-5 leading-tight">
              Empowering Your Online <br />
              <span className="text-[#008300]">Security is Our Priority</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
              We safeguard your digital presence with robust security solutions,
              ensuring performance, privacy, and reliability using the latest
              technologies and best practices.
            </p>
          </Reveal>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-center bg-white border border-gray-200
                rounded-xl px-4 py-4 shadow-md
                hover:border-[#008300] hover:shadow-xl
                transition-all duration-500 cursor-pointer"
              >
                <Reveal>
                  <div className="bg-[#008300]/10 text-[#008300] p-3 rounded-lg text-lg mr-3
                    group-hover:bg-[#008300] group-hover:text-white transition">
                    {service.icon}
                  </div>
                </Reveal>

                <Reveal>
                  <span className="font-semibold text-gray-800 text-sm md:text-base">
                    {service.label}
                  </span>
                </Reveal>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
