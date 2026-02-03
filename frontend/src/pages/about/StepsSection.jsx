import React from "react";
import Reveal from "../../components/Reveal";

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Reach out to our team through call, email, or our contact form. Let’s discuss your goals and business needs.",
    image: "/Images/novarsis-technology1.webp",
  },
  {
    step: "02",
    title: "Get a Quote",
    description:
      "We analyse your requirements and share a tailored plan. No strings attached, just expert & best advice for your growth.",
    image: "/Images/novarsis-technology2.webp",
  },
  {
    step: "03",
    title: "Novarsis Magic Begins",
    description:
      "Our skilled team designs and develops your solution. We keep you updated at every milestone.",
    image: "/Images/novarsis-technology3.webp",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    description:
      "Rigorous testing to ensure top performance and quality. We fine-tune everything for your satisfaction.",
    image: "/Images/novarsis-technology4.webp",
  },
  {
    step: "05",
    title: "Grow Your Business",
    description:
      "Your project goes live, backed by Novarsis support. Watch your business succeed and scale digitally.",
    image: "/Images/novarsis-technology5.webp",
  },
];

const StepsSection = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <Reveal>
          <p className="text-[#008300] font-semibold uppercase tracking-widest text-sm">
            In Just 5 Steps
          </p>
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
                    alt={step.title}
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
  );
};

export default StepsSection;
