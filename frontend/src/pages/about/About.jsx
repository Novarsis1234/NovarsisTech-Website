import React from "react";
import { Link } from "react-router-dom";

import ScrollingBanner from "../home/ScrollingBanner";
import Details from "./Details";
import Section from "../home/Section";
import AboutDetails from "./AboutDetails";
import TeamSection from "./TeamSection";
import StepsSection from "./StepsSection";
import HappyFamilyCarousel from "./HappyFamilyCarousel";
import Reveal from "../../components/Reveal";
import AboutParallaxSection from "./AboutParallaxSection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* ================= ADVANCED SEO HELMET ================= */}
      <Helmet>
        <title>
          About Novarsis Technology | Innovative IT & Software Solutions Company
        </title>

        <meta
          name="description"
          content="Learn about Novarsis Technology — a leading IT and software development company delivering web development, app solutions, UI/UX design, and digital growth services worldwide."
        />

        <link rel="canonical" href="https://novarsistech.com/about" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Novarsis Technology" />
        <meta property="og:url" content="https://novarsistech.com/about" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* 🔥 WebPage + Breadcrumb + Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@graph":[
              {
                "@type":"WebPage",
                "name":"About Novarsis Technology",
                "url":"https://novarsistech.com/about"
              },
              {
                "@type":"Organization",
                "name":"Novarsis Technology",
                "url":"https://novarsistech.com",
                "logo":"https://novarsistech.com/logo.png"
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
                    "name":"About Us",
                    "item":"https://novarsistech.com/about"
                  }
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= HERO HEADER ================= */}
    <header className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    poster="/Images/bannerImage.png"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4 sm:px-6">
    {/* Breadcrumb Navigation */}
    <nav aria-label="Breadcrumb">
      <Reveal>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl mb-2 md:mb-3">
          <Link to="/" className="hover:text-[#008300] transition">
            Home
          </Link>
          <span className="text-[#008300] mx-1">/</span> About Us
        </p>
      </Reveal>
    </nav>

    {/* ✅ EXACTLY ONE H1 */}
    <Reveal>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        About Us | Novarsis Technology
      </h1>
    </Reveal>

    {/* ✅ SEO Optimized Paragraph */}
    <Reveal>
      <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
        Novarsis Technology delivers web development, mobile apps, UI/UX design,
SEO, and digital marketing solutions for modern business growth.

      </p>
    </Reveal>
  </div>
</header>


      {/* ================= MAIN CONTENT ================= */}
      <main>
        {/* About Details Section */}
        <Details />

        {/* IT Meeting Section */}
        <Section />

        {/* Team Section */}
        <TeamSection />

        {/* Scrolling Banner */}
        <ScrollingBanner />

        {/* About Extended Content */}
        <AboutDetails />

        {/* Steps Process */}
        <StepsSection />

        {/* Parallax About Section */}
        <AboutParallaxSection />

        {/* Happy Clients Carousel */}
        <HappyFamilyCarousel />
      </main>
    </>
  );
};

export default About;
