import React, { useRef, useEffect } from "react";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const logos = [
  "/Images/novarsis-logo1.webp",
  "/Images/novarsis-logo2.webp",
  "/Images/novarsis-logo3.webp",
  "/Images/novarsis-logo4.webp",
  "/Images/novarsis-logo5.webp",
  "/Images/novarsis-logo6.webp",
];

const HappyFamilyCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.innerHTML;
    scrollContainer.innerHTML += scrollContent;

    let scrollAmount = 0;
    const scrollSpeed = 1.2;

    const scrollStep = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <>
      {/* ================= SECTION LEVEL SEO SCHEMA ================= */}
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@graph":[
              {
                "@type":"Organization",
                "name":"Novarsis Technology",
                "url":"https://novarsistech.com"
              },
              {
                "@type":"ItemList",
                "name":"Novarsis Technology Clients",
                "itemListElement":[
                  ${logos
                    .map(
                      (logo, i) => `{
                        "@type":"ListItem",
                        "position":${i + 1},
                        "name":"Client Logo ${i + 1}"
                      }`
                    )
                    .join(",")}
                ]
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <section
        className="relative bg-white py-20 px-6 sm:px-10 overflow-hidden"
        aria-labelledby="happy-family-heading"
      >
        {/* ✅ EXACTLY ONE H1 (Hidden for global SEO safety) */}
        <header className="sr-only">
          <h1>Novarsis Technology Happy Family and Client Partnerships</h1>
        </header>

        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <header className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2
                id="happy-family-heading"
                className="text-3xl sm:text-4xl font-extrabold text-black"
              >
                Novarsis <span className="text-[#008300]">Happy Family</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                Trusted by startups, growing businesses, and enterprises who
                rely on Novarsis Technology for scalable software solutions,
                digital transformation, and long-term partnerships.
              </p>
            </Reveal>
          </header>

          {/* ================= CLIENT LOGOS CAROUSEL ================= */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden whitespace-nowrap w-full"
            role="list"
          >
            {logos.map((logo, index) => (
              <article
                key={index}
                className="inline-block w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-6"
              >
                <div
                  className="
                  flex justify-center items-center h-28
                  bg-white rounded-2xl
                  border border-[#008300]/20
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500
                  hover:-translate-y-2
                "
                >
                  <img
                    src={logo}
                    alt={`Novarsis Technology Client Company Logo ${index + 1}`}
                    loading="lazy"
                    className="
                    w-32 h-20 object-contain
                    grayscale hover:grayscale-0
                    transition-all duration-700
                    hover:scale-110
                  "
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HappyFamilyCarousel;
