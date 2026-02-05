import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import {
  FaBullhorn,
  FaSearch,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { SiGoogleads, SiGoogleanalytics, SiMailchimp } from "react-icons/si";

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
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
              Digital Marketing Services
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
              Data-driven digital marketing strategies that increase traffic,
              leads, and conversions.
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
                Digital Marketing
              </h2>
            </Reveal>

            <Reveal>
              <ul className="space-y-4 text-gray-700 text-lg">
                {[
                  "Result-oriented marketing strategies",
                  "Organic & paid traffic growth",
                  "Brand awareness & online visibility",
                  "Lead generation & conversion optimization",
                  "Analytics-driven performance tracking",
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
                  src="/Images/s-dm1.png"
                  alt="Digital Marketing"
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
              Our digital marketing services help businesses grow online by
              reaching the right audience at the right time. We use a
              data-driven approach combining SEO, paid advertising, social media
              marketing, content marketing, and email campaigns to maximize ROI.
              Every strategy is tailored to your business goals, ensuring
              measurable results and long-term growth.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Search engine & social media marketing",
                "Paid ads & campaign optimization",
                "Lead generation & funnel strategy",
                "Analytics & conversion tracking",
                "Brand growth & engagement",
                "Continuous optimization & reporting",
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
          <Stat icon={<FaProjectDiagram />} value="60+" label="Campaigns Run" />
          <Stat icon={<FaClock />} value="8+" label="Years Experience" />
          <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
        </div>
      </section>

      {/* ================= MARKETING SERVICES ================= */}
      <SkillSection
        title="Digital Marketing Services"
        desc="Comprehensive digital marketing solutions to grow your business online."
        bg="bg-white"
        skills={[
          { icon: <FaSearch />, name: "SEO Optimization" },
          { icon: <SiGoogleads />, name: "Google Ads" },
          { icon: <FaFacebookF bookads />, name: "Social Media Ads" },
          { icon: <FaInstagram />, name: "Social Media Marketing" },
          { icon: <FaBullhorn />, name: "Brand Promotion" },
          { icon: <FaEnvelopeOpenText />, name: "Email Marketing" },
        ]}
      />

      {/* ================= TOOLS ================= */}
      <SkillSection
        title="Marketing Tools"
        desc="Advanced tools used for tracking, automation, and optimization."
        bg="bg-[#f6fff6]"
        skills={[
          { icon: <FaGoogle />, name: "Google Search Console" },
          { icon: <SiGoogleanalytics />, name: "Google Analytics" },
          { icon: <SiMailchimp />, name: "Mailchimp" },
          { icon: <FaLinkedinIn />, name: "LinkedIn Marketing" },
          { icon: <FaFacebookF />, name: "Facebook Business" },
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
                src="/Images/s-dm2.png"
                alt="Digital Marketing FAQ"
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
                Digital Marketing FAQs
              </h2>
            </Reveal>

            {[
              {
                q: "How long does it take to see results?",
                a: "SEO takes 2–3 months, ads give faster results.",
              },
              {
                q: "Do you provide monthly reports?",
                a: "Yes, detailed performance & ROI reports.",
              },
              {
                q: "Is paid advertising included?",
                a: "Yes, Google & social media ads are available.",
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
    </div>
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

export default DigitalMarketing;
