import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById, clearSingleBlog } from "../../slice/blogSlice";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleBlog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    if (!id || id === "undefined") return;
    dispatch(fetchBlogById(id));
    return () => dispatch(clearSingleBlog());
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="text-center py-24 text-lg font-semibold">
        Loading blog...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-24 text-red-600">{error}</div>;
  }

  if (!singleBlog) {
    return (
      <div className="text-center py-24 text-gray-600">Blog not found.</div>
    );
  }

  const blogUrl = `https://novarsistech.com/blog/${singleBlog?._id || id}`;
  const blogImage =
    singleBlog?.image ||
    "https://novarsistech.com/Images/novarsis-og-image.jpg";

  return (
    <>
      <Helmet>
        {/* ================= BASIC SEO ================= */}
        <title>
          {singleBlog?.title
            ? `${singleBlog.title} | Software Development Blog | Novarsis Technology`
            : "Blog Details | Novarsis Technology"}
        </title>

        <meta
          name="description"
          content={
            singleBlog?.description ||
            "Novarsis Technology software development blog shares web development, SEO strategies, and digital marketing insights."
          }
        />

        <meta
          name="keywords"
          content="software development blog, Novarsis Technology article, web development insights, SEO tips India, digital marketing knowledge"
        />

        <link rel="canonical" href={blogUrl} />
        <meta name="robots" content="index, follow" />

        {/* ================= OPEN GRAPH ================= */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={singleBlog.title} />
        <meta property="og:description" content={singleBlog.description} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:image" content={blogImage} />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={singleBlog.title} />
        <meta name="twitter:description" content={singleBlog.description} />
        <meta name="twitter:image" content={blogImage} />

        {/* ================= ARTICLE SCHEMA (VERY STRONG SEO) ================= */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"Article",
            "headline":"${singleBlog.title}",
            "image":"${blogImage}",
            "author":{
              "@type":"Organization",
              "name":"Novarsis Technology"
            },
            "publisher":{
              "@type":"Organization",
              "name":"Novarsis Technology",
              "logo":{
                "@type":"ImageObject",
                "url":"https://novarsistech.com/logo.png"
              }
            },
            "mainEntityOfPage":{
              "@type":"WebPage",
              "@id":"${blogUrl}"
            }
          }
        `}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://novarsistech.com"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://novarsistech.com/blog"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${singleBlog.title}",
              "item": "${blogUrl}"
            }]
          }
        `}
        </script>
      </Helmet>

      {/* ================= BLOG DETAILS SECTION ================= */}
      <section className="relative bg-white min-h-screen py-24 px-4 md:px-20 overflow-hidden">

        {/* Hidden SEO Heading */}
        <h2 className="sr-only">
          Software Development Blog Article by Novarsis Technology
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-[#008300]/10"
        >
          {/* BLOG IMAGE */}
          <img
            src={singleBlog.image}
            alt={`${singleBlog.title} software development blog by Novarsis Technology`}
            className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
          />

          <div className="p-6 sm:p-8 space-y-6">

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              {singleBlog.date && (
                <span>
                  📅 {new Date(singleBlog.date).toLocaleDateString("en-GB")}
                </span>
              )}
              {singleBlog.createdByUsername && (
                <span>✍️ {singleBlog.createdByUsername}</span>
              )}
            </div>

            {/* ⭐ MAIN H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {singleBlog.title}
            </h1>

            {/* Description */}
            {singleBlog.description && (
              <>
                <h2 className="text-xl font-bold text-black">
                  Overview of This Software Development Article
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {singleBlog.description}
                </p>
              </>
            )}

            {/* Blog Content */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
              {singleBlog.content}
            </div>

            {/* Internal SEO Link */}
            <p className="text-sm text-gray-600 pt-4">
              Explore more{" "}
              <Link to="/services" className="text-[#008300] font-semibold">
                software development services
              </Link>{" "}
              offered by Novarsis Technology.
            </p>

            {/* Created Date */}
            {singleBlog.createdAt && (
              <p className="text-xs text-gray-400">
                Posted on{" "}
                {new Date(singleBlog.createdAt).toLocaleString("en-GB")}
              </p>
            )}

            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#008300] font-semibold hover:gap-3 transition-all pt-6"
            >
              ← Back to Blogs
            </Link>
          </div>
        </motion.div>
      </section>

      <AutoInternalLinks />
    </>
  );
};

export default BlogDetails;
