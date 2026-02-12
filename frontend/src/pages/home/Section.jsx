import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const Section = () => {
  return (
    <>
      {/* ================= ADVANCED HELMET SEO ================= */}
      <Helmet>
        <title>IT Consulting & Meeting Solutions | Novarsis Technology</title>

        <meta
          name="description"
          content="Schedule a meeting with Novarsis Technology for better IT solutions, branding, and digital services designed to help your business grow faster."
        />

        <link rel="canonical" href="https://novarsistech.com/it-meeting" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
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

        {/* 🔥 Service + Breadcrumb + Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@graph":[
              {
                "@type":"Service",
                "serviceType":"IT Consulting & Meeting Solutions",
                "provider":{
                  "@type":"Organization",
                  "name":"Novarsis Technology",
                  "url":"https://novarsistech.com"
                },
                "areaServed":"Worldwide",
                "url":"https://novarsistech.com/it-meeting"
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
                    "name":"IT Meeting",
                    "item":"https://novarsistech.com/it-meeting"
                  }
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 sm:py-28 px-5 sm:px-8 md:px-16"
        style={{ backgroundImage: "url('/Images/parallex3.jpg')" }}
        aria-labelledby="it-meeting-heading"
      >
        {/* ⭐ Hidden SEO Support Heading */}
        <header className="sr-only">
          {/* ✅ EXACTLY ONE H1 */}
          <h1>IT Consulting and Meeting Solutions</h1>
        </header>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* ================= LEFT CONTENT ================= */}
          <article className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <Reveal>
              <p className="inline-block text-[#008300] font-extrabold text-sm sm:text-base tracking-widest uppercase">
                Do You Need a Meeting?
              </p>
            </Reveal>

            <Reveal>
              <h2
                id="it-meeting-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white"
              >
                Better IT Solutions <br className="hidden sm:block" />
                And Services At <br className="hidden sm:block" />
                Your Fingertips
              </h2>
            </Reveal>

            <div className="w-16 h-1 bg-[#008300] rounded-full mx-auto lg:mx-0"></div>

            <Reveal>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                We help our clients succeed by creating brand identities,
                digital experiences, and scalable IT strategies that deliver
                measurable growth.
              </p>
            </Reveal>

            <Reveal>
              <nav className="flex justify-center lg:justify-start mt-6">
                <Link
                  to="/webdeveloper"
                  className="relative inline-flex items-center gap-2 
                  bg-[#008300] hover:bg-[#009e3c] 
                  text-white font-semibold py-3 px-9 rounded-md 
                  transition-all duration-300 shadow-lg hover:shadow-green-500/40"
                >
                  Explore Services
                  <span className="absolute inset-0 rounded-md ring-1 ring-[#008300]/40"></span>
                </Link>
              </nav>
            </Reveal>
          </article>

          {/* ================= RIGHT CARDS ================= */}
          <aside className="w-full lg:w-1/2 flex flex-col sm:flex-row lg:flex-col gap-6 items-center lg:items-end">
            {/* CARD 1 */}
            <article className="bg-white/90 backdrop-blur-xl text-[#0B1A59] p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center">
              <Reveal>
                <div
                  className="mx-auto mb-4 w-24 h-24 border-8 border-[#008300] 
                  rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  100%
                </div>
              </Reveal>
              <Reveal>
                <h3 className="text-sm font-semibold">
                  We have 100% satisfied customers
                </h3>
              </Reveal>
            </article>

            {/* CARD 2 */}
            <article className="bg-white/90 backdrop-blur-xl text-[#0B1A59] p-6 rounded-2xl shadow-2xl w-full sm:w-72 text-center">
              <Reveal>
                <div
                  className="mx-auto mb-4 w-24 h-24 border-8 border-[#008300] 
                  border-r-gray-200 rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  90%
                </div>
              </Reveal>
              <Reveal>
                <h3 className="text-sm font-semibold">
                  Projects have been completed
                </h3>
              </Reveal>
            </article>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Section;
