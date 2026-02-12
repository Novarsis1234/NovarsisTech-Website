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
           Novarsis Technology | Leading IT Services & Software Development
          Company
        </title>

        <meta
          name="description"
          content="Read authentic client testimonials and reviews for Novarsis Technology. Discover why businesses trust us for web development, SEO, digital marketing, and IT solutions."
        />

        <meta
          name="keywords"
          content="Client testimonials, Novarsis Technology reviews, IT services reviews, web development testimonials"
        />

        <link rel="canonical" href="https://novarsistech.com/testimonials" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://novarsistech.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Testimonials",
                item: "https://novarsistech.com/testimonials",
              },
            ],
          })}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="sr-only">
        <Link to="/">Home</Link> / Testimonials
      </nav>

      <article className="bg-white">
        <section className="relative py-28 px-5 sm:px-8 overflow-hidden">
          <h2 className="sr-only">
            Client Testimonials and Reviews for Novarsis Technology IT Services
          </h2>

          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/Images/parallex10.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <Reveal>
                <h4 className="text-[#008300] font-extrabold uppercase tracking-widest text-sm">
                  What Our Clients Say
                </h4>
              </Reveal>

              <Reveal>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 text-white leading-tight">
                  Client Testimonials & Success Stories
                </h1>
              </Reveal>

              <Reveal>
                <p className="text-gray-300 mt-5 text-base sm:text-lg leading-relaxed">
                  Real experiences from businesses across industries who partnered
                  with Novarsis Technology to build powerful digital solutions
                  and achieve long-term growth.
                </p>
              </Reveal>
            </div>

            {/* ⭐ RESPONSIVE CARDS SECTION */}
            <div className="mt-16 md:mt-24">
              <div
                className="
                  grid gap-6
                  grid-cols-1
                  sm:grid-cols-2
                  lg:flex lg:overflow-x-auto lg:scrollbar-hide lg:pb-6
                "
              >
                {testimonials.map((t, index) => (
                  <div
                    key={index}
                    itemScope
                    itemType="https://schema.org/Review"
                    className="
                      w-full
                      lg:flex-none lg:w-[320px]
                      bg-white/95 backdrop-blur-xl 
                      rounded-2xl p-6 text-black 
                      shadow-2xl transition-all duration-500 
                      hover:-translate-y-2 hover:shadow-[#008300]/30
                    "
                  >
                    {/* Avatar */}
                    <div className="flex justify-center mb-5">
                      <Reveal>
                        <img
                          src={t.image}
                          alt={`${t.name} - Client testimonial`}
                          className="w-20 h-20 rounded-full border-4 border-[#008300]/70 shadow-lg bg-white p-1"
                          itemProp="image"
                        />
                      </Reveal>
                    </div>

                    {/* Review */}
                    <Reveal>
                      <p
                        itemProp="reviewBody"
                        className="text-center italic text-gray-700 leading-relaxed mb-4 text-sm sm:text-base"
                      >
                        “{t.review}”
                      </p>
                    </Reveal>

                    {/* Name */}
                    <Reveal>
                      <h3
                        itemProp="author"
                        className="text-center font-semibold text-[#008300]"
                      >
                        {t.name}
                      </h3>
                    </Reveal>

                    {/* Rating */}
                    <div
                      className="flex justify-center mt-3"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                    >
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < t.rating ? "text-[#FFD700]" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span itemProp="ratingValue" className="sr-only">
                        {t.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll hint only desktop */}
            <Reveal>
              <p className="hidden lg:block text-center text-gray-400 mt-6 text-sm">
                👉 Scroll to explore more client stories
              </p>
            </Reveal>

            {/* CTA */}
            <div className="mt-20 text-center">
              <p className="text-gray-300 text-base sm:text-lg mb-6">
                Interested in transforming your business like these successful
                clients?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/project"
                  className="bg-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#009e3c] transition"
                >
                  Explore Our Projects
                </Link>

                <Link
                  to="/contact"
                  className="border-2 border-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008300]/20 transition"
                >
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
