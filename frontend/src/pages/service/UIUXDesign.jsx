import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import {
  FaPencilRuler,
  FaFigma,
  FaSketch,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaChevronDown,
  FaMobileAlt,
  FaDesktop,
  FaLayerGroup,
  FaSearch,
} from "react-icons/fa";
import { SiAdobexd, SiInvision, SiFramer } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const UiUxDesigner = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          UI / UX Design Services | Creative Interface Design - Novarsis
          Technology
        </title>

        <meta
          name="description"
          content="Professional UI/UX design services by Novarsis Technology. We create modern, user-focused interfaces that improve engagement, usability, and conversion rates."
        />

        <meta
          name="keywords"
          content="UI UX design company, user interface design, user experience design, mobile app UI design, website UI UX services, Novarsis Technology"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/uiuxdesign" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="UI / UX Design Services - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Creative and user-focused UI/UX design solutions to enhance digital experiences and improve business growth."
        />
        <meta property="og:url" content="https://novarsistech.com/uiuxdesign" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="UI UX Design Services | Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Modern UI/UX design for websites and mobile apps focused on usability, performance, and engagement."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 SERVICE SCHEMA (UI/UX DESIGN SEO BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Service",
        "serviceType":"UI UX Design Services",
        "provider":{
          "@type":"Organization",
          "name":"Novarsis Technology",
          "url":"https://novarsistech.com"
        },
        "areaServed":"Worldwide",
        "url":"https://novarsistech.com/uiuxdesign",
        "description":"User interface and user experience design services including mobile app UI, website UX strategy, and modern digital product design."
      }
    `}
        </script>
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
                UI / UX Design Services
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
                User-centered, visually stunning and conversion-focused UI/UX
                design solutions.
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
                  UI / UX Design
                </h2>
              </Reveal>

              <Reveal>
                <ul className="space-y-4 text-gray-700 text-lg">
                  {[
                    "User-focused interface & experience design",
                    "Mobile-first & responsive design approach",
                    "Wireframes, prototypes & design systems",
                    "Conversion-driven and business-oriented UX",
                    "Design optimized for development handoff",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#008300] text-xl font-bold">
                        ✔
                      </span>
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
                    src="/Images/s-uiux1.png"
                    alt="UI UX Design"
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
                Our UI/UX design services focus on creating intuitive,
                user-friendly, and visually engaging digital experiences. We
                follow a user-centric design approach that includes research,
                wireframing, prototyping, usability testing, and final interface
                design. Our goal is to enhance usability, improve engagement,
                and drive higher conversions while maintaining brand consistency
                and accessibility across all platforms.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
                {[
                  "User research & persona creation",
                  "Wireframing & interactive prototyping",
                  "Mobile & web UI design",
                  "UX audits & usability testing",
                  "Design systems & style guides",
                  "Developer-friendly design handoff",
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
            <Stat icon={<FaUsers />} value="50+" label="Happy Clients" />
            <Stat
              icon={<FaProjectDiagram />}
              value="60+"
              label="Design Projects"
            />
            <Stat icon={<FaClock />} value="8+" label="Years Experience" />
            <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
          </div>
        </section>

        {/* ================= DESIGN SKILLS ================= */}
        <SkillSection
          title="UI / UX Tools & Skills"
          desc="Professional design tools and methodologies used to craft seamless user experiences."
          bg="bg-white"
          skills={[
            { icon: <FaFigma />, name: "Figma" },
            { icon: <SiAdobexd />, name: "Adobe XD" },
            { icon: <FaSketch />, name: "Sketch" },
            { icon: <SiInvision />, name: "InVision" },
            { icon: <SiFramer />, name: "Framer" },
            { icon: <FaPencilRuler />, name: "Wireframing" },
            { icon: <FaLayerGroup />, name: "Design System" },
            { icon: <FaSearch />, name: "UX Research" },
          ]}
        />

        {/* ================= PLATFORMS ================= */}
        <SkillSection
          title="Design Platforms"
          desc="Design solutions tailored for different platforms and devices."
          bg="bg-[#f6fff6]"
          skills={[
            { icon: <FaMobileAlt />, name: "Mobile Apps" },
            { icon: <FaDesktop />, name: "Web Applications" },
            { icon: <SiAdobe />, name: "Branding UI" },
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
                <div className="absolute inset-0 bg-[#008300]/10 rounded-[36px] rotate-3"></div>

                <img
                  src="/Images/s-uiux2.png"
                  alt="UI UX FAQ"
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
                  UI / UX FAQs
                </h2>
              </Reveal>

              {[
                {
                  q: "Do you provide wireframes & prototypes?",
                  a: "Yes, complete wireframes and interactive prototypes.",
                },
                {
                  q: "Will designs be developer-friendly?",
                  a: "Yes, we follow proper design handoff standards.",
                },
                {
                  q: "Do you redesign existing products?",
                  a: "Yes, UI/UX audits and redesign services available.",
                },
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
                    <div className="px-5 pb-5 text-gray-600">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= UI UX DESIGN SEO INTRO ================= */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
              UI & UX Design Services{" "}
              <span className="text-[#008300]">by Novarsis Technology</span>
            </h2>

            <p className="mb-4">
              Our UI and UX design services focus on creating visually engaging
              and highly intuitive digital experiences that improve user
              satisfaction and strengthen brand perception. At Novarsis
              Technology, we believe design is not just about appearance but
              also usability, accessibility, and seamless interaction across web
              and mobile platforms.
            </p>

            <p className="mb-4">
              We create wireframes, prototypes, and design systems that ensure
              consistency throughout your product. From typography and color
              palettes to navigation structure and animations, every element is
              carefully planned to enhance user journeys and optimize conversion
              rates.
            </p>

            <p>
              By combining creativity with data-driven insights, Novarsis
              Technology develops UI/UX solutions aligned with modern design
              trends while maintaining strong usability standards. Our goal is
              to help businesses deliver smooth, engaging, and memorable digital
              experiences.
            </p>
          </div>
        </section>
      </div>{" "}
    </>
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

export default UiUxDesigner;
