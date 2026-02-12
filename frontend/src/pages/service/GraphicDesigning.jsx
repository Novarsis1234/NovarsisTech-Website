import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import {
  FaPaintBrush,
  FaPalette,
  FaImage,
  FaPenNib,
  FaVectorSquare,
  FaLayerGroup,
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaStar,
  FaChevronDown,
} from "react-icons/fa";

const GraphicDesigning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>
          Graphic Designing Services | Logo Design, Branding & Creative Visuals - Novarsis Technology
        </title>

        <meta
          name="description"
          content="Professional Graphic Designing Services by Novarsis Technology. Expert logo design, branding, social media graphics, marketing visuals, and creative design solutions for your brand."
        />

        <meta
          name="keywords"
          content="Graphic Designing Services, Logo Design, Branding Design, Creative Design, Social Media Graphics, Marketing Design, UI Graphics, Digital Design Agency"
        />

        {/* ✅ Dynamic Canonical */}
        <link
          rel="canonical"
          href={`https://novarsistech.com/services/graphic-designing`}
        />

        {/* ✅ RankMath Friendly Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Novarsis Technology" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Graphic Designing Services | Logo Design, Branding & Creative Visuals - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Professional graphic design services including logo design, branding, social media graphics, and creative marketing visuals to enhance your brand identity."
        />
        <meta
          property="og:url"
          content="https://novarsistech.com/services/graphic-designing"
        />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />
        <meta property="og:site_name" content="Novarsis Technology" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Graphic Designing Services | Logo Design & Branding"
        />
        <meta
          name="twitter:description"
          content="Creative graphic design services including logo design, branding, social media graphics, and professional visual design solutions."
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
                "name": "Graphic Designing",
                "item": "https://novarsistech.com/services/graphic-designing"
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
            "description": "Professional Graphic Designing Services including logo design, branding, creative graphics, and visual design solutions.",
            "sameAs": [
              "https://facebook.com/novarsistech",
              "https://twitter.com/novarsistech",
              "https://linkedin.com/company/novarsistech"
            ]
          })}
        </script>

        {/* ✅ ProfessionalService Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Graphic Designing Services",
            "url": "https://novarsistech.com/services/graphic-designing",
            "description": "Professional graphic designing services including logo design, branding, social media graphics, marketing visuals, and creative design solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Novarsis Technology",
              "url": "https://novarsistech.com"
            },
            "serviceType": ["Logo Design", "Brand Identity", "Social Media Graphics", "Marketing Design", "Print Design", "Digital Graphics"],
            "knowsAbout": ["Logo Design", "Branding", "Visual Identity", "Social Media Design", "Marketing Graphics", "Print Design", "Digital Design", "Color Theory"],
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>
      <article className="bg-white">
        {/* ================= HERO ================= */}
        <section itemScope itemType="https://schema.org/WebPage" className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            {/* ✅ Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="text-gray-300 text-sm md:text-base mb-4">
              <a href="/" className="hover:text-[#008300] transition-colors">Home</a>
              <span className="mx-2 text-[#008300]">/</span>
             
              <span className="text-[#008300]">Graphic Designing</span>
            </nav>

            <Reveal>
              <h1 itemProp="headline" className="text-4xl md:text-6xl font-extrabold">
                Graphic Designing Services
              </h1>
            </Reveal>
            <Reveal>
              <p itemProp="description" className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
                Professional graphic design services with creative, impactful, and brand-focused visual solutions that elevate your brand identity and engage audiences.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* LEFT */}
            <div>
              <Reveal>
                <h2 itemProp="name" className="text-4xl md:text-5xl font-bold text-[#008300] mb-6">
                  Professional Graphic Design Solutions
                </h2>
              </Reveal>

              <Reveal>
                <ul className="space-y-4 text-gray-700 text-lg">
                  {[
                    "Creative & brand-driven designs",
                    "Modern visuals with strong impact",
                    "Marketing & social media creatives",
                    "Print & digital design solutions",
                    "Consistent brand identity",
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
                    src="/Images/s-GD2.png"
                    alt="Professional Graphic Design Solutions and Creative Services"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ================= DESCRIPTION ================= */}
        <section className="relative py-16 px-6 bg-[#fffaf2] overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#008300]/10 rounded-full hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Reveal>
              <p className="text-gray-700 text-lg leading-relaxed text-justify mb-12">
                Our graphic designing services focus on creating visually
                appealing, meaningful, and brand-aligned designs that
                communicate your message effectively. From logos and branding to
                marketing creatives and social media graphics, we ensure every
                design element enhances your brand identity, engages your
                audience, and supports your business goals.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
                {[
                  "Logo & brand identity design",
                  "Social media creatives & ads",
                  "Brochures, banners & posters",
                  "Website & app graphics",
                  "Print & digital media design",
                  "High-quality & scalable assets",
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
            <Stat icon={<FaUsers />} value="40+" label="Happy Clients" />
            <Stat
              icon={<FaProjectDiagram />}
              value="60+"
              label="Design Projects"
            />
            <Stat icon={<FaClock />} value="8+" label="Years Experience" />
            <Stat icon={<FaStar />} value="4.9/5" label="Client Rating" />
          </div>
        </section>

        {/* ================= DESIGN SERVICES ================= */}
        <SkillSection
          title="Graphic Design Services"
          desc="Professional graphic design services to strengthen your brand."
          bg="bg-white"
          skills={[
            { icon: <FaPalette />, name: "Brand Identity" },
            { icon: <FaPaintBrush />, name: "Creative Design" },
            { icon: <FaImage />, name: "Social Media Graphics" },
            { icon: <FaPenNib />, name: "Logo Design" },
            { icon: <FaVectorSquare />, name: "Vector Illustrations" },
            { icon: <FaLayerGroup />, name: "Print & Digital Design" },
          ]}
        />

        {/* ================= FAQ ================= */}
        <section className="relative py-24 px-6 bg-[#fffaf2] overflow-hidden">
          {/* DECORATIVE LAYERED SQUARES (RESPONSIVE SAFE) */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#008300]/10 hidden md:block" aria-hidden="true"></div>
          <div className="absolute -top-16 -left-16 w-72 h-72 border-2 border-[#008300]/20 hidden md:block" aria-hidden="true"></div>

          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#008300]/10 hidden md:block" aria-hidden="true"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-[#008300]/20 hidden md:block" aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            {/* IMAGE */}
            <Reveal>
              <figure className="relative max-w-md mx-auto md:max-w-none">
                {/* BACK LAYER */}
                <div className="absolute inset-0 bg-[#008300]/10 rounded-[36px] rotate-3" aria-hidden="true"></div>

                <img
                  src="/Images/s-GD1.png"
                  alt="Graphic Design FAQ Section - Common Questions About Design Services"
                  className="
            relative z-10
            w-full
            rounded-[36px]
            shadow-2xl
          "
                />
              </figure>
            </Reveal>

            {/* FAQ CONTENT */}
            <div>
              <Reveal>
                <h2 itemProp="name" className="text-3xl font-bold text-[#008300] mb-8">
                  Frequently Asked Questions
                </h2>
              </Reveal>

              {[
                {
                  q: "Do you design logos and branding?",
                  a: "Yes, complete brand identity solutions.",
                },
                {
                  q: "Do you provide print-ready files?",
                  a: "Yes, high-quality print & digital formats.",
                },
                {
                  q: "Can you design social media creatives?",
                  a: "Yes, marketing & social media designs included.",
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

        {/* ================= GRAPHIC DESIGN SEO INTRO ================= */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 itemProp="name" className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
              Why Choose{" "}
              <span className="text-[#008300]">Novarsis Technology</span> for Graphic Designing
            </h2>

            <p className="mb-4">
              Novarsis Technology offers professional graphic designing services
              that help brands communicate their message through visually
              compelling designs. Our creative team develops logos, marketing
              creatives, social media graphics, branding materials, and digital
              assets that reflect your company’s identity and values.
            </p>

            <p className="mb-4">
              We combine creativity with strategic thinking to produce designs
              that not only look attractive but also support business goals.
              From concept development and color selection to typography and
              layout design, every detail is carefully planned to create
              impactful visuals across digital and print platforms.
            </p>

            <p>
              By blending innovation with modern design trends, Novarsis
              Technology helps businesses build strong visual identities that
              attract attention, improve brand recognition, and leave lasting
              impressions on their audience.
            </p>
          </div>
        </section>
      </article>{" "}
    </>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const SkillSection = ({ title, desc, skills, bg }) => (
  <section className={`relative py-28 px-6 ${bg} overflow-hidden`}>
    {/* SQUARE BACKGROUND */}
    <div
      className="
        absolute inset-0
        bg-[linear-gradient(to_right,#00830012_1px,transparent_1px),
            linear-gradient(to_bottom,#00830012_1px,transparent_1px)]
        bg-[size:64px_64px]
        pointer-events-none
      "
      aria-hidden="true"
    ></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <Reveal>
        <h2 itemProp="name" className="text-4xl md:text-5xl font-extrabold text-[#008300] mb-6 text-center">
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
              itemProp="about"
              className="
                relative bg-white
                p-8 text-center
                border border-[#008300]/20
                shadow-md hover:shadow-xl
                hover:-translate-y-2 transition-all duration-300
              "
            >
              {/* TOP STRAIGHT ACCENT */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#008300]" aria-hidden="true"></div>

              {/* ICON (SQUARE – NO CIRCLE) */}
              <div
                className="
                  w-16 h-16 mx-auto mb-5
                  flex items-center justify-center
                  bg-[#008300]/10
                  text-[#008300] text-3xl
                "
                aria-hidden="true"
              >
                {skill.icon}
              </div>

              <h4 itemProp="name" className="font-semibold text-gray-800 text-lg">
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
    <div itemProp="name" className="p-8 rounded-2xl bg-white/10 hover:bg-white/20 transition">
      <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm">{label}</p>
    </div>
  </Reveal>
);

export default GraphicDesigning;
