import React from "react";
import {
  FaHandsHelping,
  FaUsers,
  FaLifeRing,
  FaChartPie,
} from "react-icons/fa";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const services = [
  {
    id: 1,
    icon: <FaHandsHelping size={34} className="text-[#008300]" />,
    title: "Quality Service",
    description:
      "We deliver tailored solutions with precision, ensuring top-notch quality in every project.",
  },
  {
    id: 2,
    icon: <FaUsers size={34} className="text-[#008300]" />,
    title: "Expert Team",
    description:
      "Our skilled professionals bring industry expertise to drive innovation and best results.",
  },
  {
    id: 3,
    icon: <FaLifeRing size={34} className="text-[#008300]" />,
    title: "Excellent Support",
    description:
      "We provide fast, responsive, 24/7 support to keep your business running smoothly.",
  },
  {
    id: 4,
    icon: <FaChartPie size={34} className="text-[#008300]" />,
    title: "Management",
    description:
      "From planning to execution, we manage every detail with strategic efficiency.",
  },
];

const ServiceSection = () => {
  return (
    <>
    <Helmet>
  <title>Why Choose Novarsis Technology | Quality IT Services & Expert Team</title>

  <meta
    name="description"
    content="Discover why businesses choose Novarsis Technology — quality service, expert team, excellent support, and strategic management for powerful digital growth."
  />

  <meta
    name="keywords"
    content="why choose Novarsis Technology, IT company benefits, expert IT team India, digital solutions company, quality IT services"
  />

  <link rel="canonical" href="https://novarsis.com/why-choose-novarsis" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Why Choose Novarsis Technology" />
  <meta
    property="og:description"
    content="Quality service, expert team, excellent support, and smart management solutions designed for business success."
  />
  <meta property="og:url" content="https://novarsis.com/why-choose-novarsis" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology - Trusted IT Partner" />
  <meta
    name="twitter:description"
    content="Complete digital solutions powered by expert professionals and innovative strategies."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>
  
   <section className="relative py-24 bg-white overflow-hidden">

  {/* ⭐ Hidden SEO H1 (Google Ranking Boost) */}
  <h1 className="sr-only">
    Why Choose Novarsis Technology – Best IT Company Digital Solutions
  </h1>

  {/* Decorative Circles */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
  <div className="absolute top-40 right-0 w-64 h-64 bg-[#008300]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
          Why <span className="text-[#008300]">Choose Us</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-600 text-base sm:text-lg">
          We provide complete digital solutions that empower your business
          to grow with confidence and consistency.
        </p>
      </Reveal>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="group relative bg-white rounded-2xl p-8 text-center
          shadow-lg hover:shadow-2xl transition-all duration-500
          hover:-translate-y-2"
        >
          {/* Card Circle Accent */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#008300]/10 rounded-full"></div>

          {/* Icon */}
          <div className="relative mx-auto mb-6 w-20 h-20 rounded-full
            bg-white shadow-md flex items-center justify-center
            group-hover:bg-[#008300]/10 transition">
            {service.icon}
          </div>

          <Reveal>
            <h3 className="text-lg font-bold text-black mb-3">
              {service.title}
            </h3>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </Reveal>
        </div>
      ))}
    </div>
  </div>
</section>
</>
  );
};

export default ServiceSection;
