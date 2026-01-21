import React from "react";
import BestServices from "./BestServices";
import PremiumServices from "../home/PremiumServices";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";

const ServiceBanner = () => {
  return (
    <>
       <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
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
              <span className="text-[#008300] mx-1">/</span>  Services
            </p>
          </Reveal>
      
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Services | Novarsis Technology
            </h1>
          </Reveal>
        </div>
      
        {/* Decorative Circles */}
       
      </section>

    <BestServices/>
    <PremiumServices/>
    <br /><br /><br />
    </>
  );
};

export default ServiceBanner;
