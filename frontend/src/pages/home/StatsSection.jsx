import React from "react";
import { FaUserTie, FaThumbsUp, FaCalendarAlt, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const StatsSection = () => {
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
    <Helmet>
  <title>Company Statistics & Achievements | Novarsis Technology</title>

  <meta
    name="description"
    content="Explore Novarsis Technology's company statistics including active clients, completed projects, expert team, and years of experience delivering advanced IT solutions."
  />

  <meta
    name="keywords"
    content="Novarsis Technology statistics, IT company achievements, projects completed, professional IT team India, company experience stats"
  />

  <link rel="canonical" href="https://novarsis.com/company-statistics" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Novarsis Technology Company Statistics" />
  <meta
    property="og:description"
    content="Active clients, completed projects, and years of expertise showcasing our journey in delivering powerful IT solutions."
  />
  <meta property="og:url" content="https://novarsis.com/company-statistics" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology Achievements" />
  <meta
    name="twitter:description"
    content="Discover the milestones and achievements of Novarsis Technology in the IT industry."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

   <section
  ref={ref}
  className="relative overflow-hidden bg-white py-20 px-6 sm:px-10"
>
  {/* ⭐ Hidden SEO Heading */}
  <h2 className="sr-only">
    Novarsis Technology Company Statistics and IT Success Metrics
  </h2>

  {/* ===== Decorative Circles ===== */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F4C3A]/10 rounded-full"></div>

  <div className="absolute top-32 right-6 sm:right-10 w-56 sm:w-64 h-56 sm:h-64 bg-[#DC2626]/10 rounded-full"></div>

  <div className="absolute bottom-10 left-1/3 w-36 sm:w-40 h-36 sm:h-40 bg-[#0F4C3A]/10 rounded-full"></div>

  {/* ===== Content ===== */}
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h4 className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
        Company Statistics
      </h4>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3">
        Delivering Excellence Through{" "}
        <span className="text-[#008300]">Experience</span>
      </h2>

      <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
        Our success is driven by strong partnerships, technical expertise,
        and consistent results. These numbers highlight our journey and the
        trust clients place in our IT solutions.
      </p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl
          transition-all duration-500 p-8 flex flex-col items-center"
        >
          {/* Icon */}
          <div className="bg-[#008300]/10 text-[#008300] rounded-full p-6 mb-5">
            {item.icon}
          </div>

          {/* Number */}
          <h3 className="text-4xl font-extrabold text-black">
            {inView ? (
              <CountUp
                start={0}
                end={item.number}
                duration={2.5}
                suffix="+"
              />
            ) : (
              "0+"
            )}
          </h3>

          {/* Label */}
          <p className="mt-3 text-sm font-semibold text-gray-700 tracking-wide">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default StatsSection;
