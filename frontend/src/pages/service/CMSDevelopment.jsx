import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import {
  FaWordpress,
  FaShopify,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaChevronDown,
  FaServer,
  FaCogs,
  FaLock,
  FaGlobe,
} from "react-icons/fa";
import {
  SiStrapi,
  SiContentful,
  SiMagento,
  SiWoocommerce,
} from "react-icons/si";

const CMSDevelopment = () => {
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
          poster="/Images/novarsis-home2.webp" 
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/80"></div>

        <div className="relative z-10 text-center text-white px-6">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              CMS Development Services
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
              Powerful, scalable and easy-to-manage content management solutions
              for businesses.
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
          CMS Development
        </h2>
      </Reveal>

      <Reveal>
        <ul className="space-y-4 text-gray-700 text-lg">
          {[
            "Custom CMS development & customization",
            "User-friendly admin dashboards",
            "Secure & scalable content architecture",
            "SEO-optimized & performance-driven CMS",
            "Ongoing support & maintenance",
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
            src="/Images/cms-dev.webp"
            alt="CMS Development"
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
        Our CMS development services help businesses manage, update, and
        scale their digital content effortlessly. We build secure,
        flexible, and high-performance content management systems tailored
        to your business needs. From simple blogs and corporate websites
        to complex enterprise CMS and e-commerce platforms, we deliver
        solutions that empower your team with full control over content
        while ensuring speed, security, and scalability.
      </p>
    </Reveal>

    <Reveal>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
        {[
          "WordPress, Headless & custom CMS",
          "Easy content & media management",
          "Role-based admin access",
          "API & third-party integrations",
          "SEO & performance optimization",
          "Long-term maintenance & support",
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
          <Stat icon={<FaProjectDiagram />} value="70+" label="CMS Projects" />
          <Stat icon={<FaClock />} value="8+" label="Years Experience" />
          <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
        </div>
      </section>

      {/* ================= CMS PLATFORMS ================= */}
      <SkillSection
        title="CMS Platforms"
        desc="Popular and powerful CMS platforms used to build scalable websites."
        bg="bg-white"
        skills={[
          { icon: <FaWordpress />, name: "WordPress" },
          { icon: <SiStrapi />, name: "Strapi (Headless CMS)" },
          { icon: <SiContentful />, name: "Contentful" },
          { icon: <FaShopify />, name: "Shopify CMS" },
          { icon: <SiMagento />, name: "Magento" },
          { icon: <SiWoocommerce />, name: "WooCommerce" },
        ]}
      />

      {/* ================= FEATURES ================= */}
      <SkillSection
        title="CMS Features"
        desc="Essential features included in our CMS development solutions."
        bg="bg-[#f6fff6]"
        skills={[
          { icon: <FaCogs />, name: "Custom Admin Panel" },
          { icon: <FaServer />, name: "Scalable Architecture" },
          { icon: <FaLock />, name: "Security & Roles" },
          { icon: <FaGlobe />, name: "Multi-language CMS" },
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
          src="/Images/cms-faq.webp"
          alt="CMS FAQ"
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
          CMS Development FAQs
        </h2>
      </Reveal>

      {[
        { q: "Can I manage content myself?", a: "Yes, you get a user-friendly admin dashboard." },
        { q: "Do you provide custom CMS?", a: "Yes, we build fully custom and headless CMS." },
        { q: "Do you offer maintenance?", a: "Yes, ongoing support & updates available." },
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
        bg-[linear-gradient(to_right,#00830014_1px,transparent_1px),
            linear-gradient(to_bottom,#00830014_1px,transparent_1px)]
        bg-[size:60px_60px]
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
                border border-gray-200
                shadow-md hover:shadow-xl
                hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* TOP SQUARE ACCENT */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008300]"></div>

              {/* ICON (SQUARE – NO CIRCLE) */}
              <div className="
                w-16 h-16 mx-auto mb-5
                flex items-center justify-center
                bg-[#008300]/10 text-[#008300] text-3xl
              ">
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

export default CMSDevelopment;
