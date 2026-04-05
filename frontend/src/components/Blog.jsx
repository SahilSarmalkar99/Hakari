import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "MASTERING THE FIRST IMPRESSION",
    desc: "Explore cutting-edge techniques in algorithm-driven storytelling and how brands are captivating.",
    author: "CHEYENNE WESTERVELT",
    date: "JAN 28, 2025",
    img: "https://framerusercontent.com/images/qOpwZeD9K0mLcmPNtMjvOFu7I.png?width=771&height=448",
  },
  {
    title: "THE ART OF CAPTIVATING IN SECONDS",
    desc: "Uncover innovative principles of algorithm-driven storytelling and how brands are drawing.",
    author: "CRAIG SEPTIMUS",
    date: "JAN 28, 2025",
    img: "https://framerusercontent.com/images/Q2ePvM6u1Z6xGX6Ruxu9EBxvdI.png?width=771&height=448",
  },
  {
    title: "UNLOCKING ATTENTION IN THE FIRST MOMENTS",
    desc: "Discover key strategies in algorithm-driven storytelling and how brands are engaging.",
    author: "CHEYENNE WESTERVELT",
    date: "DEC 24, 2024",
    img: "https://framerusercontent.com/images/0AzqiPEhlyRR5HB9m0RQVS6pRY.png?width=772&height=448",
  },
];

const Blog = () => {
  const textRef = useTextReveal();
  const fadeRef = useFadeIn();
  const navigate = useNavigate();
  return (
    <div
      id="blog"
      className="bg-[#FFFFFF] overflow-hidden text-black px-6 md:px-16 py-20"
    >
      {/* TOP HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <div>
          <p className="text-xs md:text-sm tracking-[0.05em] font-[font3] font-bold text-black mb-6">
            [ BLOG ]
          </p>

          <h2
            ref={textRef}
            className="text-4xl md:text-6xl font-[font2] uppercase mb-4"
          >
            OUR BLOG
          </h2>

          <p className="text-gray-600 font-bold font-[font3] tracking-tighter">
            Check out our latest articles
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="bg-orange-500 text-white px-6 py-3 font-[font3] font-bold rounded-lg text-sm tracking-wide flex items-center gap-2 hover:bg-orange-600 transition"
          onClick={() => navigate("/blogContent")}
        >
          SEE ALL →
        </button>
      </div>

      {/* BLOG GRID */}
      <div ref={fadeRef} className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className=" fade-item group cursor-pointer">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={blog.img}
                alt=""
                className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-[font2] uppercase mt-6 mb-3 leading-tight">
              {blog.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-600 font-[font3] font-bold text-sm mb-4">
              {blog.desc}
            </p>

            {/* AUTHOR */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-[font4] font-bold">
                AUTHOR:{" "}
                <span className="font-[font4] font-bold ">{blog.author}</span>
              </p>
            </div>

            {/* LINE */}
            <div className="border-b border-black/20 mb-4"></div>

            {/* FOOTER */}
            <div className="flex justify-between text-sm font-[font3] font-bold text-gray-700">
              <span>{blog.date}</span>
              <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                READ MORE →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
