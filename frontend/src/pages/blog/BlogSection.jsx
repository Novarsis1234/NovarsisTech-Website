import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../slice/blogSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import { Helmet } from "react-helmet-async";
import AutoInternalLinks from "../../components/AutoInternalLinks";

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
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">No blogs found.</div>
    );
  }

  return (
    <>
      <Helmet>
        {/* ================= BASIC SEO ================= */}
        <title>
          Software Development Blog & Tech Insights | Novarsis Technology
        </title>

        <meta
          name="description"
          content="Novarsis Technology software development blog shares web development, digital marketing, SEO tips, and IT solutions insights to help businesses grow online."
        />

        <meta
          name="keywords"
          content="software development blog, Novarsis Technology blog, web development insights, SEO tips India, digital marketing articles, IT solutions blog"
        />

        <link rel="canonical" href="https://novarsistech.com/blog" />
        <meta name="robots" content="index, follow" />

        {/* ================= OPEN GRAPH ================= */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Software Development Blog | Novarsis Technology"
        />
        <meta
          property="og:description"
          content="Explore software development, SEO, and digital marketing insights from Novarsis Technology experts."
        />
        <meta property="og:url" content="https://novarsistech.com/blog" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Novarsis Technology Software Development Blog"
        />
        <meta
          name="twitter:description"
          content="Read modern software development trends, SEO insights and digital growth strategies."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ================= SCHEMA SEO BOOST 🚀 ================= */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"Blog",
            "name":"Novarsis Technology Blog",
            "url":"https://novarsistech.com/blog"
          }
        `}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"Organization",
            "name":"Novarsis Technology",
            "url":"https://novarsistech.com",
            "logo":"https://novarsistech.com/logo.png"
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
            }]
          }
        `}
        </script>
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

  <div className="relative z-10 text-center text-white px-4 sm:px-6">
    <Reveal>
      {/* ✅ Breadcrumb */}
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl mb-2 md:mb-3">
        <Link to="/" className="hover:text-[#008300] transition">
          Home
        </Link>
        <span className="text-[#008300] mx-1">/</span> Blog
      </p>
    </Reveal>

    {/* ✅ SINGLE H1 */}
    <Reveal>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Software Development Blog & Insights
      </h1>
    </Reveal>

    {/* ✅ SEO Optimized Paragraph */}
    <Reveal>
      <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg">
        Read the latest articles on web development, mobile app development,
        UI/UX design, SEO optimization, and digital marketing trends.
      </p>
    </Reveal>
  </div>
</section>

      {/* ================= SEO INTRO CONTENT ================= */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-justify">

          {/* H2 SEO */}
          <h2 className="text-3xl font-extrabold mb-6 text-black">
            Novarsis Technology Software <span className="text-[#008300]">Development Blog</span> 
          </h2>

          <p className="mb-4">
            The Novarsis Technology blog provides expert knowledge about{" "}
            <Link to="/webdeveloper" className="text-[#008300] font-semibold">
              software development services
            </Link>
            , web design, digital marketing strategies, and modern UI/UX trends.
            Our goal is to help businesses understand technology and grow
            digitally with smart solutions.
          </p>

          <h2 className="text-2xl font-extrabold mt-6 mb-3">
            Why Follow Our <span className="text-[#008300]">Technology Insights</span>?
          </h2>

          <p>
            From SEO improvements to performance optimization, our articles
            simplify complex topics and offer real-world solutions. Businesses,
            startups, and entrepreneurs can explore our{" "}
            <Link to="/about" className="text-[#008300] font-semibold">
              technology expertise
            </Link>{" "}
            and stay ahead in the digital industry.
          </p>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="relative bg-white min-h-screen py-24 px-4 md:px-16 overflow-hidden">
        <h2 className="sr-only">
          Latest Software Development Blogs and SEO Insights
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                Latest <span className="text-[#008300]">Technology Insights</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore software development, SEO tips, and digital marketing
                knowledge from Novarsis Technology experts.
              </p>
            </Reveal>
          </div>

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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#008300]/10 hover:-translate-y-2"
                >
                  <Link to={`/blog/${blogId}`}>
                    <img
                      src={blog.image}
                      alt={`${blog.title} software development blog by Novarsis Technology`}
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
                        Read Full Article →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTO INTERNAL LINKS */}
      <AutoInternalLinks />
    </>
  );
};

export default BlogSection;
