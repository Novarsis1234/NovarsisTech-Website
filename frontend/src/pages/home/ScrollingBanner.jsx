import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const ScrollingBanner = () => {
  const text =
    "Grow Digitally With Us * Data-Driven Results * Targeted Strategies * Social Media Success * Search Engine Mastery * Continuous Growth * ";

  return (
    <>
      {/* ================= ADVANCED HELMET SEO ================= */}
      <Helmet>
        <title>Digital Growth & Marketing Solutions | Novarsis Technology</title>

        <meta
          name="description"
          content="Boost your digital presence with Novarsis Technology. Data-driven marketing strategies, SEO mastery, and continuous growth solutions for modern businesses."
        />

        <link rel="canonical" href="https://novarsistech.com/digital-growth" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Grow Digitally With Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Data-driven results, targeted strategies, and search engine mastery for business growth."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/digital-growth"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* 🔥 WebPage + Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"WebPage",
            "name":"Digital Growth & Marketing Solutions",
            "url":"https://novarsistech.com/digital-growth",
            "description":"Digital marketing, SEO strategy, and data-driven growth solutions provided by Novarsis Technology.",
            "publisher":{
              "@type":"Organization",
              "name":"Novarsis Technology",
              "url":"https://novarsistech.com"
            }
          }
        `}
        </script>
      </Helmet>

      <section
        className="relative overflow-hidden bg-gradient-to-r from-white via-[#f9fbff] to-white py-4 sm:py-6 md:py-8"
        aria-labelledby="digital-growth-heading"
      >
        {/* ⭐ Hidden SEO Support Heading */}
        <h2 id="digital-growth-heading" className="sr-only">
          Novarsis Technology Digital Services and IT Solutions Banner
        </h2>

        {/* ================= HEADER ================= */}
        <header className="sr-only">
          {/* ✅ EXACTLY ONE H1 FOR PAGE */}
          <h1>Digital Growth & Marketing Solutions</h1>
        </header>

        {/* ================= SCROLLING TEXT ================= */}
        <motion.h2
          className="
            whitespace-nowrap
            font-extrabold
            text-[#008300]
            tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em]
            leading-tight
            text-[1.8rem]
            sm:text-[3rem]
            md:text-[4.5rem]
            lg:text-[6rem]
          "
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="mx-4 sm:mx-6 md:mx-10">
              {text.split("*").map((part, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline-block">{part.trim()}</span>

                  {idx < text.split("*").length - 1 && (
                    <motion.span
                      className="
                        inline-block
                        mx-4 sm:mx-6 md:mx-12
                        text-orange-500
                        text-[2.2rem]
                        sm:text-[3.5rem]
                        md:text-[5rem]
                        lg:text-[6.5rem]
                        font-bold
                      "
                      whileHover={{
                        rotate: 360,
                        scale: 1.3,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      }}
                    >
                      *
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
            </span>
          ))}
        </motion.h2>
      </section>
    </>
  );
};

export default ScrollingBanner;
