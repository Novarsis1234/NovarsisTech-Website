import React from "react";
import { Helmet } from "react-helmet-async";

const OwnerSection = () => {
  return (
    <>
      {/* ================= ADVANCED HELMET SEO ================= */}
      <Helmet>
        <title>Founder Message | Anuj Kumar - Novarsis Technology</title>

        <meta
          name="description"
          content="Read the founder's message from Anuj Kumar, CEO of Novarsis Technology, sharing vision, innovation, and commitment to modern IT solutions and digital growth."
        />

        <meta
          name="keywords"
          content="Anuj Kumar Novarsis Technology, Founder NovarsisTech, IT company founder message, software company CEO India"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/founder-message" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Founder Message | Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Discover the vision behind Novarsis Technology from founder Anuj Kumar."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/founder-message"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Founder Message - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="A message from Anuj Kumar, Founder & CEO of Novarsis Technology."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 FOUNDER PERSON SCHEMA (E-E-A-T BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"WebPage",
        "name":"Founder Message | Anuj Kumar",
        "url":"https://novarsistech.com/founder-message",
        "about":{
          "@type":"Person",
          "name":"Anuj Kumar",
          "jobTitle":"Founder & CEO",
          "worksFor":{
            "@type":"Organization",
            "name":"Novarsis Technology",
            "url":"https://novarsistech.com"
          }
        }
      }
    `}
        </script>
      </Helmet>

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
              alt="Novarsis Technology software development services"
              className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover 
        rounded-3xl shadow-2xl border border-gray-200
        transform transition-all duration-700
        group-hover:scale-105 "
            />
          </div>

          {/* RIGHT : CONTENT */}
          <div className="text-center md:text-left">
            {/* SMALL LABEL */}
            <p className="text-[#008300] font-extrabold uppercase tracking-widest text-sm mb-3">
              From The Founder
            </p>

            {/* ✅ MAIN SEO HEADING */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
              Message From the <span className="text-[#008300]">Founder</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed text-justify italic font-serif max-w-xl mx-auto md:mx-0">
              NovarsisTech is an innovative IT company dedicated to delivering
              modern web development solutions, scalable applications, and
              cutting-edge digital services. We believe in quality, performance,
              and long-term partnerships that empower businesses to grow
              confidently in the digital world.
            </p>

            {/* FOUNDER NAME */}
            <h2 className="text-xl font-extrabold text-[#008300] mb-1">
              — Anuj Kumar
            </h2>

            <p className="text-sm text-gray-600">Founder & CEO, NovarsisTech</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnerSection;
