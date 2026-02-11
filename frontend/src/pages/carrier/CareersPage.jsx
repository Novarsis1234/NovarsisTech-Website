import React, { useEffect } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../slice/careerSlice";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
  import { Helmet } from "react-helmet-async";

const CareersPage = () => {
  const dispatch = useDispatch();
  const { careers = [], loading, error } = useSelector(
    (state) => state.career
  );

  useEffect(() => {
    dispatch(fetchCareers());
  }, [dispatch]);

  const isNewJob = (dateStr) => {
    if (!dateStr) return false;
    const createdDate = new Date(dateStr);
    const now = new Date();
    const diffDays = (now - createdDate) / (1000 * 60 * 60 * 24);
    return diffDays <= 7;
  };

  return (
    <>
  

<Helmet>
  <title>Careers & Job Openings | Novarsis Technology</title>

  <meta
    name="description"
    content="Explore current job openings at Novarsis Technology. Join our expert team in web development, app development, digital marketing, UI/UX design, and IT solutions."
  />

  <meta
    name="keywords"
    content="Novarsis Technology careers, IT jobs India, software developer jobs, digital marketing careers, UI UX jobs, tech company hiring"
  />

  <link rel="canonical" href="https://novarsis.com/careers" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Careers at Novarsis Technology" />
  <meta
    property="og:description"
    content="Join our growing team and build your future with innovative IT projects and digital solutions."
  />
  <meta property="og:url" content="https://novarsis.com/careers" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology Careers & Jobs" />
  <meta
    name="twitter:description"
    content="Discover exciting career opportunities and grow your professional journey with Novarsis Technology."
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
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

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="mx-2 text-[#008300]">/</span> Careers
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Careers at Novarsis Technology
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= CAREERS SECTION ================= */}
      <section className="relative bg-white py-24 px-4 overflow-hidden">

        {/* ===== Decorative Circles ===== */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
        <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
        <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
       
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
                Current <span className="text-[#008300]">Openings</span>
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                Join our growing team of professionals and build your career
                with a company that values innovation, learning, and growth.
              </p>
            </Reveal>
          </div>

          {loading && <p className="text-center">Loading careers...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="space-y-10">
            {careers.length > 0 ? (
              careers.map((job) => {
                const jobId = job._id || job.id;

                return (
                  <motion.div
                    key={jobId}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                      bg-white rounded-2xl p-8
                      shadow-lg hover:shadow-2xl
                      border border-[#008300]/10
                      transition-all duration-500
                    "
                  >
                    {isNewJob(job.createdAt) && (
                      <span className="inline-block mb-4 bg-[#008300] text-white text-xs px-4 py-1 rounded-full">
                        New Opening
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-[#008300] mb-4 flex items-center gap-2">
                      <Briefcase size={20} /> {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-5">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} /> {job.type}
                      </span>
                      {job.experience && (
                        <span>Experience: {job.experience}</span>
                      )}
                    </div>

                    <p className="text-gray-700 leading-relaxed line-clamp-4 mb-4">
                      {job.description}
                    </p>

                    <Link
                      to={`/careers/${jobId}`}
                      className="inline-flex items-center gap-2 text-[#008300] font-semibold hover:gap-3 transition-all"
                    >
                      View Details <span>→</span>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              !loading && (
                <p className="text-center text-gray-500">
                  No career openings available.
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
