import React from "react";
import { useParams } from "react-router-dom";
import { blogUiData } from "../data/blogUiData";
import useTextReveal from "../hooks/useTextReveal";
import Footer from "./Footer";
import Blog from "./Blog";


const BlogUI = () => {
  const { id } = useParams();
  const blog = blogUiData.find((b) => b.id === id);

  const textRef = useTextReveal();

  if (!blog) return <div className="p-10">Blog not found</div>;

  return (
    <>
    <div className="bg-[#f5f5f5] min-h-screen pt-28 pb-20 px-6">
      
      {/* CONTAINER */}
      <div  className="max-w-4xl mx-auto">

        {/* CATEGORY + DATE */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <span className="bg-gray-200 px-3 py-1 rounded-md font-[font3] font-bold">
            {blog.category}
          </span>
          <span className="font-[font3] font-bold">{blog.date}</span>
        </div>

        {/* TITLE */}
        <h1 ref={textRef} className="text-5xl md:text-6xl font-[font2]  leading-tight mb-10">
          {blog.title}
        </h1>

        {/* HERO IMAGE */}
        <img
          src={blog.heroImage}
          alt=""
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl mb-10"
        />

        {/* AUTHOR */}
        <div className="flex items-center gap-4 mb-10">
          <img
            src={blog.author.avatar}
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-[font3] font-bold">{blog.author.name}</p>
            <p className="text-sm text-gray-500 font-[font3] font-bold">{blog.author.role}</p>
          </div>
        </div>

        {/* INTRO */}
        <p className="text-gray-600 font-[font3] font-bold leading-7 mb-12">
          {blog.intro}
        </p>

        {/* MID IMAGE */}
        <img
          src={blog.midImage}
          alt=""
          className="w-full h-[350px] object-cover rounded-xl mb-12"
        />

        {/* SECTIONS */}
        {blog.sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-3xl font-[font2] mb-4">
              {section.title}
            </h2>

            <ul className="text-gray-600 space-y-2 font-[font3] font-bold list-disc pl-5">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogUI;