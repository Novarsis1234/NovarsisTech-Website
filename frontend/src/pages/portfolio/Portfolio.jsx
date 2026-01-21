import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
       {/* ================= HERO SECTION ================= */}
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <Reveal>
      <p className="text-gray-300 text-lg md:text-xl mb-2">
        <Link to="/" className="hover:text-green-400 transition">
          Home
        </Link>
        <span className="text-green-400 mx-1">/</span>  Portfolio
      </p>
    </Reveal>

    <Reveal>
      <h1 className="text-4xl md:text-6xl font-bold"> Portfolio</h1>
    </Reveal>
  </div>

  {/* Decorative circle */}
 
</section>

   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-50 to-indigo-100 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#008300] mb-4">
        Our Company Portfolio
      </h1>

      <p className="text-gray-600 max-w-2xl text-center mb-8 leading-relaxed text-justify">
  Our comprehensive portfolio PDF presents a detailed overview of our
  professional journey, showcasing a wide range of projects, creative work,
  technical expertise, and successful collaborations. It highlights our
  commitment to quality, innovation, and result-oriented solutions across
  various industries. This document reflects our experience, capabilities, and
  the value we deliver to our clients through well-structured case studies,
  visual presentations, and real-world outcomes. Explore the portfolio to gain
  deeper insight into our work standards, design approach, and technological
  excellence.
</p>


      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
      >
        View Portfolio PDF
      </button>

      {/* PDF Viewer */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full md:w-[90%] md:h-[90%] rounded-xl overflow-hidden relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full z-10"
            >
              Close
            </button>

            {/* Iframe */}
            <iframe
              src="/Images/Novarsis-Tech-Portfolio.pdf"
              title="Portfolio PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
     </>
  );
};

export default Portfolio;
