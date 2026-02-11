import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../slice/blogSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
  import { Helmet } from "react-helmet-async";

const BlogSection = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        {error}
      </div>
    );
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">
        No blogs found.
      </div>
    );
  }

  return (
    <>
  

<Helmet>
  <title>Latest Blogs & Tech Insights | Novarsis Technology</title>

  <meta
    name="description"
    content="Explore the latest blogs, technology insights, SEO strategies, and development trends shared by the Novarsis Technology team to help businesses grow digitally."
  />

  <meta
    name="keywords"
    content="Novarsis Technology blog, tech insights India, web development blogs, SEO tips, digital marketing articles, software development trends"
  />

  <link rel="canonical" href="https://novarsis.com/blog" />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Latest Blogs - Novarsis Technology" />
  <meta
    property="og:description"
    content="Read expert insights, development tips, and digital growth strategies from the Novarsis Technology blog."
  />
  <meta property="og:url" content="https://novarsis.com/blog" />
  <meta property="og:image" content="/Images/novarsis-og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Novarsis Technology Blog & Insights" />
  <meta
    name="twitter:description"
    content="Stay updated with modern technology trends, SEO insights, and development knowledge."
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
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="text-[#008300] mx-1">/</span> Blog
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Blog | Novarsis Technology
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= BLOG LIST SECTION ================= */}
      <section className="relative bg-white min-h-screen py-24 px-4 md:px-16 overflow-hidden">

  {/* ⭐ Hidden SEO Heading */}
  <h2 className="sr-only">
    Latest Technology Blogs and Insights by Novarsis Technology Team
  </h2>

  {/* ===== Decorative Green Circles ===== */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
  <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
  <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
          Latest <span className="text-[#008300]">Insights</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Explore expert insights, technology trends, and practical
          knowledge curated by the Novarsis Technology team.
        </p>
      </Reveal>
    </div>

    {/* Blog Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogs.map((blog) => {
        const blogId = blog?._id || blog?.id;
        if (!blogId) return null;

        return (
          <motion.div
            key={blogId}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              bg-white rounded-2xl overflow-hidden
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              border border-[#008300]/10
              hover:-translate-y-2
            "
          >
            <Link to={`/blog/${blogId}`}>
              <img
                src={blog.image}
                alt={`${blog.title} – Novarsis Technology Blog Insight`}
                className="w-full h-60 object-cover"
              />
            </Link>

            <div className="p-6 space-y-4">
              <Link to={`/blog/${blogId}`}>
                <h3 className="text-xl font-bold text-black hover:text-[#008300] transition">
                  {blog.title}
                </h3>
              </Link>

              <Link to={`/blog/${blogId}`}>
                <span className="inline-flex items-center gap-2 text-[#008300] font-semibold hover:gap-3 transition-all">
                  View More <span>→</span>
                </span>
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

    </>
  );
};

export default BlogSection;
