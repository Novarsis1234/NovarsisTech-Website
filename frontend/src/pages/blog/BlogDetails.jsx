import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById, clearSingleBlog } from "../../slice/blogSlice";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleBlog, loading, error } = useSelector(
    (state) => state.blog
  );

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
    return (
      <div className="text-center py-24 text-red-600">
        {error}
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="text-center py-24 text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="relative bg-white min-h-screen py-24 px-4 md:px-20 overflow-hidden">

      {/* ===== Decorative Green Circles ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute top-40 right-[-140px] w-[420px] h-[420px] bg-[#008300]/10 rounded-full"></div>
      <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#008300]/10 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative z-10
          max-w-4xl mx-auto
          bg-white rounded-2xl
          shadow-xl overflow-hidden
          border border-[#008300]/10
        "
      >
        {/* IMAGE */}
        <img
          src={singleBlog.image}
          alt={singleBlog.title}
          className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-6 sm:p-8 space-y-5">

          {/* Meta */}
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

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black leading-tight">
            {singleBlog.title}
          </h1>

          {/* Short Description */}
          {singleBlog.description && (
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {singleBlog.description}
            </p>
          )}

          {/* Blog Content */}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {singleBlog.content}
          </div>

          {/* Created Date */}
          {singleBlog.createdAt && (
            <p className="text-xs text-gray-400 pt-4">
              Posted on{" "}
              {new Date(singleBlog.createdAt).toLocaleString("en-GB")}
            </p>
          )}

          {/* Back Button */}
          <Link
            to="/blog"
            className="
              inline-flex items-center gap-2
              text-[#008300] font-semibold
              hover:gap-3 transition-all
              pt-6
            "
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogDetails;
