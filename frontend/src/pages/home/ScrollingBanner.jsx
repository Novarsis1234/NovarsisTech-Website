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
        <title>
          Digital Growth & Marketing Solutions | Novarsis Technology
        </title>

        <meta
          name="description"
          content="Boost your digital presence with Novarsis Technology. Data-driven marketing strategies, SEO mastery, and continuous growth solutions for modern businesses."
        />

        <meta
          name="keywords"
          content="digital marketing company, SEO services India, social media marketing, business growth strategies, Novarsis Technology"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/digital-growth" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
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

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Growth Solutions - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Advanced digital marketing and SEO strategies designed for measurable growth."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 DIGITAL GROWTH PAGE SCHEMA (SEO BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"WebPage",
        "name":"Digital Growth & Marketing Solutions",
        "url":"https://novarsistech.com/digital-growth",
        "description":"Digital marketing, SEO strategy, and data-driven growth solutions provided by Novarsis Technology."
      }
    `}
        </script>
      </Helmet>

      <div className="relative overflow-hidden bg-gradient-to-r from-white via-[#f9fbff] to-white py-4 sm:py-6 md:py-8">
        {/* ⭐ Hidden SEO Support Text */}
        <h2 className="sr-only">
          Novarsis Technology Digital Services and IT Solutions Banner
        </h2>

        {/* Scrolling Text */}
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
      </div>
    </>
  );
};

export default ScrollingBanner;
