import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
   import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
 

<Helmet>
  <title>Our Portfolio | Novarsis Technology Projects & Case Studies</title>

  <meta
    name="description"
    content="Explore the Novarsis Technology portfolio showcasing web development, app development, UI/UX design, digital marketing, and innovative IT projects delivered for clients worldwide."
  />

  <meta
    name="keywords"
    content="Novarsis Technology portfolio, IT company projects, web development portfolio India, software company case studies, digital agency work"
  />

  <link rel="canonical" href="https://novarsis.com/portfolio" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Novarsis Technology Portfolio" />
  <meta
    property="og:description"
    content="Discover our latest projects, creative solutions, and successful IT implementations."
  />
  <meta property="og:url" content="https://novarsis.com/portfolio" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology Portfolio & Projects" />
  <meta
    name="twitter:description"
    content="See how Novarsis Technology delivers modern digital solutions through real client projects."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

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
          poster="/Images/bannerImage.png"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="text-[#008300] mx-1">/</span> Portfolio
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Portfolio
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <section className="relative bg-white overflow-hidden py-24 px-4">
        
        {/* ===== Decorative Circles ===== */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute top-40 right-[-120px] w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#008300]/10 rounded-full"></div>
        {/* <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div> */}

        {/* ===== Content ===== */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Our <span className="text-[#008300]">Company Portfolio</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base sm:text-lg">
              Our comprehensive portfolio PDF presents a detailed overview of our
              professional journey, showcasing a wide range of projects, creative
              work, technical expertise, and successful collaborations. It
              highlights our commitment to quality, innovation, and
              result-oriented solutions across various industries.
            </p>
          </Reveal>

          {/* Button */}
          <Reveal>
            <button
              onClick={() => setOpen(true)}
              className="
                bg-[#008300] text-white
                px-10 py-4 rounded-full
                text-lg font-semibold
                shadow-lg hover:shadow-2xl
                hover:scale-105 transition-all duration-300
              "
            >
              View Portfolio PDF
            </button>
          </Reveal>
        </div>
      </section>

      {/* ================= PDF MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full md:w-[90%] md:h-[90%] rounded-xl overflow-hidden relative shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full z-10 hover:bg-red-600 transition"
            >
              Close
            </button>

            {/* PDF */}
            <iframe
              src="/Images/Novarsis-Tech-Portfolio.pdf"
              title="Portfolio PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
