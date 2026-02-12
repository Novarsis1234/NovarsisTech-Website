import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

/* ================= STATIC FAQ DATA ================= */
const faqs = [
  {
    id: 1,
    question: "What services does your software company provide?",
    answer:
      "We provide complete software solutions including web development, mobile app development, UI/UX design, digital marketing, SEO, and custom enterprise software.",
  },
  {
    id: 2,
    question: "Do you offer custom software development?",
    answer:
      "Yes, we build fully customized software solutions based on your specific business requirements, workflows, and scalability needs.",
  },
  {
    id: 3,
    question: "Which technologies do you specialize in?",
    answer:
      "Our team works with React, Node.js, Next.js, Laravel, PHP, MySQL, MongoDB, Flutter, AWS, and modern cloud technologies.",
  },
  {
    id: 4,
    question: "How long does a software project usually take?",
    answer:
      "Timelines depend on project scope. Small projects may take 2–4 weeks, while larger applications can take several months.",
  },
  {
    id: 5,
    question: "Do you provide mobile app development services?",
    answer:
      "Yes, we develop high-performance Android and iOS applications using modern frameworks like Flutter and React Native.",
  },
  {
    id: 6,
    question: "Will my project be scalable in the future?",
    answer:
      "Absolutely. We design all solutions with scalability in mind, ensuring your software can grow as your business expands.",
  },
  {
    id: 7,
    question: "Do you offer website redesign services?",
    answer:
      "Yes, we redesign existing websites to improve performance, user experience, responsiveness, and modern UI standards.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  /* ================= DYNAMIC SCHEMA ================= */

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://novarsistech.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQs",
        item: "https://novarsistech.com/faqs",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novarsis Technology",
    url: "https://novarsistech.com",
    logo: "https://novarsistech.com/logo.png",
  };

  return (
    <>
      <Helmet>
        <title>
          FAQs | Novarsis Technology - Software & IT Services Questions
        </title>

        <meta
          name="description"
          content="Find answers to frequently asked questions about Novarsis Technology services including web development, app development, SEO, UI/UX design, and custom software solutions."
        />

        <meta
          name="keywords"
          content="Novarsis Technology FAQs, software company questions, IT services FAQ, web development help, mobile app development FAQ"
        />

        <link rel="canonical" href="https://novarsistech.com/faqs" />
        <meta name="robots" content="index, follow" />

        {/* PRELOAD HERO POSTER (LCP BOOST) */}
        <link rel="preload" as="image" href="/Images/bannerImage.png" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Frequently Asked Questions - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Get answers about our IT services, development process, technologies, and software solutions."
        />
        <meta property="og:url" content="https://novarsistech.com/faqs" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Novarsis Technology FAQs" />
        <meta
          name="twitter:description"
          content="Common questions about web development, mobile apps, SEO, and digital solutions answered by Novarsis Technology."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* 🔥 DYNAMIC FAQ SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* 🔥 BREADCRUMB SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* 🔥 ORGANIZATION SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/bannerImage.png"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="text-[#008300] mx-1">/</span> FAQs
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
              Frequently Asked Questions
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative bg-white overflow-hidden py-20">
        <h2 className="sr-only">
          Frequently Asked Questions about Novarsis Technology IT Services and
          Support
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT FAQ */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Reveal key={faq.id}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg border-l-4 border-[#008300] p-6 cursor-pointer hover:shadow-2xl transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>

                    {openIndex === index ? (
                      <ChevronUp className="text-[#008300]" />
                    ) : (
                      <ChevronDown className="text-[#008300]" />
                    )}
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 text-gray-600 text-justify leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <Reveal>
              <img
                src="/Images/FAQ-Model-Pic-scaled.webp"
                alt="Novarsis Technology Frequently Asked Questions Support Section"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <AutoInternalLinks />
    </>
  );
};

export default FAQSection;
