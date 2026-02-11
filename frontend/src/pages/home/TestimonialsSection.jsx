



import React from "react";
import { FaStar } from "react-icons/fa";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mansi Patel",
      review:
        "Very good IT company in Dubai. Helpful team and great service. I personally recommend them.",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 4,
    },
    {
      name: "Simran Singh",
      review:
        "Best platform to grow your business through Novarsis Tech. Best services & experienced team.",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
    },
    {
      name: "Khushi Tiwari",
      review:
        "Outstanding service from Novarsis Tech and one of the best in the company. 👌",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
    },
    {
      name: "Monika Singh",
      review:
        "Amazing development team, always on time and very professional. Highly recommended!",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
    },
    {
      name: "Anya Agrawal",
      review:
        "Working with Novarsis was a great experience. The team is highly skilled and dedicated.",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 4,
    },
    {
      name: "Ravi Patel",
      review:
        "Their innovative ideas and attention to detail helped us boost our business growth.",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      rating: 5,
    },
  ];

  return (
    <>
   <Helmet>
  <title>Novarsis Technology | Leading IT Services & Software Development Company</title>

  <meta
    name="description"
    content="Novarsis Technology delivers advanced IT services including web development, app development, UI/UX design, SEO optimization, and digital marketing solutions to help businesses grow faster."
  />

  <meta
    name="keywords"
    content="Novarsis Technology, IT company India, software development, web development services, digital marketing, SEO optimization, UI UX design"
  />

  <link rel="canonical" href="https://novarsis.com/" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Novarsis Technology | Innovative IT Solutions" />
  <meta
    property="og:description"
    content="Scalable IT services, modern development, and powerful digital solutions designed for business growth."
  />
  <meta property="og:url" content="https://novarsis.com/" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology - IT Services Company" />
  <meta
    name="twitter:description"
    content="Leading IT solutions company offering development, branding, SEO, and digital growth services."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>
   
    <section className="relative py-28 px-5 sm:px-8 overflow-hidden">
  
  {/* ⭐ Hidden SEO Heading */}
  <h2 className="sr-only">
    Client Testimonials and Reviews for Novarsis Technology IT Services
  </h2>

  {/* FALLBACK IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/Images/parallex10.jpg')" }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto">
    
    {/* HEADING */}
    <div className="text-center max-w-3xl mx-auto">
      <Reveal>
        <h4 className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
          Client Testimonials
        </h4>
      </Reveal>

      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 text-white leading-tight">
          Trusted By Clients <br className="hidden sm:block" />
          <span className="text-[#008300]">Across Industries</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-300 mt-5 text-base sm:text-lg leading-relaxed">
          Real experiences from businesses who partnered with us to build
          powerful digital solutions, scalable systems, and long-term growth.
          Our focus on quality, transparency, and innovation makes us a
          trusted IT partner.
        </p>
      </Reveal>
    </div>

    {/* CARDS – PUSHED DOWN */}
    <div className="mt-16 md:mt-24 overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 pb-6 justify-start md:justify-center">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-none w-[280px] sm:w-[320px] 
            bg-white/95 backdrop-blur-xl 
            rounded-2xl p-6 text-black 
            shadow-2xl transition-all duration-500 
            hover:-translate-y-2 hover:shadow-[#008300]/30"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-5">
              <Reveal>
                <img
                  src={t.image}
                  alt={`${t.name} client testimonial for Novarsis Technology`}
                  className="w-20 h-20 rounded-full 
                  border-4 border-[#008300]/70 
                  shadow-lg bg-white p-1"
                />
              </Reveal>
            </div>

            {/* Review */}
            <Reveal>
              <p className="text-center italic text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                “{t.review}”
              </p>
            </Reveal>

            {/* Name */}
            <Reveal>
              <h3 className="text-center font-semibold text-[#008300] tracking-wide">
                {t.name}
              </h3>
            </Reveal>

            {/* Rating */}
            <div className="flex justify-center mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${
                    i < t.rating ? "text-[#FFD700]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* SCROLL HINT */}
    <Reveal>
      <p className="text-center text-gray-400 mt-6 text-sm">
        👉 Swipe or scroll to explore more client stories
      </p>
    </Reveal>
  </div>
</section>

     </>
  );
};

export default TestimonialsSection;
