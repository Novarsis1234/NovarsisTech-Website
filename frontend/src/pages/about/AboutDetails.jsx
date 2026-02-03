import React from "react";

const AboutDetails = () => {
  return (
    <section
      className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/Images/parallex7.jpg')",
      }}
    >
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-14">
        
        {/* LEFT CONTENT */}
        <div
          className="flex-1 relative border-l-4 border-[#008300] pl-6
          transition-transform duration-500 hover:translate-x-2
          text-center lg:text-left"
        >
          <p className="uppercase tracking-widest font-semibold mb-3 text-sm text-[#008300]">
            About Our IT Company
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            We Are The Best IT Solution <br />
            &{" "}
            <span className="relative inline-block text-[#008300]">
              Services
              <span className="absolute left-0 -bottom-2 w-24 h-[4px] bg-[#008300] rounded-full"></span>
            </span>{" "}
            Provider
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Over 50+ professionals work with us across multiple countries.
            Our global reach and deep technical expertise enable us to deliver
            scalable, secure, and high-performance IT solutions.
          </p>

          {/* PROGRESS BARS */}
          <div className="space-y-6 mb-4 max-w-xl mx-auto lg:mx-0">

            {/* UI/UX */}
            <div>
              <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                <span>UI/UX & Graphic Designing</span>
                <span className="text-[#008300]">100%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div className="bg-[#008300] h-2 w-full rounded-full"></div>
              </div>
            </div>

            {/* SEO */}
            <div>
              <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                <span>SEO & Paid Advertisement</span>
                <span className="text-[#008300]">95%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div className="bg-[#008300] h-2 w-[95%] rounded-full"></div>
              </div>
            </div>

            {/* Web */}
            <div>
              <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                <span>Web Design & Development</span>
                <span className="text-[#008300]">100%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div className="bg-[#008300] h-2 w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative group w-full max-w-xl">

            {/* Subtle Green Glow */}
            <div className="absolute -inset-6 bg-[#008300]/20 blur-3xl rounded-3xl"></div>

            <img
              src="/Images/novarsis-details.webp"
              alt="IT Services"
              className="relative rounded-2xl shadow-2xl w-full
              border border-[#008300]/30
              transform transition-transform duration-700
              group-hover:scale-105"
            />

            {/* Floating Badge */}
            <div
              className="absolute bottom-4 right-4 bg-[#008300] text-white
              rounded-lg shadow-xl px-5 py-3 flex items-center gap-3
              transition hover:scale-105"
            >
              <span className="text-xl">🏆</span>
              <p className="font-semibold text-sm sm:text-base">
                We are ready to assist you
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutDetails;
