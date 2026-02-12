import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import {
  FaAndroid,
  FaApple,
  FaReact,
  FaJava,
  FaSwift,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGithub,
  FaChevronDown,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const AppDeveloper = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Mobile App Development Services | Android, iOS, Flutter & React Native - Novarsis Technology
        </title>

        <meta
          name="description"
          content="Professional mobile app development services by Novarsis Technology. Expert developers build high-performance Android, iOS, Flutter, and React Native applications with scalable backend, cloud integration, and native-level performance."
        />

        <meta
          name="keywords"
          content="mobile app development, app development services, Android app developers, iOS app development, Flutter development, React Native, app development company, scalable mobile apps, Novarsis Technology"
        />

        {/* ✅ Dynamic Canonical */}
        <link rel="canonical" href="https://novarsistech.com/appdevelopment" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mobile App Development Services - Professional Android, iOS & Flutter Apps"
        />
        <meta
          property="og:description"
          content="Build scalable, high-performance mobile apps with Novarsis Technology. Android, iOS, Flutter, React Native with secure backend and cloud integration."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/appdevelopment"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />
        <meta property="og:site_name" content="Novarsis Technology" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App Development Services - Novarsis Technology"
        />
        <meta
          name="twitter:description"
          content="Expert mobile app developers for Android, iOS, Flutter & React Native. Scalable apps with modern technologies."
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
                "name": "Services",
                "item": "https://novarsistech.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "App Development",
                "item": "https://novarsistech.com/appdevelopment"
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
            "logo": "https://novarsistech.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/novarsis",
              "https://twitter.com/novarsis",
              "https://www.linkedin.com/company/novarsis"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "url": "https://novarsistech.com/contact"
            }
          })}
        </script>

        {/* ✅ Service + ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Mobile App Development Services",
            "description": "Professional mobile app development services including Android, iOS, Flutter, and React Native applications with scalable backend, cloud integration, and modern technologies.",
            "url": "https://novarsistech.com/appdevelopment",
            "provider": {
              "@type": "Organization",
              "name": "Novarsis Technology",
              "url": "https://novarsistech.com"
            },
            "areaServed": "Worldwide",
            "serviceType": ["Android App Development", "iOS App Development", "Flutter Development", "React Native Development", "Cross-platform Mobile Apps"],
            "knowsAbout": ["Android", "iOS", "Flutter", "React Native", "Mobile App Architecture", "Cloud Integration", "API Development"]
          })}
        </script>
      </Helmet>
      <div className="bg-white">
        {/* ================= HERO ================= */}
       <section
  className="relative h-[50vh] flex items-center justify-center overflow-hidden"
  itemScope
  itemType="https://schema.org/WebPage"
