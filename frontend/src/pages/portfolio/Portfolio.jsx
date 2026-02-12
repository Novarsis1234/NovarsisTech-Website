import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  /* ================= SCHEMA DATA ================= */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Novarsis Technology Portfolio Projects & Case Studies",
    description:
      "Explore Novarsis Technology portfolio featuring web development, app development, UI/UX design and digital marketing projects.",
    author: {
      "@type": "Organization",
      name: "Novarsis Technology",
    },
    publisher: {
      "@type": "Organization",
      name: "Novarsis Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://novarsistech.com/logo.png",
      },
    },
    mainEntityOfPage: "https://novarsistech.com/portfolio",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://novarsistech.com/" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://novarsistech.com/portfolio" },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novarsis Technology",
    url: "https://novarsistech.com",
    logo: "https://novarsistech.com/logo.png",
  };

  return (
    <>
      <Helmet>
        <title>
          Novarsis Technology Portfolio | IT Projects & Case Studies
        </title>

        <meta
          name="description"
          content="Novarsis Technology portfolio showcasing web development, mobile app development, UI/UX design and digital marketing projects with real business results."
        />

        <link rel="canonical" href="https://novarsistech.com/portfolio" />
        <meta name="robots" content="index, follow" />

        <link rel="preload" as="image" href="/Images/bannerImage.png" />

        {/* SCHEMAS */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* ================= HERO ================= */}
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

          {/* ✅ ONLY 1 H1 */}
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Novarsis Technology Portfolio
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= ARTICLE CONTENT ================= */}
      <article>
        {/* INTRO */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
              IT Projects & Case{" "}
              <span className="text-[#008300]">
                Studies by Novarsis Technology
              </span>
            </h2>

            <p className="mb-3">
              Novarsis Technology portfolio highlights modern web development,
              mobile app solutions, UI/UX design, and digital marketing
              projects created for startups and enterprise businesses.
            </p>

            <p className="mb-3">
              Our team focuses on SEO-friendly architecture, responsive design,
              and high-performance coding standards to deliver measurable
              business growth.
            </p>

            <p>
              Each project demonstrates our commitment to innovation, scalable
              software development, and long-term digital transformation.
            </p>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section className="relative bg-white overflow-hidden py-14 px-4">
          <h2 className="sr-only">
            Novarsis Technology Company Portfolio PDF Showcase
          </h2>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                Our <span className="text-[#008300]">Company Portfolio</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Explore our professional company profile showcasing successful
                IT solutions, real client collaborations, and innovative digital
                transformation projects built by Novarsis Technology.
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
      </article>

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
