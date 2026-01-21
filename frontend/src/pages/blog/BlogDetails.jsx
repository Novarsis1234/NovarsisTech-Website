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
    // ✅ Guard: undefined / empty id block
    if (!id || id === "undefined") return;

    dispatch(fetchBlogById(id));

    return () => {
      dispatch(clearSingleBlog());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading blog...
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

  if (!singleBlog) {
    return (
      <div className="text-center py-20 text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-16 px-5 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* IMAGE */}
        <img
          src={singleBlog.image}
          alt={singleBlog.title}
          className="w-full h-[400px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-8 space-y-4">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {singleBlog.date && (
              <span>
                📅 {new Date(singleBlog.date).toLocaleDateString("en-GB")}
              </span>
            )}
            <span>✍️ {singleBlog.createdByUsername}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">
            {singleBlog.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg">
            {singleBlog.description}
          </p>

          {/* Content */}
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {singleBlog.content}
          </div>

          {/* Created date */}
          {singleBlog.createdAt && (
            <p className="text-xs text-gray-400 pt-4">
              Posted on{" "}
              {new Date(singleBlog.createdAt).toLocaleString("en-GB")}
            </p>
          )}

          {/* Back button */}
          <Link
            to="/blog"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogDetails;
