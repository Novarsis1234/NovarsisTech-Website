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
import AutoScrollPreview from "../../components/AutoScrollPreview";


const Home = () => {
  return (
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
      <AutoScrollPreview/>
    </div>
  );
};

export default Home;
