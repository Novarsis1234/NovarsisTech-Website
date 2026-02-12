import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import {
  FaSearch,
  FaChartLine,
  FaGlobe,
  FaLink,
  FaFileAlt,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaChevronDown,
  FaGoogle,
} from "react-icons/fa";
import {
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
} from "react-icons/si";
 import { Helmet } from "react-helmet-async";

const SEOOptimization = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
   

<Helmet>
  <title>
    SEO Optimization Services | Increase Rankings & Traffic - Novarsis Technology
  </title>

  <meta
    name="description"
    content="Professional SEO Optimization Services by Novarsis Technology. Improve Google rankings, increase organic traffic, and grow your business with advanced SEO strategies."
  />

  <meta
    name="keywords"
    content="SEO services, SEO optimization company, digital marketing SEO, technical SEO, on-page SEO, off-page SEO, Novarsis Technology"
  />

  <link rel="canonical" href="https://novarsis.com/seooptimization" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="SEO Optimization Services - Novarsis Technology"
  />
  <meta
    property="og:description"
    content="Boost your website visibility with powerful SEO strategies including keyword research, technical SEO, content optimization, and performance tracking."
  />
  <meta property="og:url" content="https://novarsis.com/seooptimization" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SEO Optimization Services | Novarsis Technology"
  />
  <meta
    name="twitter:description"
    content="Grow organic traffic and improve search engine rankings with expert SEO services from Novarsis Technology."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>

   
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          poster="/Images/bannerImage.png" 
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/80"></div>

        <div className="relative z-10 text-center text-white px-6">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              SEO Optimization Services
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
              Improve search rankings, organic traffic, and online visibility
              with data-driven SEO strategies.
            </p>
          </Reveal>
        </div>
      </section> 

      
    

      {/* ================= INTRO ================= */}
     <section className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">
  {/* Decorative Circles */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full hidden md:block"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT */}
    <div>
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-[#008300] mb-6">
          SEO Optimization
        </h2>
      </Reveal>

      <Reveal>
        <ul className="space-y-4 text-gray-700 text-lg">
          {[
            "On-page & technical SEO optimization",
            "Keyword research & content strategy",
            "High-quality backlink building",
            "Website speed & performance improvement",
            "Long-term ranking & traffic growth",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#008300] text-xl font-bold">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>

    {/* RIGHT IMAGE (CIRCLE) */}
    <Reveal>
      <div className="flex justify-center md:justify-end">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="/Images/s-SEO1.png"
            alt="SEO Optimization"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Reveal>

  </div>
</section>


{/* ================= DESCRIPTION ================= */}
<section className="relative py-16 px-6 bg-[#fffaf2] overflow-hidden">
  {/* Decorative Circle */}
  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <Reveal>
      <p className="text-gray-700 text-lg leading-relaxed text-justify mb-12">
        Our SEO optimization services help businesses rank higher on search
        engines and attract consistent organic traffic. We follow
        white-hat SEO practices including keyword research, technical SEO,
        content optimization, and authoritative link building. With
        continuous monitoring and data analysis, we ensure sustainable
        growth, better visibility, and higher conversions.
      </p>
    </Reveal>

    <Reveal>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
        {[
          "On-page, off-page & technical SEO",
          "Keyword & competitor analysis",
          "Content optimization & blogging",
          "Link building & authority growth",
          "Performance tracking & reporting",
          "Continuous SEO improvements",
        ].map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="text-[#008300] text-xl font-bold">✔</span>
            {point}
          </div>
        ))}
      </div>
    </Reveal>

  </div>
</section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6 bg-[#008300] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Stat icon={<FaUsers />} value="40+" label="Clients Ranked" />
          <Stat icon={<FaProjectDiagram />} value="50+" label="SEO Projects" />
          <Stat icon={<FaClock />} value="8+" label="Years Experience" />
          <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
        </div>
      </section>

      {/* ================= SEO SERVICES ================= */}
      <SkillSection
        title="SEO Services"
        desc="Comprehensive SEO solutions to improve visibility and rankings."
        bg="bg-white"
        skills={[
          { icon: <FaSearch />, name: "Keyword Research" },
          { icon: <FaFileAlt />, name: "On-Page SEO" },
          { icon: <FaLink />, name: "Link Building" },
          { icon: <FaGlobe />, name: "Technical SEO" },
          { icon: <FaChartLine />, name: "SEO Analytics" },
        ]}
      />

      {/* ================= SEO TOOLS ================= */}
      <SkillSection
        title="SEO Tools"
        desc="Advanced tools used to analyze, optimize, and track SEO performance."
        bg="bg-[#f6fff6]"
        skills={[
          { icon: <FaGoogle />, name: "Google Search" },
          { icon: <SiGooglesearchconsole />, name: "Search Console" },
          { icon: <SiGoogleanalytics />, name: "Google Analytics" },
          { icon: <FaChartLine />, name: "Ahrefs" },
          { icon: <SiSemrush />, name: "SEMrush" },
        ]}
      />

      {/* ================= FAQ ================= */}
    <section className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">

  {/* DECORATIVE LAYERED SQUARES (RESPONSIVE SAFE) */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 hidden md:block"></div>
  <div className="absolute -top-16 -left-16 w-72 h-72 border-2 border-[#008300]/20 hidden md:block"></div>

  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 hidden md:block"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-[#008300]/20 hidden md:block"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* IMAGE */}
    <Reveal>
      <div className="relative max-w-md mx-auto md:max-w-none">
        {/* BACK LAYER */}
        <div className="absolute inset-0 bg-[#008300]/10 rounded-[36px] -rotate-3"></div>

        <img
          src="/Images/s-SEO2.png"
          alt="SEO FAQ"
          className="
            relative z-10
            w-full
            rounded-[36px]
            shadow-2xl
          "
        />
      </div>
    </Reveal>

    {/* FAQ CONTENT */}
    <div>
      <Reveal>
        <h2 className="text-3xl font-bold text-[#008300] mb-8">
          SEO FAQs
        </h2>
      </Reveal>

      {[
        { q: "How long does SEO take?", a: "Usually 2–3 months for visible results." },
        { q: "Do you follow Google guidelines?", a: "Yes, we use 100% white-hat SEO practices." },
        { q: "Do you provide monthly reports?", a: "Yes, detailed SEO & ranking reports." },
      ].map((item, i) => (
        <div key={i} className="mb-4 bg-white rounded-xl shadow">
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex justify-between items-center p-5 font-semibold"
          >
            {item.q}
            <FaChevronDown
              className={`${openFaq === i ? "rotate-180" : ""} transition-transform`}
            />
          </button>

          {openFaq === i && (
            <div className="px-5 pb-5 text-gray-600">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>  

{/* ================= SEO SERVICES INTRO ================= */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-justify">

    <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
      SEO Optimization Services <span className="text-[#008300]">by Novarsis Technology</span> </h2>

    <p className="mb-4">
      Our SEO optimization services are designed to improve your website’s
      visibility on search engines and attract high-quality organic traffic.
      At Novarsis Technology, we use modern SEO techniques that combine
      technical optimization, content strategy, and performance analysis
      to help businesses achieve higher search rankings.
    </p>

    <p className="mb-4">
      We conduct detailed keyword research, optimize website structure,
      enhance page speed, and improve on-page elements such as headings,
      meta tags, and internal linking. Our team also focuses on content
      optimization and backlink strategies to strengthen domain authority
      and search relevance.
    </p>

    <p>
      By following search engine guidelines and improving user experience,
      Novarsis Technology helps businesses increase visibility, generate
      leads, and build a strong digital presence that supports long-term
      growth.
    </p>

  </div>
</section>


    </div> </>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const SkillSection = ({ title, desc, skills, bg }) => (
  <section className={`relative py-28 px-6 ${bg} overflow-hidden`}>
    
    {/* SQUARE BACKGROUND PATTERN */}
    <div
      className="
        absolute inset-0
        bg-[linear-gradient(to_right,#00830012_1px,transparent_1px),
            linear-gradient(to_bottom,#00830012_1px,transparent_1px)]
        bg-[size:64px_64px]
        pointer-events-none
      "
    ></div>

    <div className="max-w-7xl mx-auto relative z-10">

      <Reveal>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#008300] mb-6 text-center">
          {title}
        </h2>
      </Reveal>

      <Reveal>
        <p className="max-w-4xl mx-auto text-center text-gray-600 text-lg mb-16">
          {desc}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <Reveal key={i}>
            <div
              className="
                relative bg-white
                p-8 text-center
                border border-[#008300]/20
                shadow-md hover:shadow-xl
                hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* TOP STRAIGHT ACCENT */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008300]"></div>

              {/* ICON (SQUARE – NO CIRCLE) */}
              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  flex items-center justify-center
                  bg-[#008300]/10
                  text-[#008300] text-3xl
                "
              >
                {skill.icon}
              </div>

              <h4 className="font-semibold text-gray-800 text-lg">
                {skill.name}
              </h4>
            </div>
          </Reveal>
        ))}
      </div>

    </div>
  </section>
);

const Stat = ({ icon, value, label }) => (
  <Reveal>
    <div className="p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm">{label}</p>
    </div>
  </Reveal>
);

export default SEOOptimization;
