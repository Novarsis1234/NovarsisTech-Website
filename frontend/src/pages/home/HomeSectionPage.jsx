import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeSectionPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // slow cinematic speed
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/Images/video-forward.mp4"
        poster="/Images/novarsis-home2.webp"   // 👈 poster added
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6">
        <div
          className="
            text-center
            p-6 sm:p-8 md:p-12
            border border-white/20
            rounded-3xl
            shadow-2xl
            max-w-3xl w-full
          "
        >
          {/* Heading */}
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-extrabold
              text-white
              leading-tight
              mb-5
            "
          >
            Leading IT Services <br />
            <span className="text-[#008300]">
              & Software Development
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              text-gray-200
              text-sm sm:text-base md:text-lg
              mb-8
              max-w-xl
              mx-auto
              leading-relaxed
            "
          >
            NovarsisTech builds scalable, secure, and future-ready digital
            solutions to help modern businesses grow faster.
          </p>

          {/* Button */}
          <Link to="/about">
            <button
              className="
                bg-[#008300]
                hover:bg-green-600
                px-6 sm:px-8 md:px-10
                py-3 sm:py-4
                rounded-full
                text-white
                text-sm sm:text-base md:text-lg
                font-semibold
                transition
                hover:scale-105
              "
            >
              Start Your Journey
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default HomeSectionPage;
