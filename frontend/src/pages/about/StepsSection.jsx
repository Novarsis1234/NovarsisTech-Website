import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Reach out to our team through call, email, or our contact form. Let’s discuss your goals and business needs.",
    image: "/Images/AboutStep1.png",
  },
  {
    step: "02",
    title: "Get a Quote",
    description:
      "We analyse your requirements and share a tailored plan. No strings attached, just expert & best advice for your growth.",
    image: "/Images/AboutStep2.png",
  },
  {
    step: "03",
    title: "Novarsis Magic Begins",
    description:
      "Our skilled team designs and develops your solution. We keep you updated at every milestone.",
    image: "/Images/AboutStep3.png",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    description:
      "Rigorous testing to ensure top performance and quality. We fine-tune everything for your satisfaction.",
    image: "/Images/AboutStep4.png",
  },
  {
    step: "05",
    title: "Grow Your Business",
    description:
      "Your project goes live, backed by Novarsis support. Watch your business succeed and scale digitally.",
    image: "/Images/AboutStep5.png",
  },
];

const StepsSection = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Process - How Novarsis Technology Scales Your Business in 5 Steps
        </title>

        <meta
          name="description"
          content="Discover the proven 5-step process used by Novarsis Technology to build, test, launch, and scale powerful digital solutions for businesses worldwide. From consultation to success."
        />

        <meta
          name="keywords"
          content="Development process, software development steps, IT project workflow, digital transformation, business scaling process, web development lifecycle, Novarsis Technology methodology"
        />

        {/* ✅ Dynamic Canonical */}
        <link rel="canonical" href="https://novarsistech.com/our-process" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Novarsis Technology" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="How We Scale Your Business - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="From consultation to launch, explore our proven 5-step process for building scalable IT solutions."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/our-process"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Novarsis Technology Development Process"
        />
        <meta
          name="twitter:description"
          content="A structured approach to designing, developing, testing, and scaling digital products."
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
                "name": "About",
                "item": "https://novarsistech.com/about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Our Process",
                "item": "https://novarsistech.com/our-process"
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
            "logo": "https://novarsistech.com/Images/logo.png",
            "description": "Leading IT services company offering web development, app development, SEO optimization, digital marketing, UI/UX design, and graphic design solutions.",
            "sameAs": [
              "https://facebook.com/novarsistech",
              "https://twitter.com/novarsistech",
              "https://linkedin.com/company/novarsistech"
            ]
          })}
        </script>

        {/* ✅ HowTo Schema for Process Steps */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Novarsis Technology Scales Your Business",
            "description": "The 5-step development and scaling process used by Novarsis Technology.",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Contact Us",
                "text": "Reach out to our team through call, email, or our contact form. Let's discuss your goals and business needs."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Get a Quote",
                "text": "We analyse your requirements and share a tailored plan. No strings attached, just expert advice for your growth."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Novarsis Magic Begins",
                "text": "Our skilled team designs and develops your solution. We keep you updated at every milestone."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Testing & Refinement",
                "text": "Rigorous testing to ensure top performance and quality. We fine-tune everything for your satisfaction."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Grow Your Business",
                "text": "Your project goes live, backed by Novarsis support. Watch your business succeed and scale digitally."
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ✅ Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <Link to="/">Home</Link> / <Link to="/about">About</Link> / Our Process
      </nav>

      <article className="bg-white">
        <section className="relative bg-white py-24 overflow-hidden">
          {/* ⭐ Hidden SEO Heading */}
          <h2 className="sr-only">
            Novarsis Technology Process – How We Scale Your Business in 5 Steps
          </h2>

          {/* Header */}
          <div className="max-w-6xl mx-auto text-center px-6">
            <Reveal>
              <h4 className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
                In Just 5 Steps
              </h4>
            </Reveal>

            <Reveal>
              <h1 itemProp="headline" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3">
                How We <span className="text-[#008300]">Scale Your Business</span>
              </h1>
            </Reveal>

            <Reveal>
              <p itemProp="description" className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
                From strategy to execution, our proven 5-step process helps you build, launch, and scale digital solutions with confidence and measurable results. Discover how Novarsis Technology delivers success through proven methodology.
              </p>
            </Reveal>

            {/* ✅ Additional SEO H2 Headings */}
            <h2 className="sr-only">Our Development Process Steps and Methodology</h2>
            <h2 className="sr-only">Why Our Process Works For Digital Success</h2>
          </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto mt-20 px-6">
          {/* Center Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/HowToStep"
                className={`relative flex flex-col md:flex-row items-center gap-10
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <Reveal>
                    <figure>
                      <img
                        src={step.image}
                        alt={`Step ${step.step} - ${step.title}: ${step.description.substring(0, 40)}...`}
                        className="rounded-2xl shadow-xl w-full object-cover
                transition-transform duration-500 hover:scale-105"
                        itemProp="image"
                      />
                    </figure>
                  </Reveal>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 w-full">
                  <Reveal>
                    <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                      {/* Step Badge */}
                      <span itemProp="position" className="inline-block mb-3 text-sm font-semibold text-[#008300]">
                        Step {step.step}
                      </span>

                      <h3 itemProp="name" className="text-xl sm:text-2xl font-bold text-black mb-3">
                        {step.title}
                      </h3>

                      <p itemProp="text" className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Connector Dot */}
                      <span
                        className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-[#008300]
                    ${index % 2 === 0 ? "-right-12" : "-left-12"}`}
                        aria-hidden="true"
                      ></span>
                    </div>
                  </Reveal>
                </div>

                {/* Background Step Number */}
                <span
                  className={`absolute text-[72px] sm:text-[90px] font-extrabold
            text-[#008300]/10 select-none
            ${index % 2 === 0 ? "left-0" : "right-0"}`}
                  aria-hidden="true"
                >
                  {step.step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ CTA Section with Internal Links */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#008300]/10 to-transparent py-16 px-6 rounded-2xl max-w-4xl mx-auto">
          <h2 className="sr-only">Ready to Transform Your Business</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            Excited to see how Novarsis Technology can transform your business? Let's get started today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog" className="bg-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#009e3c] transition">
             Our Blogs
            </Link>
            <Link to="/project" className="border-2 border-[#008300] text-[#008300] px-8 py-3 rounded-lg font-semibold hover:bg-[#008300] hover:text-white transition">
             Our Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
    </>
  );
};

export default StepsSection;
