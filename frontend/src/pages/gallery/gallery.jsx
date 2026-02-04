import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

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
      setVisibleImages((prev) =>
        Math.min(prev + 3, galleryImages.length)
      );
    }
  };

  return (
    <>
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

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="text-[#008300] mx-1">/</span> Gallery
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Our Gallery
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative bg-white py-24 px-4 overflow-hidden">

        {/* ===== Decorative Green Circles ===== */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute top-40 right-[-150px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <p className="text-[#008300] font-semibold uppercase tracking-widest text-sm">
                Life at Novarsis
              </p>
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
                      alt={item.name}
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
    </>
  );
};

export default Gallery;
