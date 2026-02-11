import React from "react";
import { Server, Users } from "lucide-react";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const ChooseUsSection = () => {
  return (
    <>
       {/* ================= ADVANCED HELMET SEO ================= */}
      <Helmet>
        <title>Why Choose Novarsis Technology | IT Solutions & Software Experts</title>

        <meta
          name="description"
          content="Discover why businesses choose Novarsis Technology for reliable, scalable, and innovative IT solutions. Expert team delivering real digital growth."
        />

        <meta
          name="keywords"
          content="Why choose Novarsis Technology, IT company benefits, software development experts, digital solutions company India"
        />

        <link rel="canonical" href="https://novarsis.com/why-choose-us" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Why Choose Novarsis Technology" />
        <meta
          property="og:description"
          content="Reliable IT solutions, proven results, and an expert team helping businesses scale digitally."
        />
        <meta property="og:url" content="https://novarsis.com/why-choose-us" />
        <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose Novarsis Technology" />
        <meta
          name="twitter:description"
          content="Learn why companies trust Novarsis Technology for innovative software and IT services."
        />
        <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
      </Helmet>
   
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute top-40 right-0 w-64 h-64 bg-[#0B1B3F]/10 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center relative group">
          
          {/* Glow Card */}
          <div className="absolute -inset-4 bg-[#008300]/10 rounded-3xl blur-2xl opacity-70"></div>

          {/* Accent Border */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#008300] to-[#0B1B3F] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700"></div>

          <Reveal>
            <img
              src="/Images/AboutPic3.png"
              alt="Why Choose Us"
              className="relative rounded-3xl shadow-2xl w-full max-w-[500px] object-cover
              transform transition-all duration-700
              group-hover:scale-105 group-hover:rotate-1"
            />
          </Reveal>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">

          <Reveal>
            <p className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
              Company Benefits
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Why You Should <br />
              <span className="text-[#008300]">Choose Us</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 max-w-xl mx-auto md:mx-0">
              We partner with ambitious brands to deliver reliable, scalable,
              and innovative digital solutions that create measurable impact.
            </p>
          </Reveal>

          {/* BENEFITS */}
          <div className="space-y-6 mt-10">

            {/* Benefit 1 */}
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-500">
              <div className="bg-[#008300]/10 p-4 rounded-full group-hover:scale-110 transition">
                <Server className="text-[#008300] w-6 h-6" />
              </div>
              <div>
                <Reveal>
                  <h3 className="text-lg font-semibold text-black">
                    Proven Results
                  </h3>
                </Reveal>
                <Reveal>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Delivering consistent growth and real business value through
                    data-driven strategies and execution excellence.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-500">
              <div className="bg-[#008300]/10 p-4 rounded-full group-hover:scale-110 transition">
                <Users className="text-[#008300] w-6 h-6" />
              </div>
              <div>
                <Reveal>
                  <h3 className="text-lg font-semibold text-black">
                    Expert Team
                  </h3>
                </Reveal>
                <Reveal>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A passionate team of specialists committed to transforming
                    complex challenges into powerful digital solutions.
                  </p>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section> </>
  );
};

export default ChooseUsSection;
