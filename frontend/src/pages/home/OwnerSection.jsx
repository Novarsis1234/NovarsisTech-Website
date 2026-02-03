import React from "react";

const OwnerSection = () => {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT : OWNER IMAGE */}
        <div className="flex justify-center relative group">
          
          {/* Glow */}
          <div className="absolute -inset-6 bg-[#008300]/10 blur-3xl rounded-3xl opacity-70"></div>

          <img
            src="/Images/novarsis-team1.webp"
            alt="Anuj Kumar"
            className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover 
            rounded-3xl shadow-2xl border border-gray-200
            transform transition-all duration-700
            group-hover:scale-105 "
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="text-center md:text-left">
          
          <p className="text-[#008300] font-semibold uppercase tracking-widest text-sm mb-3">
            From The Founder
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            Message From the{" "}
            <span className="text-[#008300]">Founder</span>
          </h2>

          <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed italic font-serif max-w-xl mx-auto md:mx-0">
            NovarsisTech is an innovative IT company dedicated to delivering
            modern web development solutions, scalable applications, and
            cutting-edge digital services. We believe in quality, performance,
            and long-term partnerships that empower businesses to grow
            confidently in the digital world.
          </p>

          <h3 className="text-xl font-semibold text-[#008300] mb-1">
            — Anuj Kumar
          </h3>

          <p className="text-sm text-gray-600">
            Founder & CEO, NovarsisTech
          </p>

          {/* Optional Signature */}
          {/*
          <div className="mt-4 flex justify-center md:justify-start">
            <img
              src="/Images/Logo's (1).gif"
              alt="Founder Signature"
              className="w-44 opacity-90"
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
