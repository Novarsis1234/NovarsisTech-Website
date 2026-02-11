import React from "react";
import { Link } from "react-router-dom";

const AutoInternalLinks = ({ title = "Explore Our Services" }) => {
  const links = [
    { name: "Web Development", path: "/webdeveloper" },
    { name: "App Development", path: "/appdevelopment" },
    { name: "UI / UX Design", path: "/uiuxdesign" },
    { name: "CMS Development", path: "/cmsdevelopment" },
    { name: "Digital Marketing", path: "/digitalmarketing" },
    { name: "SEO Optimization", path: "/seooptimization" },
    { name: "Graphic Designing", path: "/graphicdesigning" },
  ];

  return (
    <section className="mt-20 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">

        
        
        {/* SEO Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#008300] mb-4">
          {title}
        </h2>

        {/* SEO Paragraph */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-justify leading-relaxed text-base sm:text-lg">
          Novarsis Technology offers complete IT services including web
          development, app development, UI UX design, CMS solutions, digital
          marketing, graphic designing, and SEO optimization to help businesses
          grow digitally with scalable technology solutions.
        </p>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="
                px-5 py-2
                border border-[#008300]
                rounded-full
                text-[#008300]
                font-semibold
                hover:bg-[#008300]
                hover:text-white
                transition-all duration-300
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoInternalLinks;
