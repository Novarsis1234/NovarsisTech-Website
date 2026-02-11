import React from "react";
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
  <title>Our Process | How Novarsis Technology Scales Your Business</title>

  <meta
    name="description"
    content="Discover the 5-step process used by Novarsis Technology to build, test, launch, and scale powerful digital solutions for businesses worldwide."
  />

  <meta
    name="keywords"
    content="Novarsis Technology process, software development workflow, IT project steps, digital business growth strategy, web development process India"
  />

  <link rel="canonical" href="https://novarsis.com/our-process" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="How We Scale Your Business - Novarsis Technology" />
  <meta
    property="og:description"
    content="From consultation to launch, explore our proven 5-step process for building scalable IT solutions."
  />
  <meta property="og:url" content="https://novarsis.com/our-process" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology Development Process" />
  <meta
    name="twitter:description"
    content="A structured approach to designing, developing, testing, and scaling digital products."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

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
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3">
        How We <span className="text-[#008300]">Scale Your Business</span>
      </h2>
    </Reveal>

    <Reveal>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
        From strategy to execution, our proven process helps you build,
        launch, and scale digital solutions with confidence.
      </p>
    </Reveal>
  </div>

  {/* Timeline */}
  <div className="relative max-w-6xl mx-auto mt-20 px-6">
    
    {/* Center Line (Desktop only) */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2"></div>

    <div className="space-y-20">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-center gap-10
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <Reveal>
              <img
                src={step.image}
                alt={`${step.title} – Novarsis Technology Business Scaling Step`}
                className="rounded-2xl shadow-xl w-full object-cover
                transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          </div>

          {/* Content Card */}
          <div className="md:w-1/2 w-full">
            <Reveal>
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                
                {/* Step Badge */}
                <span className="inline-block mb-3 text-sm font-semibold text-[#008300]">
                  Step {step.step}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Dot */}
                <span
                  className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-[#008300]
                    ${index % 2 === 0 ? "-right-12" : "-left-12"}`}
                ></span>
              </div>
            </Reveal>
          </div>

          {/* Background Step Number */}
          <span
            className={`absolute text-[72px] sm:text-[90px] font-extrabold
            text-[#008300]/10 select-none
            ${index % 2 === 0 ? "left-0" : "right-0"}`}
          >
            {step.step}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
   </>
  );
};

export default StepsSection;
