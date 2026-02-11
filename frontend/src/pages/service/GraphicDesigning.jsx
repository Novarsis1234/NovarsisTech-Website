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
    Graphic Designing Services | Creative Branding & Visual Design - Novarsis Technology
  </title>

  <meta
    name="description"
    content="Professional Graphic Designing Services by Novarsis Technology. We create logos, branding, social media creatives, marketing visuals, and modern UI graphics that elevate your brand identity."
  />

  <meta
    name="keywords"
    content="Graphic Designing Services, Logo Design, Branding Design, Creative Design Agency, Social Media Design, UI Graphics, Novarsis Technology"
  />

  <link rel="canonical" href="https://novarsis.com/graphicdesigning" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Graphic Designing Services - Novarsis Technology"
  />
  <meta
    property="og:description"
    content="Creative graphic design solutions including logo design, branding, marketing visuals, and professional digital creatives to grow your business."
  />
  <meta property="og:url" content="https://novarsis.com/graphicdesigning" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Graphic Designing Services | Novarsis Technology"
  />
  <meta
    name="twitter:description"
    content="Enhance your brand identity with professional graphic design services from Novarsis Technology."
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
              Graphic Designing Services
            </h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl mx-auto text-gray-200 text-lg">
              Creative, impactful and brand-focused graphic design solutions.
            </p>
          </Reveal>
        </div>
      </section> 

   <section className="sr-only">   <p>
Novarsis Technology offers professional graphic designing services that help
brands communicate their message through visually compelling designs. Our
creative team develops logos, marketing creatives, social media graphics,
branding materials, and digital assets that reflect your company’s identity
and values. Every design is crafted to enhance brand recognition while
maintaining a modern and professional look.

We focus on combining creativity with strategy to produce designs that not
only look attractive but also serve a clear business purpose. From concept
development and color selection to typography and layout design, every detail
is carefully planned to create impactful visuals. Our designs are optimized
for both digital and print platforms, ensuring consistency across all brand
touchpoints.

By blending innovation with market trends, Novarsis Technology helps businesses
build strong visual identities that attract attention and leave lasting
impressions on their audience.
</p></section>


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
          Graphic Designing
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
            src="/Images/s-GD2.png"
            alt="Graphic Designing"
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
        Our graphic designing services focus on creating visually appealing,
        meaningful, and brand-aligned designs that communicate your message
        effectively. From logos and branding to marketing creatives and
        social media graphics, we ensure every design element enhances
        your brand identity, engages your audience, and supports your
        business goals.
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
          <Stat icon={<FaProjectDiagram />} value="60+" label="Design Projects" />
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
          src="/Images/s-GD1.png"
          alt="Graphic Design FAQ"
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
          Graphic Designing FAQs
        </h2>
      </Reveal>

      {[
        { q: "Do you design logos and branding?", a: "Yes, complete brand identity solutions." },
        { q: "Do you provide print-ready files?", a: "Yes, high-quality print & digital formats." },
        { q: "Can you design social media creatives?", a: "Yes, marketing & social media designs included." },
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


    </div> </>
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

export default GraphicDesigning;
