// import React from "react";
// import {
//   FaLightbulb,
//   FaShieldAlt,
//   FaLaptopCode,
//   FaChartPie,
//   FaObjectGroup,
// } from "react-icons/fa";
// import Reveal from "../../components/Reveal";

// const premiumServices = [
//   {
//     icon: <FaLightbulb />,
//     title: "Branding & Direction",
//     desc: "We build impactful brand identities and guide creative direction to elevate your business presence.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Product Design & Development",
//     desc: "We create and develop visually compelling, functional product designs that bring your ideas to real life.",
//   },
//   {
//     icon: <FaLaptopCode />,
//     title: "Video Editing & Grading",
//     desc: "We deliver polished video content with professional editing & color grading for a powerful visual impact.",
//   },
//   {
//     icon: <FaObjectGroup />,
//     title: "UI/UX Designing",
//     desc: "We create user-friendly and visually appealing UI/UX designs that enhance customer experience and engagement.",
//   },
//   {
//     icon: <FaChartPie />,
//     title: "Data Analysis",
//     desc: "We combine data analysis with content writing to deliver impactful communication that fuels growth.",
//   },
// ];

// const PremiumServices = () => {
//   return (
//      <section className="relative bg-green-200  py-24 overflow-hidden">
      
//       {/* Soft Glow */}
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"></div>

//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
//         <Reveal>
//           <p className="text-[#008300] font-semibold uppercase tracking-widest">
//             Premium Capabilities
//           </p>
//         </Reveal>

//         <Reveal>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-3 leading-tight">
//             Advanced IT <br /> & Creative Services
//           </h2>
//         </Reveal>

//         <Reveal>
//           <p className="max-w-2xl mt-6 text-gray-700 text-sm md:text-base leading-relaxed">
//             We deliver future-ready IT and creative solutions combining innovation,
//             performance, and scalability to help brands grow with confidence.
//           </p>
//         </Reveal>
//       </div>

//       {/* Cards */}
//       <Reveal>
//         <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
//           {premiumServices.map((service, i) => (
//             <div
//               key={i}
//               className="relative group bg-white/70 backdrop-blur-xl border border-white/40 
//               rounded-2xl p-8 shadow-xl hover:shadow-2xl 
//               transition-all duration-500 hover:-translate-y-3"
//             >
//               {/* Left Accent Line */}
//               <span className="absolute left-0 top-0 h-full w-1 bg-[#008300] rounded-l-2xl"></span>

//               {/* Floating Icon */}
//               <div className="absolute -top-6 left-6 w-14 h-14 rounded-xl 
//               bg-[#008300] text-white flex items-center justify-center text-2xl 
//               shadow-lg group-hover:scale-110 transition duration-500">
//                 {service.icon}
//               </div>

//               <div className="mt-10">
//                 <h3 className="font-bold text-lg text-[#0b1b3f] mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed text-justify">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Reveal>
//     </section>
//   );
// };

// export default PremiumServices;




import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaLaptopCode,
  FaChartPie,
  FaObjectGroup,
} from "react-icons/fa";
import Reveal from "../../components/Reveal";

const premiumServices = [
  {
    icon: <FaLightbulb />,
    title: "Branding & Direction",
    desc: "We build impactful brand identities and guide creative direction to elevate your business presence.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Product Design & Development",
    desc: "We create and develop visually compelling, functional product designs that bring your ideas to real life.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Video Editing & Grading",
    desc: "We deliver polished video content with professional editing & color grading for a powerful visual impact.",
  },
  {
    icon: <FaObjectGroup />,
    title: "UI/UX Designing",
    desc: "We create user-friendly and visually appealing UI/UX designs that enhance customer experience and engagement.",
  },
  {
    icon: <FaChartPie />,
    title: "Data Analysis",
    desc: "We combine data analysis with content writing to deliver impactful communication that fuels growth.",
  },
];

const PremiumServices = () => {
  return (
    <section
      className="relative py-28 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/Images/novarsis-home2.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Soft Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <Reveal>
          <p className="text-[#00ff84] font-semibold uppercase tracking-widest">
            Premium Capabilities
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
            Advanced IT <br /> & Creative Services
          </h2>
        </Reveal>

        <Reveal>
          <p className="max-w-2xl mt-6 text-gray-200 text-sm md:text-base leading-relaxed">
            We deliver future-ready IT and creative solutions combining innovation,
            performance, and scalability to help brands grow with confidence.
          </p>
        </Reveal>
      </div>

      {/* Cards */}
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
          {premiumServices.map((service, i) => (
            <div
              key={i}
              className="relative group bg-white/80 backdrop-blur-xl 
              rounded-2xl p-8 shadow-xl hover:shadow-2xl 
              transition-all duration-500 hover:-translate-y-3"
            >
              {/* Left Accent Line */}
              <span className="absolute left-0 top-0 h-full w-1 bg-[#008300] rounded-l-2xl"></span>

              {/* Floating Icon */}
              <div className="absolute -top-6 left-6 w-14 h-14 rounded-xl 
              bg-[#008300] text-white flex items-center justify-center text-2xl 
              shadow-lg group-hover:scale-110 transition duration-500">
                {service.icon}
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-lg text-[#0b1b3f] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default PremiumServices;

