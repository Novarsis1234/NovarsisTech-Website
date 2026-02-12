import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

/* ================= STATIC FAQ DATA (10) ================= */
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/faqs" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
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

        {/* ✅ Twitter */}
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

        {/* ✅🔥 FAQ SCHEMA (RICH RESULT BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Novarsis Technology provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Novarsis Technology provides web development, app development, SEO optimization, UI/UX design, digital marketing, and custom software solutions."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Novarsis Technology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Novarsis Technology through our contact form, email, or phone available on the contact page."
            }
          }
        ]
      }
    `}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/bannerImage.png"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        {/* Content */}
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

      <section>
        {/* ================= FAQ + IMAGE SECTION ================= */}
        <section className="relative bg-white overflow-hidden">
          {/* Hidden SEO Heading OK */}
          <h2 className="sr-only">
            Frequently Asked Questions about Novarsis Technology IT Services and
            Support
          </h2>

          {/* BACKGROUND CIRCLES */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
          <div className="absolute top-40 right-[-100px] w-80 h-80 bg-[#008300]/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-[#008300]/10 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            {/* SECTION HEADING */}
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                Frequently Asked{" "}
                <span className="text-[#008300]">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* LEFT FAQ */}
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Reveal key={faq.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-2xl shadow-lg border-l-4 border-[#008300] p-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {faq.question}
                        </h3>

                        {openIndex === index ? (
                          <ChevronUp className="text-[#008300] shrink-0" />
                        ) : (
                          <ChevronDown className="text-[#008300] shrink-0" />
                        )}
                      </div>

                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
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
              <div className="relative">
                <Reveal>
                  <img
                    src="/Images/FAQ-Model-Pic-scaled.webp"
                    alt="Novarsis Technology Frequently Asked Questions Support Section"
                    className="w-full rounded-3xl shadow-2xl object-cover"
                  />
                </Reveal>

                <div className="absolute -bottom-6 -left-6 bg-[#008300] text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-lg font-bold">24/7 Support</p>
                  <p className="text-sm opacity-90">We’re here to help</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VISIBLE SEO INTRO ================= */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
              Frequently Asked Questions{" "}
              <span className="text-[#008300]">by Novarsis Technology</span>
            </h2>

            <p className="mb-4">
              Our Frequently Asked Questions section helps visitors understand
              how Novarsis Technology delivers reliable IT services and modern
              digital solutions. We address common queries related to web
              development, mobile app development, UI/UX design, SEO strategies,
              and project timelines to provide complete transparency about our
              workflow.
            </p>

            <p className="mb-4">
              These FAQs are designed to give businesses clarity about pricing
              structure, development process, and long-term support services.
              Our goal is to build trust by sharing real information that helps
              clients make confident decisions before starting their digital
              journey with us.
            </p>

            <p>
              Whether you are planning a new website, launching a mobile
              application, or improving your online marketing performance, our
              FAQ section provides helpful insights into how our team uses
              innovative technologies and creative strategies to deliver
              high-quality results.
            </p>
          </div>
        </section>
      </section>

      <AutoInternalLinks />
    </>
  );
};

export default FAQSection;
