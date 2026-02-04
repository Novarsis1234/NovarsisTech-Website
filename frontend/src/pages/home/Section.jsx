


import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

const Section = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 sm:py-28 px-5 sm:px-8 md:px-16"
      style={{
        backgroundImage: "url('/Images/parallex3.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <Reveal>
            <p className="inline-block text-[#008300] font-extrabold text-sm sm:text-base tracking-widest uppercase">
              Do You Need a Meeting?
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Better IT Solutions <br className="hidden sm:block" />
              And Services At <br className="hidden sm:block" />
              Your Fingertips
            </h1>
          </Reveal>

          {/* Accent Line */}
          <div className="w-16 h-1 bg-[#008300] rounded-full mx-auto lg:mx-0"></div>

          <Reveal>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials that communicate clearly.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                to="/services"
                className="relative inline-flex items-center gap-2 
                bg-[#008300] hover:bg-[#009e3c] 
                text-white font-semibold py-3 px-9 rounded-md 
                transition-all duration-300 shadow-lg hover:shadow-green-500/40"
              >
                Learn More
                <span className="absolute inset-0 rounded-md ring-1 ring-[#008300]/40"></span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col gap-6 items-center lg:items-end">
          
          {/* CARD 1 */}
          <div className="bg-white/90 backdrop-blur-xl text-[#0B1A59] 
            p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center">
            <Reveal>
              <div className="mx-auto mb-4 w-24 h-24 
                border-8 border-[#008300] rounded-full 
                flex items-center justify-center text-2xl font-bold">
                100%
              </div>
            </Reveal>
            <Reveal>
              <p className="text-sm font-semibold">
                We have 100% satisfied customers
              </p>
            </Reveal>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/90 backdrop-blur-xl text-[#0B1A59] 
            p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center">
            <Reveal>
              <div className="mx-auto mb-4 w-24 h-24 
                border-8 border-[#008300] border-r-gray-200 
                rounded-full flex items-center justify-center text-2xl font-bold">
                90%
              </div>
            </Reveal>
            <Reveal>
              <p className="text-sm font-semibold">
                Projects have been completed
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;

