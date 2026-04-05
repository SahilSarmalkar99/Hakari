import React from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import useTextReveal from "../hooks/useTextReveal";

const BlogsContent = () => {
  const navigate = useNavigate();
  const textRef = useTextReveal();

  return (
    <div className="px-6 py-20  bg-[#f5f5f5] min-h-screen">
      {/* HEADER */}
      <div className="text-center mb-16 mt-10">
        <h1 ref={textRef} className="text-5xl font-[font2]  mb-4">
          INSIGHTS TO GO VIRAL
        </h1>
        <p className="text-gray-500 font-[font3] font-bold max-w-xl mx-auto">
          Practical tips, proven strategies, and behind-the-scenes lessons on
          creating short-form content that converts.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="cursor-pointer group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={`${blog.image}?w=800&q=80`} // 🔥 compress
                loading="lazy"
                alt=""
                className="w-full h-[220px] object-covergroup-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* TITLE */}
            <h2 className="mt-4 text-xl font-[font2] group-hover:text-orange-500 transition">
              {blog.title}
            </h2>

            {/* DESC */}
            <p className="text-gray-500 font-[font3] font-bold mt-2 text-sm">
              {blog.desc}
            </p>

            {/* AUTHOR */}
            <p className="text-xs mt-4 font-[font3] font-bold text-gray-700">
              AUTHOR: {blog.author}
            </p>

            <div className="border-b mt-4 border-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsContent;
