import React from "react";
import ServiceSection from "./ServiceSection";
import AboutSection from "./AboutSection";
import ScrollingBanner from "./ScrollingBanner";
import ServiceItems from "./ServiceItems";
import PremiumServices from "./PremiumServices";
import StatsSection from "./StatsSection";
import SecuritySection from "./SecuritySection";
import TestimonialsSection from "./TestimonialsSection";
import ChooseUsSection from "./ChooseUsSection";
import Section from "./Section";
import OwnerSection from "./OwnerSection";
import HomeSectionPage from "./HomeSectionPage";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Novarsis Technology | Leading IT Services & Software Development
          Company
        </title>

        <meta
          name="description"
          content="Novarsis Technology delivers advanced IT services including web development, app development, UI/UX design, SEO optimization, and digital marketing solutions to help businesses grow faster."
        />

        <meta
          name="keywords"
          content="Novarsis Technology, IT company India, software development, web development services, digital marketing, SEO optimization, UI UX design"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Novarsis Technology | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Scalable IT services, modern development, and powerful digital solutions designed for business growth."
        />
        <meta property="og:url" content="https://novarsistech.com/" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Novarsis Technology - IT Services Company"
        />
        <meta
          name="twitter:description"
          content="Leading IT solutions company offering development, branding, SEO, and digital growth services."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Organization Schema (Updated Domain) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Novarsis Technology",
        "url":"https://novarsistech.com",
        "logo":"https://novarsistech.com/logo.png"
      }
    `}
        </script>
      </Helmet>
      <section className="sr-only">
        {" "}
        <p>
          Novarsis Technology is a professional IT solutions company offering
          modern digital services including web development, mobile app
          development, UI/UX design, SEO optimization, digital marketing, and
          graphic designing. Our goal is to help businesses build scalable
          digital platforms that improve online visibility, enhance user
          experience, and drive measurable growth. With a team of skilled
          developers, designers, and marketing experts, we create innovative
          solutions tailored to your business goals. We focus on
          performance-driven development, secure architecture, and modern design
          standards to ensure every project delivers long-term value. From
          startups to growing enterprises, our services are designed to help
          brands strengthen their digital presence and stay competitive in the
          evolving technology landscape. By combining creativity, strategy, and
          advanced tools, Novarsis Technology empowers businesses to achieve
          sustainable digital success.
        </p>
      </section>
      <div>
        <HomeSectionPage />
        <OwnerSection />
        <AboutSection />
        <ServiceSection />
        <ScrollingBanner />
        <ServiceItems />
        <StatsSection />
        <PremiumServices />
        <SecuritySection />
        <Section />
        <ChooseUsSection />
        <TestimonialsSection />
      </div>{" "}
    </>
  );
};

export default Home;
