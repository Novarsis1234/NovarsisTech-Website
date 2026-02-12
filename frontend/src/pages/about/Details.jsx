import React from "react";
import { FaUserTie, FaThumbsUp, FaCalendarAlt, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: <FaUserTie size={34} />, number: 50, label: "Active Clients" },
    { icon: <FaThumbsUp size={34} />, number: 200, label: "Projects Completed" },
    { icon: <FaCalendarAlt size={34} />, number: 8, label: "Glorious Years" },
    { icon: <FaSmile size={34} />, number: 50, label: "Professional Team" },
  ];

  return (
    <>
      {/* ================= ADVANCED SEO HELMET ================= */}
      <Helmet>
        <title>Company Growth & Achievements | Novarsis Technology</title>

        <meta
          name="description"
          content="Explore Novarsis Technology's growth journey with active clients, completed projects, expert team, and years of experience delivering reliable IT solutions."
        />

        <link rel="canonical" href="https://novarsistech.com/company-growth" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Novarsis Technology Growth & Results" />
        <meta
          property="og:description"
          content="Our experience, results, and milestones showcase the trust clients place in Novarsis Technology."
        />
        <meta property="og:url" content="https://novarsistech.com/company-growth" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* 🔥 WebPage + Organization + Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@graph":[
              {
                "@type":"WebPage",
                "name":"Company Growth & Achievements",
                "url":"https://novarsistech.com/company-growth"
              },
              {
                "@type":"Organization",
                "name":"Novarsis Technology",
                "url":"https://novarsistech.com"
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
                    "name":"Company Growth",
                    "item":"https://novarsistech.com/company-growth"
                  }
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        ref={ref}
        className="relative bg-white py-20 px-6 sm:px-10 overflow-hidden"
        aria-labelledby="company-growth-heading"
      >
        {/* ✅ EXACTLY ONE H1 (Hidden for global SEO safety) */}
        <header className="sr-only">
          <h1>Novarsis Technology Company Growth and Achievements</h1>
        </header>

        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* ================= HEADING ================= */}
          <header className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
                Company Insights
              </p>
            </Reveal>

            <Reveal>
              <h2
                id="company-growth-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3"
              >
                Our Growth in <span className="text-[#008300]">Results</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                These numbers reflect our experience, dedication, and commitment
                to delivering reliable IT solutions that help businesses grow
                and succeed in the digital era.
              </p>
            </Reveal>
          </header>

          {/* ================= STATS GRID ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
                transition-all duration-500 p-8 flex flex-col items-center"
              >
                <Reveal>
                  <div className="bg-[#008300]/10 text-[#008300] rounded-full p-6 mb-5">
                    {item.icon}
                  </div>
                </Reveal>

                <Reveal>
                  <h3 className="text-4xl font-extrabold text-black">
                    {inView ? (
                      <CountUp start={0} end={item.number} duration={2.5} suffix="+" />
                    ) : (
                      "0+"
                    )}
                  </h3>
                </Reveal>

                <Reveal>
                  <p className="mt-3 text-sm sm:text-base font-semibold text-gray-700 tracking-wide">
                    {item.label}
                  </p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
