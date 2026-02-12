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

        <link rel="canonical" href="https://novarsistech.com/founder-message" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
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

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Founder Message - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="A message from Anuj Kumar, Founder & CEO of Novarsis Technology."
        />

        {/* 🔥 PERSON + ORGANIZATION SCHEMA (EEAT BOOST) */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"ProfilePage",
            "mainEntity":{
              "@type":"Person",
              "name":"Anuj Kumar",
              "jobTitle":"Founder & CEO",
              "worksFor":{
                "@type":"Organization",
                "name":"Novarsis Technology",
                "url":"https://novarsistech.com"
              },
              "url":"https://novarsistech.com/founder-message"
            }
          }
          `}
        </script>
      </Helmet>

      <section
        className="relative bg-white py-20 px-6 overflow-hidden"
        aria-labelledby="founder-heading"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT IMAGE ================= */}
          <figure className="flex justify-center relative group">
            <div className="absolute -inset-6 bg-[#008300]/10 blur-3xl rounded-3xl opacity-70"></div>

            <img
              src="/Images/novarsis-team1.webp"
              alt="Anuj Kumar Founder of Novarsis Technology IT Company"
              loading="lazy"
              className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover 
              rounded-3xl shadow-2xl border border-gray-200
              transform transition-all duration-700
              group-hover:scale-105 "
            />
          </figure>

          {/* ================= RIGHT CONTENT ================= */}
          <article className="text-center md:text-left">
            <header>
              <p className="text-[#008300] font-extrabold uppercase tracking-widest text-sm mb-3">
                From The Founder
              </p>

              {/* ✅ EXACTLY ONE H1 */}
              <h1
                id="founder-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6"
              >
                Message From the{" "}
                <span className="text-[#008300]">Founder</span>
              </h1>
            </header>

            {/* DESCRIPTION */}
            <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed text-justify italic font-serif max-w-xl mx-auto md:mx-0">
              NovarsisTech is an innovative IT company dedicated to delivering
              modern web development solutions, scalable applications, and
              cutting-edge digital services. We believe in quality, performance,
              and long-term partnerships that empower businesses to grow
              confidently in the digital world.
            </p>

            {/* AUTHOR INFO */}
            <h2 className="text-xl font-extrabold text-[#008300] mb-1">
              — Anuj Kumar
            </h2>

            <p className="text-sm text-gray-600">
              Founder & CEO, Novarsis Technology
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default OwnerSection;
