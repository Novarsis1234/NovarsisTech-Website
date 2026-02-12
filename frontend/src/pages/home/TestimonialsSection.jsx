import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <title>
          Client Testimonials & Reviews - Novarsis Technology IT Services
        </title>

        <meta
          name="description"
          content="Read authentic client testimonials and reviews for Novarsis Technology. Discover why businesses across industries trust us for web development, app development, SEO, digital marketing, and IT solutions."
        />

        <meta
          name="keywords"
          content="Client testimonials, Novarsis Technology reviews, IT services reviews, web development testimonials, software development feedback, digital marketing results, client success stories"
        />

        {/* ✅ Dynamic Canonical */}
        <link rel="canonical" href="https://novarsistech.com/testimonials" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Novarsis Technology" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Novarsis Technology | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Scalable IT services, modern development, and powerful digital solutions designed for business growth."
        />
        <meta property="og:url" content="https://novarsistech.com/" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Novarsis Technology - IT Services Company"
        />
        <meta
          name="twitter:description"
          content="Leading IT solutions company offering development, branding, SEO, and digital growth services."
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
                "name": "Testimonials",
                "item": "https://novarsistech.com/testimonials"
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
            "description": "Leading IT services company offering web development, app development, SEO optimization, digital marketing, UI/UX design, and graphic design solutions.",
            "sameAs": [
              "https://facebook.com/novarsistech",
              "https://twitter.com/novarsistech",
              "https://linkedin.com/company/novarsistech"
            ]
          })}
        </script>

        {/* ✅ CollectionPage Schema for Testimonials */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Client Testimonials & Reviews",
            "url": "https://novarsistech.com/testimonials",
            "description": "Authentic client testimonials and success stories from businesses who partnered with Novarsis Technology for IT solutions.",
            "provider": {
              "@type": "Organization",
              "name": "Novarsis Technology",
              "url": "https://novarsistech.com"
            }
          })}
        </script>
      </Helmet>

      {/* ✅ Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <Link to="/">Home</Link> / Testimonials
      </nav>

      <article className="bg-white">
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
                  What Our Clients Say
                </h4>
              </Reveal>

              <Reveal>
                <h1 itemProp="headline" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 text-white leading-tight">
                  Client Testimonials & Success Stories
                </h1>
              </Reveal>

              <Reveal>
                <p itemProp="description" className="text-gray-300 mt-5 text-base sm:text-lg leading-relaxed">
                  Real experiences from businesses across industries who partnered with Novarsis Technology to build powerful digital solutions, scalable systems, and achieve long-term growth through innovative web development, app development, SEO, digital marketing, and IT solutions.
                </p>
              </Reveal>

              {/* ✅ Additional SEO H2 Headings */}
              <h2 className="sr-only">Why Our Clients Love Working With Novarsis Technology</h2>
            </div>

          {/* CARDS – PUSHED DOWN */}
          <div className="mt-16 md:mt-24 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-6 justify-start md:justify-center">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Review"
                  className="flex-none w-[280px] sm:w-[320px] 
            bg-white/95 backdrop-blur-xl 
            rounded-2xl p-6 text-black 
            shadow-2xl transition-all duration-500 
            hover:-translate-y-2 hover:shadow-[#008300]/30"
                >
                  {/* Avatar */}
                  <div className="flex justify-center mb-5">
                    <Reveal>
                      <figure>
                        <img
                          src={t.image}
                          alt={`${t.name} - Client testimonial and success story at Novarsis Technology`}
                          className="w-20 h-20 rounded-full 
                  border-4 border-[#008300]/70 
                  shadow-lg bg-white p-1"
                          itemProp="image"
                        />
                      </figure>
                    </Reveal>
                  </div>

                  {/* Review */}
                  <Reveal>
                    <p itemProp="reviewBody" className="text-center italic text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                      “{t.review}”
                    </p>
                  </Reveal>

                  {/* Name */}
                  <Reveal>
                    <h3 itemProp="author" className="text-center font-semibold text-[#008300] tracking-wide">
                      {t.name}
                    </h3>
                  </Reveal>

                  {/* Rating */}
                  <div className="flex justify-center mt-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${
                          i < t.rating ? "text-[#FFD700]" : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                    <span itemProp="ratingValue" className="sr-only">{t.rating}</span>
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

          {/* ✅ CTA Section with Internal Links */}
          <div className="mt-20 text-center">
            <h2 className="sr-only">Ready to Join Our Success Stories</h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6">
              Interested in transforming your business like these successful clients?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="bg-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#009e3c] transition">
                Explore Our Projects
              </Link>
              <Link to="/contact" className="border-2 border-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008300]/20 transition">
                 Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
    </>
  );
};

export default TestimonialsSection;
