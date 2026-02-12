import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

/* ================= STATIC GALLERY DATA ================= */
const galleryImages = [
  { id: 2, image: "/Images/gallery2.jpeg", name: "Team Collaboration" },
  { id: 3, image: "/Images/gallery3.jpeg", name: "Development Process" },
  { id: 4, image: "/Images/gallery4.jpeg", name: "Client Meeting" },
  { id: 5, image: "/Images/gallery5.jpeg", name: "UI/UX Design" },
  { id: 6, image: "/Images/gallery7.jpeg", name: "Project Discussion" },
  { id: 7, image: "/Images/gallery8.jpeg", name: "Software Development" },
  { id: 8, image: "/Images/gallery10.jpeg", name: "Creative Team" },
  { id: 9, image: "/Images/gallery11.jpeg", name: "Testing & QA" },
  { id: 10, image: "/Images/gallery12.jpeg", name: "Quality Assurance" },
];

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);

  const handleToggleView = () => {
    if (visibleImages >= galleryImages.length) {
      setVisibleImages(6);
    } else {
      setVisibleImages((prev) => Math.min(prev + 3, galleryImages.length));
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Life at Novarsis Technology</title>

        <meta
          name="description"
          content="Explore the Novarsis Technology gallery showcasing team collaboration, development processes, creative culture, and moments that define our innovative IT environment."
        />

        <meta
          name="keywords"
          content="Novarsis Technology gallery, IT company workspace, software development team culture, office gallery, digital agency environment"
        />

        {/* ✅ Updated Canonical */}
        <link rel="canonical" href="https://novarsistech.com/gallery" />

        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Novarsis Technology Gallery" />
        <meta
          property="og:description"
          content="Discover moments from our workspace, creative team, and digital innovation journey."
        />
        <meta property="og:url" content="https://novarsistech.com/gallery" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Life at Novarsis Technology" />
        <meta
          name="twitter:description"
          content="A visual journey into our culture, teamwork, and software development environment."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ✅🔥 IMAGE GALLERY SCHEMA (IMAGE SEO BOOST) */}
        <script type="application/ld+json">
          {`
      {
        "@context":"https://schema.org",
        "@type":"CollectionPage",
        "name":"Novarsis Technology Gallery",
        "url":"https://novarsistech.com/gallery",
        "description":"Gallery showcasing the team, workspace, and culture at Novarsis Technology."
      }
    `}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
    <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
    poster="/Images/bannerImage.png"
  />

  <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

  <div className="relative z-10 text-center text-white px-4 sm:px-6">
    <Reveal>
      {/* ✅ Breadcrumb */}
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl mb-2 md:mb-3">
        <Link to="/" className="hover:text-[#008300] transition">
          Home
        </Link>
        <span className="text-[#008300] mx-1">/</span> Gallery
      </p>
    </Reveal>

    <Reveal>
      {/* ✅ SEO H1 */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        Our Gallery
      </h1>
    </Reveal>

    {/* ✅ SEO Optimized Paragraph */}
    <Reveal>
      <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
        Explore our creative gallery showcasing web development projects,
        mobile app designs, UI/UX concepts, branding visuals, and digital
        solutions delivered by Novarsis Technology for modern businesses.
      </p>
    </Reveal>
  </div>
</section>


      <section className="sr-only">
        {" "}
        <p>
          The Novarsis Technology gallery showcases real moments from our
          workspace, team collaboration, and creative environment. These visuals
          highlight the culture, innovation, and dedication that drive our
          projects forward. Our team believes that a strong work culture leads
          to better ideas, better solutions, and better results for our clients.
          From brainstorming sessions to successful project launches, every
          image reflects our commitment to quality and teamwork. The gallery
          represents the human side of technology, where creativity meets
          technical expertise to build modern digital solutions. By sharing
          these experiences, we give visitors a closer look at how our company
          operates and the passion behind every service we provide.
        </p>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative bg-white py-24 px-4 overflow-hidden">
        {/* ⭐ Hidden SEO Heading */}
        <h2 className="sr-only">
          Novarsis Technology Office Culture Gallery and Team Moments
        </h2>

        {/* ===== Decorative Green Circles ===== */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute top-40 right-[-150px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h4 className="text-[#008300] font-semibold uppercase tracking-widest text-sm">
                Life at Novarsis
              </h4>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3">
                Moments That Define{" "}
                <span className="text-[#008300]">Our Culture</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                A glimpse into our workspace, team collaboration, creativity,
                and the passion that drives Novarsis Technology every day.
              </p>
            </Reveal>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.slice(0, visibleImages).map((item) => (
              <Reveal key={item.id}>
                <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.name} – Novarsis Technology Team Culture`}
                      loading="lazy"
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View More / Less */}
          {galleryImages.length > 6 && (
            <div className="text-center mt-16">
              <Reveal>
                <button
                  onClick={handleToggleView}
                  className="px-10 py-3 bg-[#008300] text-white text-lg font-semibold rounded-full
            hover:scale-105 transition duration-300 shadow-lg"
                >
                  {visibleImages >= galleryImages.length
                    ? "View Less"
                    : "View More"}
                </button>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <AutoInternalLinks />
    </>
  );
};

export default Gallery;
