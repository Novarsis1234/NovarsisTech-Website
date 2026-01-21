import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../slice/blogSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";

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
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/Images/banner.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>
          
            {/* Centered Content */}
            <div className="relative z-10 text-center text-white px-4">
              <Reveal>
                <p className="text-gray-300 text-lg md:text-xl mb-2">
                  <Link to="/" className="hover:text-[#008300] transition">
                    Home
                  </Link>
                  <span className="text-[#008300] mx-1">/</span>  Blog
                </p>
              </Reveal>
          
              <Reveal>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Blog | Novarsis Technology
                </h1>
              </Reveal>
            </div>
          
            {/* Decorative Circles */}
           
          </section>
   
    <section className="bg-gray-50 min-h-screen py-16 px-5 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => {
          // ✅ SAFE ID (undefined issue solved)
          const blogId = blog?._id || blog?.id;

          // ❌ Agar id hi nahi hai to card render mat karo
          if (!blogId) return null;

          return (
            <motion.div
              key={blogId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Link to={`/blog/${blogId}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
              </Link>

             <div className="p-5 space-y-4">
  <Link to={`/blog/${blogId}`}>
    <h3 className="text-xl font-bold hover:text-green-600 transition">
      {blog.title}
    </h3>
  </Link>

  {/* View More Button */}
  <Link to={`/blog/${blogId}`}>
    <button className="mt-2 inline-flex items-center gap-2 bg-[#008300] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
      View More
      <span className="text-lg">→</span>
    </button>
  </Link>
</div>

            </motion.div>
          );
        })}
      </div>
    </section>
     </>
  );
};

export default BlogSection;
