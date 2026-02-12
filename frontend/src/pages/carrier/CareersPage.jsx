import React, { useEffect } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../slice/careerSlice";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

const CareersPage = () => {
  const dispatch = useDispatch();
  const { careers = [], loading, error } = useSelector((state) => state.career);

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

  /* ================= SEO SCHEMA ================= */

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Careers at Novarsis Technology - Job Openings",
    description:
      "Explore job openings and career opportunities at Novarsis Technology in development, design and digital marketing.",
    author: { "@type": "Organization", name: "Novarsis Technology" },
    publisher: {
      "@type": "Organization",
      name: "Novarsis Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://novarsistech.com/logo.png",
      },
    },
    mainEntityOfPage: "https://novarsistech.com/careers",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://novarsistech.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://novarsistech.com/careers" },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novarsis Technology",
    url: "https://novarsistech.com",
    logo: "https://novarsistech.com/logo.png",
  };

  /* 🔥 VERY POWERFUL SEO BOOST — JOBPOSTING SCHEMA */
  const jobPostingSchema = careers.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.createdAt,
    employmentType: job.type,
    hiringOrganization: {
      "@type": "Organization",
      name: "Novarsis Technology",
      sameAs: "https://novarsistech.com",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "IN",
      },
    },
  }));

  return (
    <>
      <Helmet>
        <title>Careers & Job Openings | Novarsis Technology</title>

        <meta
          name="description"
          content="Explore job openings at Novarsis Technology. Join our team in web development, mobile apps, UI UX design and digital marketing careers."
        />

        <link rel="canonical" href="https://novarsistech.com/careers" />
        <meta name="robots" content="index, follow" />

        {/* 🔥 SCHEMAS */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {jobPostingSchema.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* ================= HERO ================= */}
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
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-2 md:mb-3">
        <Link to="/" className="hover:text-[#008300] transition">
          Home
        </Link>
        <span className="mx-2 text-[#008300]">/</span> Careers
      </p>
    </Reveal>

    {/* ✅ ONLY 1 H1 */}
    <Reveal>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Careers at Novarsis Technology
      </h1>
    </Reveal>

    {/* ✅ SEO Optimized Paragraph */}
    <Reveal>
   <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
  Join Novarsis Technology and build your career in web development, mobile apps,
  UI/UX, and digital marketing with innovative real-world projects.
</p>

    </Reveal>
  </div>
</section>

      {/* ================= ARTICLE CONTENT ================= */}
      <article>
        {/* SEO INTRO */}
        <section className="bg-white py-10 px-4">
          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-black">
              Job Opportunities at{" "}
              <span className="text-[#008300]">Novarsis Technology</span>
            </h2>

            <p className="mb-4">
              Join Novarsis Technology and build your career in modern web
              development, mobile app development, UI UX design and digital
              marketing. Our team works on real-world projects using advanced
              technologies and scalable development strategies.
            </p>

            <p>
              We provide a collaborative environment where professionals grow
              through innovation, creativity and continuous learning while
              delivering impactful IT solutions.
            </p>
          </div>
        </section>

        {/* ================= CAREERS LIST ================= */}
        <section className="relative bg-white py-16 px-4 overflow-hidden">
          <h2 className="sr-only">
            Novarsis Technology Career Opportunities and Job Openings
          </h2>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
                  Current <span className="text-[#008300]">Openings</span>
                </h2>
              </Reveal>
            </div>

            {loading && <p className="text-center">Loading careers...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="space-y-10">
              {careers.length > 0
                ? careers.map((job) => {
                    const jobId = job._id || job.id;

                    return (
                      <motion.div
                        key={jobId}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-[#008300]/10 transition-all duration-500"
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
                          View Details →
                        </Link>
                      </motion.div>
                    );
                  })
                : !loading && (
                    <p className="text-center text-gray-500">
                      No career openings available.
                    </p>
                  )}
            </div>
          </div>
        </section>
      </article>

      <AutoInternalLinks />
    </>
  );
};

export default CareersPage;
