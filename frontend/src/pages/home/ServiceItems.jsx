import React, { useState } from "react";
import {
  FaGlobe,
  FaRocket,
  FaChartLine,
  FaShoppingCart,
  FaPaintBrush,
  FaSearch,
  FaMobileAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Web Development",
    desc: "We build fast, secure, and scalable websites using modern technologies to deliver seamless performance and excellent user experience.",
    icon: <FaGlobe size={20} />,
    img: "/Images/s-webdevelpment2.png",
    path: "/webdeveloper",
  },
  {
    title: "App Development",
    desc: "High-performance Android and iOS applications with intuitive UI, strong backend architecture, and scalable performance.",
    icon: <FaMobileAlt size={20} />,
    img: "/Images/s-appdevelopment2.png",
    path: "/appdevelopment",
  },
  {
    title: "UI / UX Design",
    desc: "User-centric UI/UX designs that enhance engagement, usability, and customer satisfaction across all platforms.",
    icon: <FaPaintBrush size={20} />,
    img: "/Images/s-uiux2.png",
    path: "/uiuxdesign",
  },
  {
    title: "CMS Development",
    desc: "Custom WordPress & CMS solutions that are easy to manage, secure, and perfectly aligned with business goals.",
    icon: <FaShoppingCart size={20} />,
    img: "/Images/s-CMS1.png",
    path: "/cmsdevelopment",
  },
  {
    title: "Digital Marketing",
    desc: "Result-driven digital marketing strategies to increase brand visibility, leads, and conversions online.",
    icon: <FaRocket size={20} />,
    img: "/Images/s-dm2.png",
    path: "/digitalmarketing",
  },
  {
    title: "SEO Optimization",
    desc: "Advanced SEO techniques to improve rankings, drive organic traffic, and ensure long-term online growth.",
    icon: <FaSearch size={20} />,
    img: "/Images/s-SEO2.png",
    path: "/seooptimization",
  },
  {
    title: "Graphic Designing",
    desc: "Creative branding, logo design, and marketing visuals that communicate clearly and convert effectively.",
    icon: <FaChartLine size={20} />,
    img: "/Images/s-GD2.png",
    path: "/graphicdesigning",
  },
];

const ServiceItems = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextSlide = () => {
    if (index + visibleCards < services.length) setIndex(index + 1);
  };

  return (
    <>
      <Helmet>
        <title>
          Professional IT Services | Web Development, SEO & Digital Marketing - Novarsis Technology
        </title>

        <meta
          name="description"
          content="Explore comprehensive IT services by Novarsis Technology including web development, app development, UI/UX design, CMS solutions, SEO optimization, digital marketing, and graphic design."
        />

        <meta
          name="keywords"
          content="IT Services, Web Development, App Development, SEO Services, Digital Marketing, UI UX Design, CMS Development, Graphic Design, Technology Services"
        />

        <link rel="canonical" href={`https://novarsistech.com/services`} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Novarsis Technology" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Professional IT Services | Web Development, SEO & Digital Marketing - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Comprehensive IT services including web development, app development, SEO optimization, digital marketing, UI/UX design, and more."
        />
        <meta property="og:url" content="https://novarsistech.com/services" />
        <meta property="og:image" content="https://novarsistech.com/Images/novarsis-og-image.jpg" />
        <meta property="og:site_name" content="Novarsis Technology" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional IT Services - Novarsis Technology" />
        <meta
          name="twitter:description"
          content="Complete IT services including web development, SEO, digital marketing, and app development solutions."
        />
        <meta name="twitter:image" content="https://novarsistech.com/Images/novarsis-og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://novarsistech.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://novarsistech.com/services" },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Novarsis Technology",
            url: "https://novarsistech.com",
            logo: "https://novarsistech.com/Images/logo.png",
            description:
              "Professional IT Services including web development, app development, SEO optimization, digital marketing, UI/UX design, and graphic design.",
            sameAs: [
              "https://facebook.com/novarsistech",
              "https://twitter.com/novarsistech",
              "https://linkedin.com/company/novarsistech",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Professional IT Services - Novarsis Technology",
            url: "https://novarsistech.com/services",
            description:
              "Comprehensive collection of professional IT services including web development, app development, UI/UX design, SEO, and digital marketing.",
            provider: {
              "@type": "Organization",
              name: "Novarsis Technology",
              url: "https://novarsistech.com",
            },
          })}
        </script>
      </Helmet>

      <section
        className="relative py-24 overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/parallex5.jpg')" }}
      >
        <h2 className="sr-only">
          Professional IT Services by Novarsis Technology – Web Development, Branding, SEO Solutions
        </h2>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <div className="text-center mb-14 px-6">
            <Reveal>
              <h4 className="text-[#008300] font-extrabold uppercase tracking-wide">
                What We’re Offering
              </h4>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Dealing in all Professional IT Services
              </h2>
            </Reveal>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">

            {/* ✅ LEFT BUTTON MOBILE+TABLET+DESKTOP */}
            <button
              onClick={prevSlide}
              disabled={index === 0}
              className="flex absolute left-2 sm:left-0 md:-left-10 lg:-left-14
              top-1/2 -translate-y-1/2
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              rounded-full bg-[#008300] text-white
              items-center justify-center shadow-lg
              hover:bg-[#009e3c] transition disabled:opacity-40 z-20"
            >
              <FaChevronLeft />
            </button>

            {/* ✅ RIGHT BUTTON MOBILE+TABLET+DESKTOP */}
            <button
              onClick={nextSlide}
              disabled={index + visibleCards >= services.length}
              className="flex absolute right-2 sm:right-0 md:-right-10 lg:-right-14
              top-1/2 -translate-y-1/2
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              rounded-full bg-[#008300] text-white
              items-center justify-center shadow-lg
              hover:bg-[#009e3c] transition disabled:opacity-40 z-20"
            >
              <FaChevronRight />
            </button>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(index, index + visibleCards).map((service, i) => (
                <article
                  key={i}
                  itemScope
                  itemType="https://schema.org/Service"
                  className="group bg-white rounded-2xl shadow-md 
                  hover:shadow-2xl transition-all duration-500 
                  transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <figure className="relative">
                    <img
                      src={service.img}
                      alt={`${service.title} - Professional ${service.title} Services by Novarsis Technology`}
                      className="w-full h-52 object-cover"
                    />

                    <div className="absolute top-4 right-4 bg-[#008300] text-white p-3 rounded-lg shadow-md group-hover:bg-white group-hover:text-[#008300] transition">
                      {service.icon}
                    </div>
                  </figure>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-[#008300] mb-3">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed text-justify">
                      {service.desc}
                    </p>

                    <Link to={service.path}>
                      <div className="mt-5 text-[#008300] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <span>→</span>
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceItems;
