import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../slice/careerSlice";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

const CareerDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { careers = [], loading } = useSelector((state) => state.career);

  useEffect(() => {
    if (!careers.length) dispatch(fetchCareers());
  }, [dispatch, careers.length]);

  const job = careers.find(
    (item) => String(item.id) === id || String(item._id) === id,
  );

  if (loading) {
    return (
      <div className="text-center py-24 text-lg font-semibold">
        Loading job details...
      </div>
    );
  }

  if (!job) {
    return <div className="text-center py-24 text-red-500">Job not found</div>;
  }

  /* ================= SEO SCHEMA ================= */

  const canonicalUrl = `https://novarsistech.com/careers/${
    job?._id || job?.id || id
  }`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: job.title,
    description: job.description,
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", name: "Novarsis Technology" },
    publisher: {
      "@type": "Organization",
      name: "Novarsis Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://novarsistech.com/logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://novarsistech.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://novarsistech.com/careers" },
      { "@type": "ListItem", position: 3, name: job.title, item: canonicalUrl },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Novarsis Technology",
    url: "https://novarsistech.com",
    logo: "https://novarsistech.com/logo.png",
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Novarsis Technology",
      value: job?._id || job?.id || id,
    },
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
    employmentType: job.type,
    datePosted: job.createdAt || new Date().toISOString(),
  };

  return (
    <>
      <Helmet>
        <title>{`${job.title} Job Opening | Novarsis Technology Careers`}</title>

        <meta
          name="description"
          content={job.description.slice(0, 160)}
        />

        <link rel="canonical" href={canonicalUrl} />
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

        <script type="application/ld+json">
          {JSON.stringify(jobPostingSchema)}
        </script>
      </Helmet>

      <article>
        <section className="relative bg-white min-h-screen py-20 px-4 md:px-20 overflow-hidden">
          {/* Hidden SEO Heading */}
          <h2 className="sr-only">
            Novarsis Technology Career Details and Job Description Page
          </h2>

          <div className="relative z-10 max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-[#008300]/10">
            {/* Back */}
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-[#008300] font-semibold mb-8 hover:gap-3 transition-all"
            >
              ← Back to Careers
            </Link>

            {/* ✅ ONLY ONE H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
              {job.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} /> {job.type}
              </span>
              {job.experience && (
                <span className="flex items-center gap-2">
                  <Briefcase size={18} /> {job.experience}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-12 text-base sm:text-lg">
              {job.description}
            </div>

            {/* Apply Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#008300] text-white px-10 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </article>

      <AutoInternalLinks />
    </>
  );
};

export default CareerDetail;
