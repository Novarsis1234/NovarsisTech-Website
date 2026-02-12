import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const HomeSectionPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // slow cinematic speed
    }
  }, []);

  return (
    <>
      {/* ================= ADVANCED HELMET SEO ================= */}
      <Helmet>
        <title>
          Novarsis Technology | Leading IT Services & Software Development
          Company
        </title>

        <meta
          name="description"
          content="Novarsis Technology provides scalable software development, IT services, web solutions, and digital innovation to help modern businesses grow faster."
        />

        <meta
          name="keywords"
          content="Novarsis Technology, IT services company, software development company, web development, digital solutions India"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Novarsis Technology | Leading IT Services & Software Development"
        />
        <meta
          property="og:description"
          content="Building scalable, secure, and future-ready digital solutions for modern businesses."
        />
        <meta property="og:url" content="https://novarsistech.com/" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Novarsis Technology | IT Services & Software Experts"
        />
        <meta
          name="twitter:description"
          content="Innovative IT services, web development, and digital solutions for growing businesses."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 ORGANIZATION SCHEMA (VERY IMPORTANT FOR BRAND SEO) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Organization",
        "name":"Novarsis Technology",
        "url":"https://novarsistech.com",
        "logo":"https://novarsistech.com/logo.png",
        "sameAs":[
          "https://www.facebook.com/",
          "https://www.linkedin.com/"
        ]
      }
    `}
        </script>
      </Helmet>
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* BACKGROUND VIDEO */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/video-forward.mp4"
          poster="/Images/HomeSection.png" // 👈 poster added
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* CONTENT */}
       {/* ===== Content Wrapper ===== */}
<div
  className="
    relative z-10
    flex
    min-h-screen
    items-start lg:items-center
    justify-center
    px-4 sm:px-6
    pt-24 sm:pt-28 md:pt-32 lg:pt-0
  "
>
  <div
    className="
      text-center
      w-full
      max-w-3xl
      p-4 sm:p-6 md:p-8 lg:p-12
    "
  >
    {/* ===== Heading ===== */}
    <h1
      className="
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        font-extrabold
        text-white
        leading-tight
        mb-4
      "
    >
      Leading IT Services <br />
      <span className="text-[#008300]">
        & Software Development
      </span>
    </h1>

    {/* ===== Description ===== */}
    <p
      className="
        text-gray-200
        text-sm
        sm:text-base
        md:text-lg
        lg:text-base
        mb-8 lg:mb-24
        leading-relaxed
      "
    >
      NovarsisTech builds scalable, secure, and future-ready digital
      solutions to help modern businesses grow faster.
    </p>

    {/* ===== Button ===== */}
    <Link to="/about">
      <button
        className="
          bg-[#008300]
          hover:bg-green-600
          px-6 sm:px-8 md:px-10
          py-3 sm:py-4
          rounded-full
          text-white
          text-sm sm:text-base md:text-lg
          font-semibold
          transition
          duration-300
          hover:scale-105
        "
      >
        Start Your Journey
      </button>
    </Link>
  </div>
</div>

      </section>{" "}
    </>
  );
};

export default HomeSectionPage;
