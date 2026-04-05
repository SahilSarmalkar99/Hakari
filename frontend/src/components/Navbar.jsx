import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 MIXED NAV (scroll + routes)
  const navLinks = [
    { name: "ABOUT", type: "scroll", id: "about" },
    { name: "BENEFITS", type: "scroll", id: "benefits" },
    { name: "CAMPAIGNS", type: "scroll", id: "campaigns" },
    { name: "PRICING", type: "scroll", id: "pricing" },
    { name: "SERVICES", type: "scroll", id: "services" },
    { name: "FAQ", type: "scroll", id: "faq" },
    { name: "BLOG", type: "route", path: "/blogContent" },
  ];

  // 🔥 SCROLL NAV LOGIC
  const handleNavigation = (item) => {
  setOpen(false);

  if (item.type === "route") {
    navigate(item.path);
  } else {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.id } }); // ✅ pass state
    } else {
      document.getElementById(item.id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};

  // 🔥 SCROLL HIDE NAV
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-all duration-500 
        ${showNav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-xl px-6 py-4 shadow-lg">
          {/* 🔥 LOGO → HOME */}
          <div
            onClick={() => {
              if (location.pathname === "/") {
                // already on home → scroll to top
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                // not on home → navigate
                navigate("/");
              }
            }}
            className="flex items-center gap-2 text-white font-bold text-lg cursor-pointer"
          >
            <div className="w-6 h-6 bg-white rounded-sm"></div>
            HAKARI
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* 🔥 CONTACT ROUTE */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-[font3] font-bold transition"
            >
              START A PROJECT →
            </button>

            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      <div
        className={`fixed top-25 left-1/2 -translate-x-1/2 w-[50%] max-w-5xl transition-all duration-500 z-40 ${
          open && showNav
            ? "opacity-100 translate-y-0"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] rounded-2xl p-5 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(item)}
                className="flex items-center justify-between group cursor-pointer"
              >
                <span className="text-white text-xl tracking-widest group-hover:text-orange-400 transition">
                  {item.name}
                </span>
                <span className="text-gray-400 group-hover:translate-x-2 transition">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
