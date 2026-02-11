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
    

<Helmet>
  <title>About Novarsis Technology | Innovative IT & Software Solutions Company</title>

  <meta
    name="description"
    content="Learn about Novarsis Technology — a leading IT and software development company delivering web development, app solutions, UI/UX design, and digital growth services worldwide."
  />

  <meta
    name="keywords"
    content="About Novarsis Technology, IT company India, software development company, digital solutions agency, web development experts"
  />

  <link rel="canonical" href="https://novarsis.com/about" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="About Novarsis Technology" />
  <meta
    property="og:description"
    content="Discover our mission, vision, expert team, and innovative approach to delivering powerful IT solutions."
  />
  <meta property="og:url" content="https://novarsis.com/about" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Novarsis Technology" />
  <meta
    name="twitter:description"
    content="Meet the team behind Novarsis Technology and explore our journey in building scalable digital solutions."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

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

          {/* Centered Content */}
          <div className="relative z-10 text-center text-white px-4">
            <Reveal>
              <p className="text-gray-300 text-lg md:text-xl mb-2">
                <Link to="/" className="hover:text-[#008300] transition">
                  Home
                </Link>
                <span className="text-[#008300] mx-1">/</span> About Us
              </p>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold">
                About Us | Novarsis Technology
              </h1>
            </Reveal>
          </div>
        </section>

        <Details />
        <Section />
        <TeamSection />
        <ScrollingBanner />
        <AboutDetails />
        <StepsSection />
        <AboutParallaxSection />
        <HappyFamilyCarousel />
      </>

  );
};

export default About;
