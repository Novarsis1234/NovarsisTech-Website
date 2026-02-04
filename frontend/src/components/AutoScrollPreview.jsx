import React from "react";

const ProjectPreview = ({
  image,
  title = "Demo Website",
}) => {
  return (
    // ✅ CENTER WRAPPER
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm">
        {/* Title */}
        <h3 className="mb-3 text-center text-lg font-semibold text-gray-800">
          {title}
        </h3>

        {/* Preview Frame */}
        <div className="relative h-[520px] overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-lg group">

          {/* Scrolling Image */}
          <div className="absolute inset-0 scroll-animation group-hover:paused">
            <img
              src="/Images/hotel-pdf.png"
              alt={title}
              className="w-full select-none"
              draggable={false}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Internal CSS */}
        <style>{`
          .scroll-animation {
            animation: scrollY 22s linear infinite;
          }

          .group:hover .paused {
            animation-play-state: paused;
          }

          @keyframes scrollY {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-80%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectPreview;
