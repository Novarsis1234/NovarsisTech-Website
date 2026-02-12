import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const Section = () => {
  return (
    <>
      <Helmet>
        <title>IT Consulting & Meeting Solutions | Novarsis Technology</title>

        <meta
          name="description"
          content="Schedule a meeting with Novarsis Technology for better IT solutions, branding, and digital services designed to help your business grow faster."
        />

        <meta
          name="keywords"
          content="IT consulting India, schedule IT meeting, software services company, digital solutions Novarsis Technology"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/it-meeting" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Better IT Solutions & Services | Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Connect with Novarsis Technology for advanced IT solutions, branding, and scalable digital experiences."
        />
        <meta property="og:url" content="https://novarsistech.com/it-meeting" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Novarsis Technology IT Services" />
        <meta
          name="twitter:description"
          content="Better IT solutions and services at your fingertips with Novarsis Technology."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 IT CONSULTING PAGE SCHEMA */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Service",
        "serviceType":"IT Consulting & Meeting Solutions",
        "provider":{
          "@type":"Organization",
          "name":"Novarsis Technology",
          "url":"https://novarsistech.com"
        },
        "areaServed":"Worldwide",
        "url":"https://novarsistech.com/it-meeting",
        "description":"IT consulting, strategy meetings, and digital solution planning sessions offered by Novarsis Technology."
      }
    `}
        </script>
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 sm:py-28 px-5 sm:px-8 md:px-16"
        style={{
          backgroundImage: "url('/Images/parallex3.jpg')",
        }}
      >
        {/* ⭐ Hidden SEO Heading */}
        <h2 className="sr-only">
          Better IT Solutions and Services by Novarsis Technology – Meeting and
          Consultation Section
        </h2>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <Reveal>
              <h4 className="inline-block text-[#008300] font-extrabold text-sm sm:text-base tracking-widest uppercase">
                Do You Need a Meeting?
              </h4>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
                Better IT Solutions <br className="hidden sm:block" />
                And Services At <br className="hidden sm:block" />
                Your Fingertips
              </h2>
            </Reveal>

            {/* Accent Line */}
            <div className="w-16 h-1 bg-[#008300] rounded-full mx-auto lg:mx-0"></div>

            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials that communicate
                clearly.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  to="/services"
                  className="relative inline-flex items-center gap-2 
            bg-[#008300] hover:bg-[#009e3c] 
            text-white font-semibold py-3 px-9 rounded-md 
            transition-all duration-300 shadow-lg hover:shadow-green-500/40"
                >
                  Learn More
                  <span className="absolute inset-0 rounded-md ring-1 ring-[#008300]/40"></span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col gap-6 items-center lg:items-end">
            {/* CARD 1 */}
            <div
              className="bg-white/90 backdrop-blur-xl text-[#0B1A59] 
        p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center"
            >
              <Reveal>
                <div
                  className="mx-auto mb-4 w-24 h-24 
            border-8 border-[#008300] rounded-full 
            flex items-center justify-center text-2xl font-bold"
                >
                  100%
                </div>
              </Reveal>
              <Reveal>
                <h3 className="text-sm font-semibold">
                  We have 100% satisfied customers
                </h3>
              </Reveal>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-white/90 backdrop-blur-xl text-[#0B1A59] 
        p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center"
            >
              <Reveal>
                <div
                  className="mx-auto mb-4 w-24 h-24 
            border-8 border-[#008300] border-r-gray-200 
            rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  90%
                </div>
              </Reveal>
              <Reveal>
                <h3 className="text-sm font-semibold">
                  Projects have been completed
                </h3>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
