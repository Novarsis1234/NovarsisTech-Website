import React from "react";
import { Helmet } from "react-helmet-async";

const AboutDetails = () => {
  return (
    <>
      {/* ================= ADVANCED SEO HELMET ================= */}
      <Helmet>
        <title>
          Best IT Solution & Services Provider | Novarsis Technology
        </title>

        <meta
          name="description"
          content="Novarsis Technology delivers scalable IT solutions including UI/UX design, SEO, paid advertising, and web development with a global team of experts."
        />

        <link
          rel="canonical"
          href="https://novarsistech.com/it-services-provider"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best IT Services Provider - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Scalable and secure IT services powered by global expertise and modern technologies."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/it-services-provider"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* 🔥 Service + Organization + Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@graph":[
              {
                "@type":"Service",
                "serviceType":"IT Solutions & Services",
                "provider":{
                  "@type":"Organization",
                  "name":"Novarsis Technology",
                  "url":"https://novarsistech.com"
                },
                "areaServed":"Worldwide",
                "url":"https://novarsistech.com/it-services-provider"
              },
              {
                "@type":"Organization",
                "name":"Novarsis Technology",
                "url":"https://novarsistech.com"
              },
              {
                "@type":"BreadcrumbList",
                "itemListElement":[
                  {
                    "@type":"ListItem",
                    "position":1,
                    "name":"Home",
                    "item":"https://novarsistech.com"
                  },
                  {
                    "@type":"ListItem",
                    "position":2,
                    "name":"IT Services Provider",
                    "item":"https://novarsistech.com/it-services-provider"
                  }
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/parallex7.jpg')" }}
        aria-labelledby="about-details-heading"
      >
        {/* ✅ EXACTLY ONE H1 (Hidden for global heading safety) */}
        <header className="sr-only">
          <h1>Best IT Solutions and Services Provider by Novarsis Technology</h1>
        </header>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-14">
          {/* ================= LEFT CONTENT ================= */}
          <article
            className="flex-1 relative border-l-4 border-[#008300] pl-6
            transition-transform duration-500 hover:translate-x-2
            text-center lg:text-left"
          >
            <header>
              <p className="uppercase tracking-widest font-extrabold mb-3 text-sm text-[#008300]">
                About Our IT Company
              </p>

              <h2
                id="about-details-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
              >
                We Are The Best IT Solution <br />&{" "}
                <span className="relative inline-block text-[#008300]">
                  Services
                  <span className="absolute left-0 -bottom-2 w-24 h-[4px] bg-[#008300] rounded-full"></span>
                </span>{" "}
                Provider
              </h2>
            </header>

            <p className="text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Over 50+ professionals work with us across multiple countries. Our
              global reach and deep technical expertise enable us to deliver
              scalable, secure, and high-performance IT solutions.
            </p>

            {/* ===== PROGRESS BARS ===== */}
            <div className="space-y-6 mb-4 max-w-xl mx-auto lg:mx-0">
              <article>
                <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                  <p>UI/UX & Graphic Designing</p>
                  <span className="text-[#008300]">100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#008300] h-2 w-full rounded-full"></div>
                </div>
              </article>

              <article>
                <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                  <p>SEO & Paid Advertisement</p>
                  <span className="text-[#008300]">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#008300] h-2 w-[95%] rounded-full"></div>
                </div>
              </article>

              <article>
                <div className="flex justify-between mb-2 text-sm font-semibold text-white">
                  <p>Web Design & Development</p>
                  <span className="text-[#008300]">100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#008300] h-2 w-full rounded-full"></div>
                </div>
              </article>
            </div>
          </article>

          {/* ================= RIGHT IMAGE ================= */}
          <figure className="flex-1 flex justify-center relative">
            <div className="relative group w-full max-w-xl">
              <div className="absolute -inset-6 bg-[#008300]/20 blur-3xl rounded-3xl"></div>

              <img
                src="/Images/AboutService.png"
                alt="Novarsis Technology IT Services and Solutions Team Working"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full
                border border-[#008300]/30
                transform transition-transform duration-700
                group-hover:scale-105"
              />

              <figcaption
                className="absolute bottom-4 right-4 bg-[#008300] text-white
                rounded-lg shadow-xl px-5 py-3 flex items-center gap-3
                transition hover:scale-105"
              >
                <span className="text-xl">🏆</span>
                <p className="font-semibold text-sm sm:text-base">
                  We are ready to assist you
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default AboutDetails;
