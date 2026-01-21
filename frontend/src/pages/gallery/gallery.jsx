import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

/* ================= STATIC GALLERY DATA ================= */
const galleryImages = [
  { id: 1, image: "/Images/gallery1.jpeg", name: "Office Workspace" },
  { id: 2, image: "/Images/gallery2.jpeg", name: "Team Collaboration" },
  { id: 3, image: "/Images/gallery3.jpeg", name: "Development Process" },
  { id: 4, image: "/Images/gallery4.jpeg", name: "Client Meeting" },
  { id: 5, image: "/Images/gallery5.jpeg", name: "UI/UX Design" },
  { id: 6, image: "/Images/gallery7.jpeg", name: "Project Discussion" },
  { id: 7, image: "/Images/gallery8.jpeg", name: "Software Development" },
  { id: 8, image: "/Images/gallery10.jpeg", name: "Creative Team" },
  { id: 9, image: "/Images/gallery11.jpeg", name: "Testing & QA" },
  { id: 9, image: "/Images/gallery12.jpeg", name: "Testing & QA" },
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
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Images/banner.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white px-4">
    <Reveal>
      <p className="text-gray-300 text-lg md:text-xl mb-2">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <span className="text-blue-400 mx-1">/</span> Gallery
      </p>
    </Reveal>

    <Reveal>
      <h1 className="text-4xl md:text-6xl font-bold">Gallery</h1>
    </Reveal>
  </div>

  {/* Decorative circle */}
 
</section>

      {/* ================= GALLERY GRID ================= */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, visibleImages).map((item) => (
              <Reveal key={item.id}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-84 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* <p className="text-center text-gray-700 py-3 font-medium">
                    {item.name}
                  </p> */}
                </div>
              </Reveal>
            ))}
          </div>

          {/* ================= VIEW MORE / LESS ================= */}
          {galleryImages.length > 6 && (
            <div className="text-center mt-12">
              <Reveal>
                <button
                  onClick={handleToggleView}
                  className="px-8 py-3 bg-[#008300] text-white text-lg font-semibold rounded-full hover:bg-green-600 transition duration-300 shadow-md"
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
