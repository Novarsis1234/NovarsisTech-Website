import React, { useEffect } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../slice/careerSlice";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";

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
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg mb-2">
              <Link to="/" className="hover:text-[#008300]">Home</Link>
              <span className="mx-2 text-[#008300]">/</span> Careers
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Careers | Novarsis Technology
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#008300] mb-4">
              Current Openings
            </h2>
            <p className="text-gray-600">
              Explore exciting career opportunities with us.
            </p>
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md p-8 relative"
                  >
                    {isNewJob(job.createdAt) && (
                      <span className="absolute top-6 right-6 bg-[#008300] text-white text-xs px-4 py-1 rounded-full">
                        New
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-[#008300] mb-3 flex items-center gap-2">
                      <Briefcase size={20} /> {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-4">
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

                    <p className="text-gray-700 line-clamp-4 whitespace-pre-line mb-3">
                      {job.description}
                    </p>

                    <Link
                      to={`/careers/${jobId}`}
                      className="text-[#008300] font-semibold hover:underline"
                    >
                      View More →
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
