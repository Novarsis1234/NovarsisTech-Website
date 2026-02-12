import React from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

const Project = () => {
  return (
    <>
      <Helmet>
        <title>
          Software Development Portfolio & Projects - Novarsis Technology
        </title>

        <meta
          name="description"
          content="Explore Novarsis Technology's software development portfolio: AI-powered SEO tools, School ERP systems, Hotel Management platforms, and Tour & Travel management solutions. Real-world case studies built with modern web technologies."
        />

        <meta
          name="keywords"
          content="software development portfolio, web development case studies, SEO tool, school management system, hotel management software, travel management platform, ERP solution, Novarsis projects"
        />

        {/* ✅ Dynamic Canonical */}
        <link rel="canonical" href="https://novarsistech.com/projects" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Software Development Portfolio - Novarsis Technology Projects"
        />
        <meta
          property="og:description"
          content="Discover real software projects: AI-powered SEO automation, School ERP, Hotel Management, and Tour & Travel platforms built by Novarsis Technology."
        />
        <meta property="og:url" content="https://novarsistech.com/projects" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />
        <meta property="og:site_name" content="Novarsis Technology" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Software Development Portfolio - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Explore our portfolio: SEO tools, School ERP, Hotel Management, and Tour & Travel management systems."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://novarsistech.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://novarsistech.com/projects"
              }
            ]
          })}
        </script>

        {/* ✅ Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Novarsis Technology",
            "url": "https://novarsistech.com",
            "logo": "https://novarsistech.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/novarsis",
              "https://twitter.com/novarsis",
              "https://www.linkedin.com/company/novarsis"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "url": "https://novarsistech.com/contact"
            }
          })}
        </script>

        {/* ✅ CollectionPage + Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Novarsis Technology Software Development Projects & Portfolio",
            "description": "Portfolio of software development projects including SEO automation, school management, hotel booking systems, and travel management platforms.",
            "url": "https://novarsistech.com/projects",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Novarsis SEO Tool",
                  "description": "AI-powered WordPress SEO automation platform for intelligent optimization and organic growth.",
                  "url": "https://novarsis.ai/",
                  "applicationCategory": "SEO Software"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "School Management Solution",
                  "description": "Complete school ERP platform for academics, administration, and communication.",
                  "url": "https://school-website-rho-five.vercel.app/",
                  "applicationCategory": "Educational Management Software"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Hotel Management System",
                  "description": "All-in-one hotel automation platform for bookings, restaurant, and banquet operations.",
                  "url": "https://hotel-management-website-gilt.vercel.app/",
                  "applicationCategory": "Hotel Management Software"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Smart Tour & Travel System",
                  "description": "Complete tour and travel management platform for agencies and operators.",
                  "url": "https://maxholiday1.vercel.app/",
                  "applicationCategory": "Travel Management Software"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Novarsis Technology",
              "logo": "https://novarsistech.com/logo.png"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0]
          })}
        </script>
      </Helmet>

      {/* Hero Section with Breadcrumb */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Software Development Projects" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/bannerImage.png"
          alt="Project showcase banner"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition-colors">
                Home
              </Link>
              <span className="mx-2 text-[#008300]">/</span>
              <span className="text-[#008300]">Projects</span>
            </nav>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Software Development Portfolio & Projects</h1>
          </Reveal>
          <Reveal>
            <p className="text-gray-200 text-lg mt-4 max-w-2xl mx-auto">
              Discover our case studies in web development, ERP systems, hotel automation, and travel management solutions
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-28">
          {/* Projects Introduction */}
          <article className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008300]">
              Our Software Development Projects & Case Studies
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
              Explore our portfolio of successful software development projects built with modern technologies. Each project demonstrates our expertise in creating scalable, secure, and user-friendly solutions.
            </p>
            <div className="mt-3 mx-auto w-20 h-1 bg-[#008300] rounded-full"></div>
          </article>
          {/* PROJECT 1– SEO & DIGITAL MARKETING */}
          <article 
            className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-4 overflow-hidden"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <meta itemProp="name" content="Novarsis SEO Tool" />
            <meta itemProp="description" content="AI-powered WordPress SEO automation platform for intelligent optimization and organic growth." />
            <meta itemProp="applicationCategory" content="SEO Software" />
            <meta itemProp="url" content="https://novarsis.ai/" />
            
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/SEO LOGO11.png"
                  alt="Novarsis SEO Tool - AI-powered WordPress optimization"
                  className="h-14 sm:h-16 md:h-20 object-contain"
                  itemProp="image"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold">
                  AI POWERED SEO PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]" itemProp="name">
                  Novarsis SEO Tool
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg text-justify" itemProp="description">
                  AI-powered WordPress SEO automation platform built to simplify
                  optimization and accelerate organic growth.
                </p>
              </div>

              {/* ================= HERO IMAGE ================= */}
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16">
                <img
                  src="/Images/SEO-banner.png"
                  alt="Novarsis SEO Tool dashboard interface showing AI-powered optimization metrics"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= CONTENT + AUTO SCROLL PREVIEW ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                {/* ===== LEFT CONTENT ===== */}
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                  <h3 className="text-3xl font-bold text-[#008300]">
                    Intelligent SEO Automation for WordPress
                  </h3>

                  <p className="text-gray-700 leading-relaxed text-justify">
                    Novarsis SEO Tool is a smart automation platform that
                    continuously analyzes your WordPress website, detects SEO
                    issues, and applies intelligent fixes automatically —
                    eliminating repetitive manual SEO work.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                    <li>✔ 50+ SEO metrics & insights</li>
                    <li>✔ AI meta & content optimization</li>
                    <li>✔ One-click WordPress fixes</li>
                    <li>✔ Secure backup & rollback</li>
                    <li>✔ Real-time SEO monitoring</li>
                    <li>✔ Mobile-friendly dashboard</li>
                  </ul>

                  <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                    <p className="text-gray-700">
                      <strong>Outcome:</strong> Faster rankings, improved
                      visibility, reduced errors, and consistent SEO growth —
                      without complexity.
                    </p>
                  </div>

                  <p className="text-gray-700 text-justify">
                    <strong>Best For:</strong> Bloggers, agencies, startups,
                    digital marketers, and businesses managing multiple
                    WordPress websites.
                  </p>
                  <a
                    href="https://novarsis.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#008300]
                hover:bg-[#007000] text-white font-semibold
                px-8 py-4 rounded-xl shadow-lg
                transition-all hover:scale-105 w-fit"
                    aria-label="View Novarsis SEO Tool project"
                  >
                    View Project <span className="text-xl">↗</span>
                  </a>
                </div>

                {/* ===== RIGHT AUTO SCROLL WEBSITE PREVIEW ===== */}
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-sm">
                    <h3 className="mb-3 text-center text-lg font-semibold text-gray-800">
                      Live Dashboard Preview
                    </h3>

                    <div className="relative h-[460px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl group">
                      <div className="absolute inset-0 scroll-animation group-hover:paused">
                        <img
                          src="/Images/seo-pdf.png"
                          alt="Novarsis SEO Tool dashboard live preview showing real-time metrics"
                          className="w-full select-none"
                          draggable={false}
                        />
                      </div>

                      {/* Gradient Overlays */}
                      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" aria-hidden="true" />
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FEATURE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: "/Images/SEO2.png", alt: "SEO Tool AI optimization feature" },
                  { src: "/Images/SEO4.png", alt: "SEO Tool WordPress integration feature" },
                  { src: "/Images/SEO5.png", alt: "SEO Tool analytics and reporting feature" },
                  { src: "/Images/SEO6.png", alt: "SEO Tool real-time monitoring feature" },
                ].map((img, i) => (
                  <figure
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
              rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" aria-hidden="true"></div>
                  </figure>
                ))}
              </div>
            </div>

            {/* ================= SCROLL CSS ================= */}
            <style>{`
  .scroll-animation {
    animation: scrollY 14s linear infinite;
    will-change: transform;
  }

  .group:hover .scroll-animation {
    animation-play-state: paused;
  }

  @keyframes scrollY {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-90%);
    }
  }
`}</style>
          </article>

          {/* PROJECT 2 – SCHOOL MANAGEMENT */}
          <article 
            className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <meta itemProp="name" content="School Management Solution" />
            <meta itemProp="description" content="Complete school ERP platform for academics, administration, and parent-teacher communication." />
            <meta itemProp="applicationCategory" content="Educational Management Software" />
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/school-logo-pic.png"
                  alt="School Management Solution - Complete ERP platform logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold">
                  SCHOOL ERP PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]" itemProp="name">
                  School Management Solution
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg text-justify" itemProp="description">
                  One powerful platform to manage academics, administration,
                  communication & daily school operations seamlessly.
                </p>
              </div>

              {/* ================= COVER IMAGE ================= */}

              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16">
                <img
                  src="/Images/school-banner.png"
                  alt="School Management Solution interface showing student enrollment, class management, and academic dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= CONTENT + AUTO SCROLL PREVIEW ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      Smart & Scalable School Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A centralized digital ecosystem designed to manage
                      academic, administrative and communication needs of
                      schools. It improves efficiency, transparency and
                      real-time collaboration between teachers, students,
                      parents and management.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                      <li>✔ Online admissions & student lifecycle</li>
                      <li>✔ Teacher & staff role-based access</li>
                      <li>✔ Fees, transport & finance system</li>
                      <li>✔ Exams, grading & analytics</li>
                      <li>✔ Parent-teacher communication</li>
                      <li>✔ Dashboards & real-time reports</li>
                    </ul>

                    <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                      <p className="text-gray-700">
                        <strong>Result:</strong> A fully digitized school
                        ecosystem with smooth workflows, transparent operations
                        and smarter decision-making.
                      </p>
                    </div>

                    <a
                      href="https://school-website-rho-five.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#008300]
                hover:bg-[#007000] text-white font-semibold
                px-8 py-4 rounded-xl shadow-lg
                transition-all hover:scale-105 w-fit"
                    >
                      View Project <span className="text-xl">↗</span>
                    </a>
                  </div>

                  {/* ===== RIGHT AUTO SCROLL WEBSITE PREVIEW ===== */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-sm">
                      <h3 className="mb-3 text-center text-lg font-semibold text-gray-800">
                        Live Website Preview
                      </h3>

                      <div className="relative h-[520px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl group">
                        <div className="absolute inset-0 scroll-animation group-hover:paused">
                          <img
                            src="/Images/school-pdf.png"
                          alt="School Management website live preview showing dashboard and student portal"
                            className="w-full select-none"
                            draggable={false}
                          />
                        </div>

                        {/* Gradient Overlays */}
                        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: "/Images/p-school3.png", alt: "School Management student information system" },
                  { src: "/Images/p-school4.png", alt: "School Management academic and grading module" },
                  { src: "/Images/p-school5.png", alt: "School Management attendance and communication feature" },
                  { src: "/Images/p-school6.png", alt: "School Management reporting and analytics dashboard" },
                ].map((img, i) => (
                  <figure
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
              rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" aria-hidden="true"></div>
                  </figure>
                ))}
              </div>
            </div>

            {/* ================= SCROLL CSS ================= */}
            <style>{`
  .scroll-animation {
    animation: scrollY 14s linear infinite;
    will-change: transform;
  }

  .group:hover .scroll-animation {
    animation-play-state: paused;
  }

  @keyframes scrollY {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-90%);
    }
  }
`}</style>
          </article>
          {/* PROJECT 3 – HOTEL MANAGEMENT */}
          <article 
            className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <meta itemProp="name" content="Smart Hotel Management System" />
            <meta itemProp="description" content="All-in-one hotel automation platform for bookings, restaurant, banquet operations, and guest management." />
            <meta itemProp="applicationCategory" content="Hotel Management Software" />
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/hotel-logo-pic.jpg"
                  alt="Smart Hotel Management System - Complete automation platform logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold">
                  HOTEL AUTOMATION PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]" itemProp="name">
                  Smart Hotel Management System
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg" itemProp="description">
                  Complete digital solution for hotels, restaurants & banquet
                  halls
                </p>
              </div>

              {/* ================= COVER IMAGE ================= */}

              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16">
                <img
                  src="/Images/hotel-banner.png"
                  alt="Hotel Management System interface showing room booking, reservation management, and operations dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= CONTENT + AUTO SCROLL PREVIEW ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      All-in-One Hotel Automation Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A powerful centralized hotel management system designed to
                      automate room bookings, restaurant operations, banquet
                      events, enquiries and payments.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                      <li>✔ Real-time room booking</li>
                      <li>✔ Seasonal pricing & payments</li>
                      <li>✔ Restaurant management</li>
                      <li>✔ Banquet automation</li>
                      <li>✔ WhatsApp enquiry support</li>
                      <li>✔ Mobile-friendly admin panel</li>
                    </ul>

                    <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                      <p className="text-gray-700">
                        <strong>Result:</strong> Faster bookings, better guest
                        experience and higher revenue.
                      </p>
                    </div>

                    <a
                      href="https://hotel-management-website-gilt.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#008300] hover:bg-[#007000]
                text-white font-semibold px-8 py-4 rounded-xl shadow-lg
                transition-all hover:scale-105 w-fit"
                    >
                      View Project <span className="text-xl">↗</span>
                    </a>
                  </div>

                  {/* ===== RIGHT AUTO SCROLL WEBSITE PREVIEW ===== */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-sm">
                      <h3 className="mb-3 text-center text-lg font-semibold text-gray-800">
                        Live Website Preview
                      </h3>

                      <div className="relative h-[520px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl group">
                        <div className="absolute inset-0 scroll-animation group-hover:paused">
                          <img
                            src="/Images/hotel-pdf.png"
                          alt="Hotel Management website live preview showing booking interface and admin panel"
                            className="w-full select-none"
                            draggable={false}
                          />
                        </div>

                        {/* Gradient Overlays */}
                        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: "/Images/hotel-p3.png", alt: "Hotel Management room booking and reservation feature" },
                  { src: "/Images/hotel-p4.png", alt: "Hotel Management guest registration and check-in system" },
                  { src: "/Images/hotel-p5.png", alt: "Hotel Management restaurant and dining operations feature" },
                  { src: "/Images/hotel-p6.png", alt: "Hotel Management payment and billing dashboard" },
                ].map((img, i) => (
                  <figure
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
              rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" aria-hidden="true"></div>
                  </figure>
                ))}
              </div>
            </div>

            {/* ================= SCROLL CSS ================= */}
            <style>{`
  .scroll-animation {
    animation: scrollY 14s linear infinite;
    will-change: transform;
  }

  .group:hover .scroll-animation {
    animation-play-state: paused;
  }

  @keyframes scrollY {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-90%);
    }
  }
`}</style>
          </article>

          {/* PROJECT 4 – Tour & Travel Management */}
          <article 
            className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            itemScope 
            itemType="https://schema.org/SoftwareApplication"
          >
            <meta itemProp="name" content="Smart Tour & Travel System" />
            <meta itemProp="description" content="Complete tour and travel management platform for agencies with package management, bookings, and vehicle operations." />
            <meta itemProp="applicationCategory" content="Travel Management Software" />
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full" aria-hidden="true"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/travel-logo.jpg"
                  alt="Smart Tour & Travel System - Complete travel management platform logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold">
                  TOUR & TRAVEL PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]" itemProp="name">
                  Smart Tour & Travel System
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg text-justify" itemProp="description">
                  Complete digital solution for tours, travel & vehicle
                  management
                </p>
              </div>

              {/* ================= COVER IMAGE ================= */}

              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-16">
                <img
                  src="/Images/travelling-banner.png"
                  alt="Tour & Travel System interface showing tour packages, booking calendar, and destination management"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ================= CONTENT + AUTO SCROLL PREVIEW ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      Smart Tour & Travel Management Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A modern tour & travel management system that enables
                      agencies to manage tour packages, itineraries, vehicles,
                      hotels, bookings and customer enquiries from one
                      centralized platform.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                      <li>✔ Tour packages & itineraries</li>
                      <li>✔ Online booking & payments</li>
                      <li>✔ Vehicle & driver management</li>
                      <li>✔ Hotel & sightseeing booking</li>
                      <li>✔ Offers, gallery & testimonials</li>
                      <li>✔ WhatsApp enquiry integration</li>
                    </ul>

                    <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                      <p className="text-gray-700">
                        <strong>Result:</strong> Faster bookings, smoother trip
                        planning and scalable growth for travel businesses.
                      </p>
                    </div>

                    <a
                      href="https://maxholiday1.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#008300]
                hover:bg-[#007000] text-white font-semibold
                px-8 py-4 rounded-xl shadow-lg
                transition-all hover:scale-105 w-fit"
                    >
                      View Project <span className="text-xl">↗</span>
                    </a>
                  </div>

                  {/* ===== RIGHT AUTO SCROLL WEBSITE PREVIEW ===== */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-sm">
                      <h3 className="mb-3 text-center text-lg font-semibold text-gray-800">
                        Live Website Preview
                      </h3>

                      <div className="relative h-[520px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-2xl group">
                        <div className="absolute inset-0 scroll-animation group-hover:paused">
                          <img
                            src="/Images/travelling-pdf.png"
                          alt="Tour & Travel website live preview showing package listings and booking interface"
                            className="w-full select-none"
                            draggable={false}
                          />
                        </div>

                        {/* Gradient Overlays */}
                        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { src: "/Images/tour3.png", alt: "Tour & Travel tour packages and itinerary builder" },
                  { src: "/Images/tour4.png", alt: "Tour & Travel booking and reservation management" },
                  { src: "/Images/tour5.png", alt: "Tour & Travel vehicle and driver management system" },
                  { src: "/Images/tour6.png", alt: "Tour & Travel customer reviews and testimonials showcase" },
                ].map((img, i) => (
                  <figure
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
              rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-contain
                group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" aria-hidden="true"></div>
                  </figure>
                ))}
              </div>
            </div>

            {/* ================= SCROLL CSS ================= */}
            <style>{`
  .scroll-animation {
    animation: scrollY 14s linear infinite;
    will-change: transform;
  }

  .group:hover .scroll-animation {
    animation-play-state: paused;
  }

  @keyframes scrollY {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-90%);
    }
  }
`}</style>
          </article>
        </div>
      </section>
      <AutoInternalLinks />
    </>
  );
};

export default Project;