>
  <meta itemProp="name" content="Mobile App Development Services" />

  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
    poster="/Images/bannerImage.png"
    alt="Mobile app development services showcase"
  />

  <div
    className="absolute inset-0 bg-[#0a0f1a]/80"
    aria-hidden="true"
  ></div>

  <div className="relative z-10 text-center text-white px-4 sm:px-6">
    <Reveal>
      <nav
        aria-label="Breadcrumb"
        className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 md:mb-4"
      >
        <a href="/" className="hover:text-[#008300] transition-colors">
          Home
        </a>
        <span className="mx-2 text-[#008300]">/</span>
        <span className="text-[#008300]">App Development</span>
      </nav>
    </Reveal>

    <Reveal>
      {/* ✅ Mobile small → Tablet medium → Desktop big */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
        Mobile App Development Services
      </h1>
    </Reveal>

    <Reveal>
      <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
        Professional Android, iOS, Flutter & React Native development.
        High-performance mobile applications built for scalability,
        security, and growth.
      </p>
    </Reveal>
  </div>
</section>

        {/* ================= INTRO ================= */}
        <article className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT */}
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-[#008300] mb-6">
                  Professional Mobile App Development
                </h2>
              </Reveal>

              <Reveal>
                <ul className="space-y-4 text-gray-700 text-lg">
                  {[
                    "Android & iOS native app development",
                    "Cross-platform apps using modern frameworks",
                    "Secure backend & real-time database integration",
                    "UI/UX focused on performance & usability",
                    "App Store & Play Store deployment support",
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
              <figure className="flex justify-center md:justify-end">
  <div
    className="
      w-72 h-72
      md:w-96 md:h-96
      aspect-square
      rounded-full
      overflow-hidden
      shadow-2xl
      border-8 border-white
      shrink-0
    "
  >
                  <img
                    src="/Images/s-appdevelopment3.png"
                    alt="Mobile app development team working on Android, iOS and Flutter applications"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </article>

        {/* ================= DESCRIPTION ================= */}
        <article className="relative py-16 px-6 bg-[#fffaf2] overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-12">
                Our app development services focus on building fast, scalable,
                and user-centric mobile applications tailored to your business
                needs. From idea validation and UI/UX design to development,
                testing, and deployment, we manage the complete app lifecycle.
                We create high-performance native and cross-platform apps with
                secure APIs, cloud integration, and real-time features that
                ensure reliability, smooth performance, and long-term
                scalability.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
                {[
                  "Native & cross-platform mobile apps",
                  "High-performance & scalable architecture",
                  "Secure APIs & cloud integration",
                  "App Store & Play Store publishing",
                  "Real-time database & push notifications",
                  "Maintenance & long-term support",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#008300] text-xl font-bold">✔</span>
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </article>

        {/* ================= STATS ================= */}
        <section className="py-20 px-6 bg-[#008300] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Stat icon={<FaUsers />} value="50+" label="Happy Clients" />
            <Stat
              icon={<FaProjectDiagram />}
              value="60+"
              label="Apps Delivered"
            />
            <Stat icon={<FaClock />} value="8+" label="Years Experience" />
            <Stat icon={<FaStar />} value="4.8/5" label="App Rating" />
          </div>
        </section>

        {/* ================= APP TECHNOLOGIES ================= */}
        <SkillSection
          title="App Technologies"
          desc="Modern mobile app technologies used to build fast, scalable, and secure applications."
          bg="bg-white"
          skills={[
            { icon: <FaAndroid />, name: "Android" },
            { icon: <FaApple />, name: "iOS" },
            { icon: <FaReact />, name: "React Native" },
            { icon: <SiFlutter />, name: "Flutter" },
            { icon: <SiKotlin />, name: "Kotlin" },
            { icon: <FaSwift />, name: "Swift" },
            { icon: <FaJava />, name: "Java" },
            { icon: <FaMobileAlt />, name: "Hybrid Apps" },
          ]}
        />

        {/* ================= BACKEND ================= */}
        <SkillSection
          title="Backend & Databases"
          desc="Robust backend systems and databases for mobile applications."
          bg="bg-[#f6fff6]"
          skills={[
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiFirebase />, name: "Firebase" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <FaDatabase />, name: "SQLite" },
          ]}
        />

        {/* ================= CLOUD ================= */}
        <SkillSection
          title="Cloud & DevOps"
          desc="Cloud infrastructure and DevOps tools for scalability and performance."
          bg="bg-white"
          skills={[
            { icon: <FaAws />, name: "AWS" },
            { icon: <FaDocker />, name: "Docker" },
            { icon: <FaGithub />, name: "GitHub" },
          ]}
        />

        {/* ================= FAQ ================= */}
        <section className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">
          {/* DECORATIVE LAYERED SQUARES (Responsive Safe) */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 hidden md:block" aria-hidden="true"></div>
          <div className="absolute -top-16 -left-16 w-72 h-72 border-2 border-[#008300]/20 hidden md:block" aria-hidden="true"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 hidden md:block" aria-hidden="true"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-[#008300]/20 hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* IMAGE */}
            <Reveal>
              <figure className="relative max-w-md mx-auto md:max-w-none">
                <div
                  className="absolute inset-0 bg-[#008300]/10 
                        rounded-[40px] -rotate-3"
                  aria-hidden="true"
                ></div>

                <img
                  src="/Images/s-appdevelopment2.png"
                  alt="Mobile app development FAQ - timeline, deployment, and maintenance support"
                  className="
            relative z-10
            w-full
            rounded-[40px]
            shadow-2xl
          "
                />
              </figure>
            </Reveal>

            {/* FAQ CONTENT */}
            <div>
              <Reveal>
                <h2 className="text-3xl font-bold text-[#008300] mb-8">
                  App Development FAQs
                </h2>
              </Reveal>

              {[
                {
                  q: "How long does app development take?",
                  a: "15–45 days depending on features.",
                },
                {
                  q: "Do you publish apps on Play Store & App Store?",
                  a: "Yes, complete deployment support.",
                },
                {
                  q: "Do you provide maintenance?",
                  a: "Yes, long-term support & updates.",
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

        {/* ================= MOBILE APP DEVELOPMENT DETAILS ================= */}
        <article className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">
              Expert Mobile App Development Solutions{" "}
              <span className="text-[#008300]">by Novarsis Technology</span>
            </h2>

            <p className="mb-4">
              Novarsis Technology delivers high-performance mobile app
              development services for Android, iOS, and cross-platform
              applications. Our goal is to create scalable mobile solutions that
              combine innovative design, powerful features, and smooth
              performance to enhance user engagement and business growth.
            </p>

            <p className="mb-4">
              Whether you need a startup MVP, enterprise application, or
              customer-focused mobile platform, our team builds secure and
              reliable apps tailored to your specific requirements. We follow a
              structured development process including research, UI/UX design,
              development, testing, and deployment.
            </p>

            <p>
              Using modern frameworks like React Native and Flutter, we deliver
              apps with native-level performance, cloud integrations, and
              SEO-friendly architecture. Novarsis Technology helps businesses
              launch mobile applications that improve customer experience and
              drive measurable results.
            </p>
          </div>
        </article>
      </div>
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
        bg-[linear-gradient(to_right,#00830014_1px,transparent_1px),
            linear-gradient(to_bottom,#00830014_1px,transparent_1px)]
        bg-[size:56px_56px]
        pointer-events-none
      "
      aria-hidden="true"
    ></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#008300] mb-6 text-center" itemProp="name">
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

export default AppDeveloper;
