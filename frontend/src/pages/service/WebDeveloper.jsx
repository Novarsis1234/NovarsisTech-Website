import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import Reveal from "../../components/Reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaDatabase,
  FaWordpress,
  FaShopify,
  FaAws,
  FaDocker,
  FaGithub,
  FaChevronDown,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const WebDeveloper = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Web Development Services | Custom Website Development - Novarsis
          Technology
        </title>

        <meta
          name="description"
          content="Professional web development services by Novarsis Technology. We build fast, secure, and scalable websites using React, Node.js, modern UI/UX, and SEO-focused architecture."
        />

        <meta
          name="keywords"
          content="web development company India, custom website development, React website developers, Node.js development, SEO friendly websites, Novarsis Technology"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/webdeveloper" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Development Services - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Build modern, responsive, and high-performance websites with Novarsis Technology. Custom web solutions designed for growth."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/webdeveloper"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Web Development Services | Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Modern web development solutions using React, Node.js and scalable backend architecture."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 SERVICE SCHEMA (WEB DEVELOPMENT SEO BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"Service",
        "serviceType":"Web Development Services",
        "provider":{
          "@type":"Organization",
          "name":"Novarsis Technology",
          "url":"https://novarsistech.com"
        },
        "areaServed":"Worldwide",
        "url":"https://novarsistech.com/webdeveloper",
        "description":"Custom website development using React, Node.js, scalable backend architecture, SEO-friendly design, and modern UI/UX solutions."
      }
    `}
        </script>
      </Helmet>
      <div className="bg-white">
        {/* ================= HERO ================= */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-contain"
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
                Web Development Services
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
                Complete frontend, backend & full-stack development solutions
                using modern technologies.
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
            {/* LEFT CONTENT */}
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-[#008300] mb-6">
                  Web Development
                </h2>
              </Reveal>

              <Reveal>
                <ul className="space-y-4 text-gray-700 text-lg">
                  {[
                    "Modern, scalable & high-performance web applications",
                    "Interactive & responsive frontend user experiences",
                    "Secure, fast & reliable backend architecture",
                    "API integrations, databases & third-party services",
                    "SEO-friendly, optimized & business-driven solutions",
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
                    src="/Images/s-webdevelpment1.png"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECOND SECTION */}
        <section className="relative py-16 px-6 bg-[#fffaf2] overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-12">
                Our web development services focus on delivering modern,
                scalable, and high-performance digital solutions tailored to
                your business goals. We specialize in creating responsive and
                user-friendly frontend interfaces that provide seamless
                experiences across all devices, while our robust backend systems
                ensure security, speed, and reliability. From custom business
                websites and dynamic web applications to complex dashboards,
                APIs, and database-driven platforms, we handle the complete
                development lifecycle.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
                {[
                  "Modern, responsive and user-centric frontend development",
                  "Secure, scalable and high-performance backend architecture",
                  "End-to-end development from concept, design to deployment",
                  "API integration, database optimization and cloud deployment",
                  "SEO-optimized code, speed enhancement and performance tuning",
                  "Continuous maintenance, updates and long-term technical support",
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

        {/* ================= STATS SECTION ================= */}
        <section className="py-20 px-6 bg-[#008300] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Stat icon={<FaUsers />} value="60+" label="Happy Clients" />
            <Stat
              icon={<FaProjectDiagram />}
              value="80+"
              label="Projects Done"
            />
            <Stat icon={<FaClock />} value="8+" label="Years Experience" />
            <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
          </div>
        </section>

        {/* ================= FRONTEND ================= */}
        <SkillSection
          title="Frontend Technologies"
          desc="Frontend development focuses on building visually engaging, responsive, and user-friendly interfaces that ensure seamless user experiences across all devices and browsers."
          bg="bg-[#fffaf2]" // soft cream, clean (no circles)
          skills={[
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <FaVuejs />, name: "Vue.js" },
            { icon: <FaAngular />, name: "Angular" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        {/* ================= BACKEND ================= */}
        <SkillSection
          title="Backend Technologies"
          desc="Backend development handles server-side logic, databases, APIs, and application security to ensure speed, scalability, and reliability."
          bg="bg-[#f6fff6]"
          skills={[
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <FaPhp />, name: "PHP" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaJava />, name: "Java" },
          ]}
        />

        {/* ================= DATABASE ================= */}
        <SkillSection
          title="Databases"
          desc="Database technologies are used to store, manage, and optimize structured and unstructured data securely and efficiently."
          bg="bg-white"
          skills={[
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <SiRedis />, name: "Redis" },
            { icon: <FaDatabase />, name: "SQLite" },
          ]}
        />

        {/* ================= CMS ================= */}
        <SkillSection
          title="CMS & E-Commerce"
          desc="Content management and e-commerce platforms allow businesses to manage content, products, and sales with ease and flexibility."
          bg="bg-[#f6fff6]"
          skills={[
            { icon: <FaWordpress />, name: "WordPress" },
            { icon: <FaShopify />, name: "Shopify" },
          ]}
        />

        {/* ================= DEVOPS ================= */}
        <SkillSection
          title="Cloud & DevOps"
          desc="Cloud and DevOps technologies help automate deployment, improve scalability, and ensure application reliability and performance."
          bg="bg-white"
          skills={[
            { icon: <FaAws />, name: "AWS" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <FaGithub />, name: "GitHub" },
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
                  src="/Images/s-webdevelpment2.png"
                  alt="FAQ"
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
                <h2 className="text-3xl font-bold text-[#008300] mb-8">FAQs</h2>
              </Reveal>

              {[
                {
                  q: "How long does development take?",
                  a: "7–30 days depending on project scope and requirements.",
                },
                {
                  q: "Do you provide SEO?",
                  a: "Yes, all projects are SEO-friendly by default.",
                },
                {
                  q: "Do you offer maintenance?",
                  a: "Yes, we provide ongoing maintenance and support plans.",
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

        {/* ================= SEO INTRO (VISIBLE) ================= */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
              Custom Web Development Services{" "}
              <span className="text-[#008300]">by Novarsis Technology</span>
            </h2>

            <p className="mb-4">
              Novarsis Technology provides professional web development services
              designed to help businesses create fast, secure, and scalable
              digital platforms. Our expert developers build modern websites
              using advanced technologies that deliver high performance,
              responsive design, and seamless user experiences across all
              devices.
            </p>

            <p className="mb-4">
              From corporate websites and custom web applications to eCommerce
              platforms and dynamic portals, we focus on building solutions that
              support long-term business growth. Our development process
              combines strategic planning, modern UI/UX design, and powerful
              backend architecture to ensure stability and performance.
            </p>

            <p>
              With a strong focus on SEO-friendly structure, mobile
              responsiveness, and optimized performance, Novarsis Technology
              helps companies build digital platforms that attract visitors,
              improve engagement, and convert traffic into real business
              results.
            </p>
          </div>
        </section>
      </div>{" "}
    </>
  );
};

/* ================= COMPONENTS ================= */

const SkillSection = ({ title, desc, skills, bg }) => (
  <section className={`relative py-28 px-6 ${bg} overflow-hidden`}>
    {/* SQUARE BACKGROUND PATTERN */}
    <div
      className="
        absolute inset-0
        bg-[linear-gradient(to_right,#0083001a_1px,transparent_1px),
            linear-gradient(to_bottom,#0083001a_1px,transparent_1px)]
        bg-[size:48px_48px]
        pointer-events-none
      "
    ></div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* HEADING */}
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#008300] mb-6 text-center">
          {title}
        </h2>
      </Reveal>

      {/* DESCRIPTION */}
      <Reveal>
        <p className="max-w-4xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-16">
          {desc}
        </p>
      </Reveal>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <Reveal key={i}>
            <div
              className="
                group bg-white
                p-8 text-center
                border border-gray-200
                shadow-sm hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                relative
              "
            >
              {/* TOP SQUARE ACCENT */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008300]"></div>

              {/* ICON (SQUARE) */}
              <div
                className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                              bg-[#008300]/10 text-[#008300] text-3xl"
              >
                {skill.icon}
              </div>

              {/* NAME */}
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
      <div className="text-4xl mb-4 mx-auto">{icon}</div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm">{label}</p>
    </div>
  </Reveal>
);

export default WebDeveloper;
