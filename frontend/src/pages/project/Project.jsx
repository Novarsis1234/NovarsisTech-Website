import React from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/novarsis-home3.webp"
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300]">
                Home
              </Link>
              <span className="mx-2 text-[#008300]">/</span> Projects
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">Our Projects</h1>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-28">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008300]">
              Project:1
            </h2>
            <div className="mt-3 mx-auto w-20 h-1 bg-[#008300] rounded-full"></div>
          </div>
          {/* PROJECT 1– SEO & DIGITAL MARKETING */}
          <section className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-4 overflow-hidden">
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= TOP BADGE + TITLE ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                {/* LOGO */}
                <img
                  src="/Images/SEO LOGO11.png"
                  alt="Novarsis SEO Tool Logo"
                  className="h-14 sm:h-16 md:h-20 object-contain"
                />

                {/* BADGE */}
                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  AI POWERED SEO PLATFORM
                </span>

                {/* TITLE */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]">
                  Novarsis SEO Tool
                </h2>

                {/* DESCRIPTION */}
                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                  AI-powered WordPress SEO automation platform built to simplify
                  optimization and accelerate organic growth.
                </p>
              </div>

              {/* ================= FULL WIDTH HERO IMAGE ================= */}
              <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl mb-28">
                <img
                  src="/Images/SEO1.png"
                  alt="SEO Dashboard Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* ================= CONTENT + VIDEO ================= */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                {/* LEFT CONTENT CARD */}
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

                  <p className="text-gray-700">
                    <strong>Best For:</strong> Bloggers, agencies, startups,
                    digital marketers, and businesses managing multiple
                    WordPress websites.
                  </p>
                </div>

                {/* RIGHT VIDEO CARD */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[260px] sm:h-[360px] lg:h-[460px]">
                  <video
                    src="/Images/seo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15"></div>
                </div>
              </div>

              {/* ================= FEATURE IMAGE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "/Images/SEO2.png",
                  "/Images/SEO4.png",
                  "/Images/SEO5.png",
                  "/Images/SEO6.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
                     rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img}
                      alt="SEO Feature Preview"
                      className="absolute inset-0 w-full h-full object-contain
                       group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008300]">
              Project:2
            </h2>
            <div className="mt-3 mx-auto w-20 h-1 bg-[#008300] rounded-full"></div>
          </div>
          {/* PROJECT 2 – SCHOOL MANAGEMENT */}
          <section className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER WITH LOGO ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/school-logo-pic.png"
                  alt="School Management Logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  SCHOOL ERP PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]">
                  School Management Solution
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                  One powerful platform to manage academics, administration,
                  communication & daily school operations seamlessly.
                </p>
              </div>

              {/* ================= FULL WIDTH COVER IMAGE ================= */}
              <div
                className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px]
                    rounded-3xl overflow-hidden shadow-2xl mb-28"
              >
                <img
                  src="/Images/p-school1.png"
                  alt="School Platform Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15"></div>
              </div>

              {/* ================= CONTENT + VIDEO ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT CARD ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      Smart & Scalable School Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A centralized digital ecosystem designed to manage all
                      academic, administrative, and communication needs of
                      schools. This system improves efficiency, transparency,
                      and real-time collaboration between teachers, students,
                      parents, and school management.
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
                        ecosystem with smooth workflows, better decision-making,
                        and transparent operations.
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

                  {/* ===== RIGHT VIDEO CARD ===== */}
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl
                        h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]"
                  >
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="/Images/school.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/Images/school-video-poster.png"
                    />
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE IMAGE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "/Images/p-school3.png",
                  "/Images/p-school4.png",
                  "/Images/p-school5.png",
                  "/Images/p-school6.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
                     rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img}
                      alt="School Feature Preview"
                      className="absolute inset-0 w-full h-full object-cover
                       group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008300]">
              Project:3
            </h2>
            <div className="mt-3 mx-auto w-20 h-1 bg-[#008300] rounded-full"></div>
          </div>
          {/* PROJECT 3 – HOTEL MANAGEMENT */}
          <section className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER WITH LOGO ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/hotel-logo-pic.jpg"
                  alt="Hotel Management Logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  HOTEL AUTOMATION PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]">
                  Smart Hotel Management System
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                  Complete digital solution for hotels, restaurants & banquet
                  halls
                </p>
              </div>

              {/* ================= FULL WIDTH COVER IMAGE ================= */}
              <div
                className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px]
                 rounded-3xl overflow-hidden shadow-2xl mb-28"
              >
                <img
                  src="/Images/hotel-p1.png"
                  alt="Hotel Management Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15"></div>
              </div>

              {/* ================= CONTENT + VIDEO ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT CARD ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      All-in-One Hotel Automation Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A powerful centralized hotel management system designed to
                      automate room bookings, restaurant operations, banquet
                      events, customer enquiries, and online payments — all from
                      a single dashboard. It reduces manual work and enhances
                      guest experience.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                      <li>✔ Real-time room availability & booking</li>
                      <li>✔ Seasonal pricing & secure payments</li>
                      <li>✔ Restaurant & table management</li>
                      <li>✔ Banquet & event automation</li>
                      <li>✔ WhatsApp & call enquiry support</li>
                      <li>✔ Mobile-friendly admin dashboard</li>
                    </ul>

                    <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                      <p className="text-gray-700">
                        <strong>Result:</strong> Faster bookings, improved guest
                        satisfaction, centralized control, and increased revenue
                        through complete digital transformation.
                      </p>
                    </div>

                    <a
                      href="https://hotel-management-website-gilt.vercel.app/"
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

                  {/* ===== RIGHT VIDEO CARD ===== */}
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl
                     h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]"
                  >
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="/Images/hotel.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/Images/hotel-video-poster.png"
                    />
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE IMAGE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "/Images/hotel-p3.png",
                  "/Images/hotel-p4.png",
                  "/Images/hotel-p5.png",
                  "/Images/hotel-p6.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
                     rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img}
                      alt="Hotel Feature Preview"
                      className="absolute inset-0 w-full h-full object-cover
                       group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#008300]">
              Project:4
            </h2>
            <div className="mt-3 mx-auto w-20 h-1 bg-[#008300] rounded-full"></div>
          </div>
          {/* PROJECT 4 – Tour & Travel Management  */}
          <section className="relative bg-[#fffaf3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* ===== Decorative Green Circles ===== */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute top-48 right-[-160px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
            <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#008300]/10 rounded-full"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto">
              {/* ================= HEADER WITH LOGO ================= */}
              <div className="text-center mb-16 flex flex-col items-center gap-5">
                <img
                  src="/Images/travel-logo.jpg"
                  alt="Tour & Travel Logo"
                  className="h-14 sm:h-16 md:h-20 object-contain drop-shadow-md"
                />

                <span className="inline-block bg-[#008300]/10 text-[#008300] px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  TOUR & TRAVEL PLATFORM
                </span>

                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#008300]">
                  Smart Tour & Travel System
                </h2>

                <p className="max-w-3xl mx-auto text-gray-700 text-lg">
                  Complete digital solution for tours, travel & vehicle
                  management
                </p>
              </div>

              {/* ================= FULL WIDTH COVER IMAGE ================= */}
              <div
                className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[520px]
                 rounded-3xl overflow-hidden shadow-2xl mb-28"
              >
                <img
                  src="/Images/tour1.png"
                  alt="Tour & Travel Platform Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/15"></div>
              </div>

              {/* ================= CONTENT + VIDEO ================= */}
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                  {/* ===== LEFT CONTENT CARD ===== */}
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                    <h3 className="text-3xl font-bold text-[#008300]">
                      Smart Tour & Travel Management Platform
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-justify">
                      A modern tour & travel management system that enables
                      travel agencies and tour operators to manage packages,
                      destinations, itineraries, vehicles, bookings, and
                      customer enquiries from a single centralized platform.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 font-medium">
                      <li>✔ Tour packages & itineraries</li>
                      <li>✔ Online booking & secure payments</li>
                      <li>✔ Vehicle, driver & route management</li>
                      <li>✔ Hotel & sightseeing bookings</li>
                      <li>✔ Gallery, offers & testimonials</li>
                      <li>✔ WhatsApp & enquiry integration</li>
                    </ul>

                    <div className="bg-[#f3fff6] border border-[#008300]/30 p-5 rounded-2xl">
                      <p className="text-gray-700">
                        <strong>Result:</strong> Faster bookings, smooth trip
                        planning, reduced manual coordination, and scalable
                        growth for travel businesses.
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

                  {/* ===== RIGHT VIDEO CARD ===== */}
                  <div
                    className="relative rounded-3xl overflow-hidden shadow-2xl
                     h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]"
                  >
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="/Images/tour.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/Images/tour-video-poster.png"
                    />
                    <div className="absolute inset-0 bg-black/15"></div>
                  </div>
                </div>
              </Reveal>

              {/* ================= FEATURE IMAGE GRID ================= */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "/Images/tour3.png",
                  "/Images/tour4.png",
                  "/Images/tour5.png",
                  "/Images/tour6.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative h-[170px] sm:h-[200px] md:h-[220px]
                     rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={img}
                      alt="Tour Feature Preview"
                      className="absolute inset-0 w-full h-full object-cover
                       group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Project;
