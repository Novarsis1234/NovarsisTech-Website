import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  MdEmail,
  MdLocationOn,
  MdOutlineApps,
  MdPhone,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
} from "react-icons/md";
import logo from "../../src/assets/images/logonavoarsis.jpeg";
import Sidebar from "./Sidebar";

const services = [
  { name: "Web Development", path: "/webdeveloper" },
  { name: "App Development", path: "/appdevelopment" },
  { name: "UI / UX Design", path: "/uiuxdesign" },
  { name: "CMS Development (WordPress)", path: "/cmsdevelopment" },
  { name: "Digital Marketing", path: "/digitalmarketing" },
  { name: "SEO Optimization", path: "/seooptimization" },
  { name: "Graphic Designing", path: "/graphicdesigning" },
];

const Header = () => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  /* 🔒 BODY SCROLL LOCK (MOBILE) */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  /* ❌ CLOSE DROPDOWNS ON ROUTE CHANGE */
  useEffect(() => {
    setIsServiceOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeAll = () => {
    setIsServiceOpen(false);
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  };

  const activeLink = (path) =>
    location.pathname === path
      ? "text-[#008300] border-b-2 border-[#008300] pb-1"
      : "hover:text-[#008300] transition-colors";

  return (
    <header className="w-full font-sans relative z-50">

      {/* 🔹 TOP BAR */}
      <div className="bg-[#008300] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <span />

          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@novarsistech.com"
              className="flex items-center space-x-2 border-r border-white/30 pr-4"
            >
              <MdEmail className="text-[#32B6F6]" />
              <span>info@novarsistech.com</span>
            </a>

            <a
              href="https://maps.app.goo.gl/1VWNa3CsZPsuK6YEA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-r border-white/30 pr-4"
            >
              <MdLocationOn className="text-[#32B6F6]" />
              <span> 301, 3rd Floor, Vikram Urban, Vijay Nagar, Indore</span>
            </a>

            <div className="flex items-center space-x-3 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 NAVBAR */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="logo" className="h-12" />
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <ul className="hidden md:flex items-center space-x-8 font-medium">

            <li><Link to="/" className={activeLink("/")} onClick={closeAll}>Home</Link></li>
            <li><Link to="/about" className={activeLink("/about")} onClick={closeAll}>About Us</Link></li>

            {/* SERVICES DROPDOWN (BUG-FREE) */}
            <li
              className="relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <span className="hover:text-[#008300]">Services</span>
                <MdKeyboardArrowDown />
              </div>

              {isServiceOpen && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-xl  rounded-lg">
                  <ul className="divide-y">
                    {services.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.path}
                          onClick={closeAll}
                          className="block px-5 py-3 hover:bg-[#008300]/10 hover:text-[#008300]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li><Link to="/blog" className={activeLink("/blog")} onClick={closeAll}>Blog</Link></li>
            <li><Link to="/faq" className={activeLink("/faq")} onClick={closeAll}>FAQ</Link></li>
            <li><Link to="/portfolio" className={activeLink("/portfolio")} onClick={closeAll}>Portfolio</Link></li>
            <li><Link to="/career" className={activeLink("/career")} onClick={closeAll}>Careers</Link></li>
            <li><Link to="/project" className={activeLink("/project")} onClick={closeAll}>Project</Link></li>
            <li><Link to="/contact" className={activeLink("/contact")} onClick={closeAll}>Contact</Link></li>
          </ul>

          {/* RIGHT */}
          <div className="hidden md:flex items-center space-x-5">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="border rounded-full p-2"
            >
              <MdOutlineApps className="text-2xl text-[#008300]" />
            </button>

            <a href="tel:+919111720303" className="flex items-center gap-2">
              <div className="bg-[#008300] p-3 rounded-full text-white">
                <MdPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-[#008300] font-semibold">+91 9111720303</p>
              </div>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden border p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MdMenu className="text-xl" />
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <img src={logo} alt="logo" className="h-10" />
              <button onClick={closeAll}>
                <MdClose className="text-2xl" />
              </button>
            </div>

            <ul className="p-6 space-y-4 text-lg font-medium">
              <li><Link to="/" onClick={closeAll}>Home</Link></li>
              <li><Link to="/about" onClick={closeAll}>About Us</Link></li>

              <li>
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="flex justify-between w-full"
                >
                  Services <MdKeyboardArrowDown />
                </button>

                {isServiceOpen && (
                  <ul className="ml-4 mt-3 border-l space-y-2">
                    {services.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.path}
                          onClick={closeAll}
                          className="block pl-4 py-1 hover:text-[#008300]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><Link to="/blog" onClick={closeAll}>Blog</Link></li>
              <li><Link to="/faq" onClick={closeAll}>FAQ</Link></li>
              <li><Link to="/portfolio" onClick={closeAll}>Portfolio</Link></li>
              <li><Link to="/career" onClick={closeAll}>Careers</Link></li>
              <li><Link to="/project" onClick={closeAll}>Project</Link></li>
              <li><Link to="/contact" onClick={closeAll}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
