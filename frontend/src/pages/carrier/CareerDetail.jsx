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
  const { careers = [], loading } = useSelector(
    (state) => state.career
  );

  useEffect(() => {
    if (!careers.length) {
      dispatch(fetchCareers());
    }
  }, [dispatch, careers.length]);

  const job = careers.find(
    (item) =>
      String(item.id) === id || String(item._id) === id
  );

  if (loading) {
    return (
      <div className="text-center py-24 text-lg font-semibold">
        Loading job details...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-24 text-red-500">
        Job not found
      </div>
    );
  }

  return (
    <>
    

<Helmet>
  <title>
    {job?.title
      ? `${job.title} Job Opening | Novarsis Technology Careers`
      : "Career Details | Novarsis Technology"}
  </title>

  <meta
    name="description"
    content={
      job?.description
        ? job.description.slice(0, 150)
        : "Explore career opportunities at Novarsis Technology and apply for exciting roles in development, design, marketing, and IT services."
    }
  />

  <meta
    name="keywords"
    content="Novarsis Technology jobs, IT job opening, software developer career, digital marketing jobs, UI UX designer hiring India"
  />

  <link
    rel="canonical"
    href={`https://novarsis.com/careers/${job?._id || job?.id || id}`}
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content={
      job?.title
        ? `${job.title} | Novarsis Technology Careers`
        : "Novarsis Technology Careers"
    }
  />
  <meta
    property="og:description"
    content={
      job?.description
        ? job.description.slice(0, 160)
        : "Join Novarsis Technology and build your career with innovative IT projects."
    }
  />
  <meta
    property="og:url"
    content={`https://novarsis.com/careers/${job?._id || job?.id || id}`}
  />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={
      job?.title
        ? `${job.title} | Novarsis Technology`
        : "Novarsis Technology Careers"
    }
  />
  <meta
    name="twitter:description"
    content={
      job?.description
        ? job.description.slice(0, 160)
        : "Apply now and grow your career with Novarsis Technology."
    }
  />
  <meta name="twitter:image" content="/Images/novarsis-og-image.jpg" />
</Helmet>


   <section className="relative bg-white min-h-screen py-24 px-4 md:px-20 overflow-hidden">

  {/* ⭐ Hidden SEO Heading */}
  <h2 className="sr-only">
    Novarsis Technology Career Details and Job Description Page
  </h2>

  {/* ===== Decorative Green Circles ===== */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
  <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
  <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

  <div className="relative z-10 max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-[#008300]/10">

    {/* Back */}
    <Link
      to="/career"
      className="inline-flex items-center gap-2 text-[#008300] font-semibold mb-8 hover:gap-3 transition-all"
    >
      ← Back to Careers
    </Link>

    {/* ⭐ MAIN HEADING (Correct H1 for Detail Page) */}
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
      className="
        inline-flex items-center justify-center
        bg-[#008300] text-white
        px-10 py-3 rounded-xl
        font-semibold text-lg
        hover:scale-105 transition-transform
      "
    >
      Apply Now
    </Link>
  </div>
</section>
<AutoInternalLinks/>
   </>
  );
};

export default CareerDetail;
