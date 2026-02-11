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
  <title>Novarsis Technology | Leading IT Services & Software Development Company</title>

  <meta
    name="description"
    content="Novarsis Technology delivers advanced IT services including web development, app development, UI/UX design, SEO optimization, and digital marketing solutions to help businesses grow faster."
  />

  <meta
    name="keywords"
    content="Novarsis Technology, IT company India, software development, web development services, digital marketing, SEO optimization, UI UX design"
  />

  <link rel="canonical" href="https://novarsis.com/" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Novarsis Technology | Innovative IT Solutions" />
  <meta
    property="og:description"
    content="Scalable IT services, modern development, and powerful digital solutions designed for business growth."
  />
  <meta property="og:url" content="https://novarsis.com/" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology - IT Services Company" />
  <meta
    name="twitter:description"
    content="Leading IT solutions company offering development, branding, SEO, and digital growth services."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

   
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
     
    </div> </>
  );
};

export default Home;
