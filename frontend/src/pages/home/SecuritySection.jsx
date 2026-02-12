import React from "react";
import {
  FaLaptop,
  FaLock,
  FaTrophy,
  FaEye,
  FaBolt,
  FaCode,
  FaSitemap,
  FaPenNib,
} from "react-icons/fa";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const SecuritySection = () => {
 const services = [
  { icon: <FaLaptop />, label: "Web Consulting" },
  { icon: <FaTrophy />, label: "Security Boost" },
  { icon: <FaLock />, label: "Data Protection" },
  { icon: <FaEye />, label: "Smart Insights" },
  { icon: <FaBolt />, label: "Fast Service" },
  { icon: <FaCode />, label: "Dev Friendly" },
  { icon: <FaSitemap />, label: "Easy Structure" },
  { icon: <FaPenNib />, label: "Clean UI Design" },
];


  return (
    <>
      <Helmet>
        <title>
          Advanced Cyber Security & IT Protection | Novarsis Technology
        </title>

        <meta
          name="description"
          content="Protect your digital presence with Novarsis Technology. Advanced cyber security, operational protection, web consultation, and performance-focused IT solutions."
        />

        <meta
          name="keywords"
          content="cyber security services India, IT protection, web security optimization, operational security, Novarsis Technology security solutions"
        />

        {/* ✅ Updated Canonical */}
        <link
          rel="canonical"
          href="https://novarsistech.com/security-solutions"
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Advanced Security Solutions | Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Empowering your online security with advanced protection, smarter insights, and scalable IT solutions."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/security-solutions"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cyber Security Services - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Robust cyber security and IT protection solutions designed for performance and reliability."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 CYBER SECURITY SERVICE SCHEMA (SEO BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Service",
        "serviceType":"Cyber Security & IT Protection",
        "provider":{
          "@type":"Organization",
          "name":"Novarsis Technology",
          "url":"https://novarsistech.com"
        },
        "areaServed":"Worldwide",
        "url":"https://novarsistech.com/security-solutions",
        "description":"Advanced cyber security, IT protection, operational security, and performance-focused IT solutions provided by Novarsis Technology."
      }
    `}
        </script>
      </Helmet>

      <section className="relative bg-[#f9fbff] py-14 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute -top-16 -left-16 w-40 h-40 md:w-72 md:h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-52 h-52 md:w-80 md:h-80 bg-[#008300]/10 rounded-full"></div>

        {/* Left Accent Border (Desktop only) */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#008300] hidden md:block"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              
              {/* Glow */}
              <div className="absolute -inset-4 bg-[#008300]/10 blur-3xl rounded-3xl opacity-70"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/Images/HomeSecurity.png"
                  alt="Cyber Security IT Protection Services"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="text-center md:text-left">

            <Reveal>
              <h4 className="text-[#008300] font-extrabold mb-2 uppercase tracking-widest text-xs sm:text-sm">
                Advance Protect
              </h4>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-5 leading-tight">
                Empowering Your Online <br className="hidden sm:block" />
                <span className="text-[#008300]">
                  Security is Our Priority
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
                We safeguard your digital presence with robust security
                solutions, ensuring performance, privacy, and reliability using
                the latest technologies and best practices.
              </p>
            </Reveal>

            {/* ================= SERVICES GRID ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white border border-gray-200
                  rounded-xl px-4 py-4 shadow-md
                  hover:border-[#008300] hover:shadow-lg
                  transition-all duration-300"
                >
                  <div
                    className="bg-[#008300]/10 text-[#008300] p-3 rounded-lg text-base mr-3
                    hover:bg-[#008300] hover:text-white transition"
                  >
                    {service.icon}
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {service.label}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SecuritySection;
