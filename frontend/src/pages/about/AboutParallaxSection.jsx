import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  { name: "Web Development", path: "/webdeveloper" },
  { name: "App Development", path: "/appdevelopment" },
  { name: "UI / UX Design", path: "/uiuxdesign" },
  { name: "CMS Development (WordPress)", path: "/cmsdevelopment" },
  { name: "Digital Marketing", path: "/digitalmarketing" },
  { name: "Graphic Designing", path: "/graphicdesigning" },
];

const AboutParallaxSection = () => {
  return (
    <>
      {/* ================= ADVANCED SEO HELMET ================= */}
      <Helmet>
        <title>
          Software Solutions & Digital Services | Novarsis Technology
        </title>

        <meta
          name="description"
          content="Novarsis Technology provides scalable software solutions including web development, app development, UI/UX design, CMS, digital marketing, and graphic designing services."
        />

        <link
          rel="canonical"
          href="https://novarsistech.com/software-solutions"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Software Solutions That Scale Businesses - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Performance-focused software and digital services designed to help modern businesses grow faster."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/software-solutions"
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
                "serviceType":"Software Solutions & Digital Services",
                "provider":{
                  "@type":"Organization",
                  "name":"Novarsis Technology",
                  "url":"https://novarsistech.com"
                },
                "areaServed":"Worldwide",
                "url":"https://novarsistech.com/software-solutions"
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
                    "name":"Software Solutions",
                    "item":"https://novarsistech.com/software-solutions"
                  }
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        className="relative bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/Images/parallex8.jpg')" }}
        aria-labelledby="software-solutions-heading"
      >
        {/* ✅ EXACTLY ONE H1 (Hidden for global SEO safety) */}
        <header className="sr-only">
          <h1>Software Solutions and Digital Services by Novarsis Technology</h1>
        </header>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-28">
          {/* ================= HEADER ================= */}
          <header className="max-w-3xl mb-20">
            <p className="text-[#008300] uppercase tracking-[0.3em] text-xs font-extrabold mb-5">
              About Novarsis Technology
            </p>

            <h2
              id="software-solutions-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"
            >
              Software Solutions That
              <span className="block text-[#008300]">
                Scale Digital Businesses
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              Novarsis Technology is a results-driven software company helping
              businesses build scalable applications, powerful digital
              platforms, and performance-focused online solutions using modern
              technologies.
            </p>
          </header>

          {/* ================= SERVICES GRID ================= */}
          <nav
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            aria-label="Software Services Links"
          >
            {services.map((service, index) => (
              <article key={index}>
                <Link
                  to={service.path}
                  className="group relative block bg-white/10 backdrop-blur-xl
                  border border-white/15 rounded-3xl p-8
                  transition-all duration-500
                  hover:bg-white/15 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >
                  {/* Accent Dot */}
                  <div className="w-12 h-12 rounded-full bg-[#008300]/20 flex items-center justify-center mb-6">
                    <span className="w-3 h-3 bg-[#008300] rounded-full"></span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Custom {service.name.toLowerCase()} services crafted to
                    deliver performance, scalability, security, and long-term
                    business growth.
                  </p>

                  <div className="flex items-center gap-2 text-[#008300] font-semibold">
                    <span>View Details</span>
                    <span className="transform transition group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default AboutParallaxSection;
