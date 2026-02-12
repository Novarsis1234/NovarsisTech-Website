import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

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
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/bannerImage.png"
        />

        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

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
              Novarsis Technology Portfolio
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= VISIBLE SEO INTRO SECTION ================= */}
      <section className="bg-white py-14 px-4">
          <div className="absolute top-40 right-[-120px] w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">

          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
            IT Projects & Case <span className="text-[#008300]"> Studies by Novarsis Technology</span>
          </h2>

          <p className="mb-4">
            The Novarsis Technology portfolio highlights our journey in delivering
            innovative digital solutions for startups, enterprises, and growing
            brands. Our team specializes in modern web development, scalable mobile
            applications, UI/UX design, branding strategies, and result-driven
            digital marketing services tailored to real business goals.
          </p>

          <p className="mb-4">
            Every project showcased in our portfolio represents our focus on
            performance, creativity, and long-term value. We design platforms that
            not only look visually appealing but also follow advanced SEO practices,
            responsive layouts, and user-friendly experiences to maximize online
            growth.
          </p>

          <p>
            By combining technology with strategic thinking, Novarsis Technology
            builds digital products that help companies stand out in competitive
            markets. Explore our latest work to understand how we transform ideas
            into powerful digital solutions that drive measurable success.
          </p>

        </div>
      </section>

      {/* ================= PORTFOLIO CONTENT ================= */}
      <section className="relative bg-white overflow-hidden py-24 px-4">

        <h2 className="sr-only">
          Novarsis Technology Company Portfolio PDF – IT Services and Project Showcase
        </h2>

       
        <div className="absolute top-40 right-[-120px] w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              Our <span className="text-[#008300]">Company Portfolio</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-base sm:text-lg text-justify">
              Our comprehensive portfolio PDF presents a detailed overview of our
              professional journey, showcasing creative projects, technical
              expertise, and successful collaborations across multiple industries.
            </p>
          </Reveal>

          <Reveal>
            <button
              onClick={() => setOpen(true)}
              className="bg-[#008300] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full z-10 hover:bg-red-600 transition"
            >
              Close
            </button>

            <iframe
              src="/Images/Novarsis-Tech-Portfolio.pdf"
              title="Portfolio PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <AutoInternalLinks />
    </>
  );
};

export default Portfolio;
