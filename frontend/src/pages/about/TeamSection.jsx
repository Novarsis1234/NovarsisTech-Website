import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../../slice/teamSlice";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const TeamPage = () => {
  const dispatch = useDispatch();
  const { team = [], loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>
          Our Expert Team - Meet Novarsis Technology Professionals & IT Specialists
        </title>

        <meta
          name="description"
          content="Meet the expert team behind Novarsis Technology. Our skilled professionals specialize in web development, app development, UI/UX design, SEO, digital marketing, and scalable digital solutions. Discover our talented IT team dedicated to your success."
        />

        <meta
          name="keywords"
          content="Expert team, Novarsis Technology professionals, IT developers, software development team, web development experts, UI/UX designers, digital innovation team, app developers"
        />

        {/* ✅ Dynamic Canonical */}
        <link rel="canonical" href="https://novarsistech.com/our-team" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="author" content="Novarsis Technology" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Meet Our Expert Team - Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Passionate professionals building innovative and scalable IT solutions for businesses worldwide."
        />
        <meta property="og:url" content="https://novarsistech.com/our-team" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Novarsis Technology Expert Team" />
        <meta
          name="twitter:description"
          content="Discover the talented team driving innovation and digital growth at Novarsis Technology."
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
                "name": "About",
                "item": "https://novarsistech.com/about"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Our Team",
                "item": "https://novarsistech.com/our-team"
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
            "description": "Leading IT services company offering web development, app development, SEO optimization, digital marketing, UI/UX design, and graphic design solutions with an expert professional team.",
            "sameAs": [
              "https://facebook.com/novarsistech",
              "https://twitter.com/novarsistech",
              "https://linkedin.com/company/novarsistech"
            ]
          })}
        </script>

        {/* ✅ CollectionPage Schema for Team */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Expert Team",
            "url": "https://novarsistech.com/our-team",
            "description": "Meet the talented professionals at Novarsis Technology dedicated to building innovative digital solutions.",
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
        <Link to="/">Home</Link> / <Link to="/about">About</Link> / Our Team
      </nav>

      <article className="bg-white">
        <section className="relative py-24 bg-white overflow-hidden">
          {/* ⭐ Hidden SEO Heading */}
          <h2 className="sr-only">
            Novarsis Technology Expert Team – Professional IT Developers and Specialists
          </h2>

          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>
          <div className="absolute top-40 right-0 w-72 h-72 bg-[#008300]/10 rounded-full" aria-hidden="true"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            {/* Heading */}
            <h1 itemProp="headline" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
              Meet Our <span className="text-[#008300]">Expert Team</span>
            </h1>

            <p itemProp="description" className="text-gray-600 max-w-2xl mx-auto mb-14 text-base sm:text-lg">
              Passionate professionals dedicated to building innovative, reliable, and scalable digital solutions for growing businesses. Our talented team specializes in web development, app development, UI/UX design, SEO optimization, and digital marketing.
            </p>

            {/* ✅ Additional SEO H2 Headings */}
            <h2 className="sr-only">Why Our Team Delivers Excellence</h2>
            <h2 className="sr-only">Novarsis Technology Team Expertise and Experience</h2>

          {loading && <p className="text-gray-600">Loading team members...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" itemScope itemType="https://schema.org/ItemList">
            {team.length > 0
              ? team.map((member, index) => (
                  <motion.div
                    key={member._id || member.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Person"
                    className="group relative bg-white rounded-3xl shadow-lg
            hover:shadow-2xl transition-all duration-500
            hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-72 bg-gray-50 overflow-hidden">
                      {/* Image Accent */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" aria-hidden="true"></div>

                      <figure>
                        <img
                          src={member.image || "/Images/default-user.png"}
                          alt={`${member.name} - ${member.title} at Novarsis Technology`}
                          className="w-full h-full object-contain object-top
                transform transition-transform duration-700
                group-hover:scale-110"
                          itemProp="image"
                        />
                      </figure>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 itemProp="name" className="text-xl md:text-2xl font-semibold text-black mb-1">
                        {member.name}
                      </h3>
                      <p itemProp="jobTitle" className="text-[#008300] font-medium">
                        {member.title}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2
              w-0 h-1 bg-[#008300] transition-all duration-500
              group-hover:w-24 rounded-full"
                      aria-hidden="true"
                    ></div>
                  </motion.div>
                ))
              : !loading && (
                  <p className="text-gray-500 col-span-full">
                    No team members found.
                  </p>
                )}
          </div>

          {/* ✅ CTA Section with Internal Links */}
          <div className="mt-20 text-center">
            <h2 className="sr-only">Join Our Growing Team</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-8">
              Interested in working with our talented team? Explore career opportunities with Novarsis Technology or contact us for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/career" className="bg-[#008300] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#009e3c] transition">
                Join Our Team
              </Link>
              <Link to="/contact" className="border-2 border-[#008300] text-[#008300] px-8 py-3 rounded-lg font-semibold hover:bg-[#008300] hover:text-white transition">
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

export default TeamPage;
