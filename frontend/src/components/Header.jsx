import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaWhatsapp 
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /* BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  /* CLOSE ON ROUTE CHANGE */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
  }, [location.pathname]);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
    setIsSidebarOpen(false);
  };

  const activeLink = (path) =>
    location.pathname === path
      ? "text-[#008300] font-semibold border-b-2 border-[#008300] pb-1"
      : "hover:text-[#008300] transition";

  return (
    <header className="w-full relative z-50 font-sans">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#008300] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

          <div className="flex items-center space-x-6">
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
              className="flex items-center space-x-2"
            >
              <MdLocationOn className="text-[#32B6F6]" />
              <span>301, 3rd Floor, Vikram Urban, Vijay Nagar, Indore</span>
            </a>
          </div>

         

<div className="flex items-center space-x-4 text-lg">

  <a
    href="https://www.facebook.com/NovarsisTechindia/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#32B6F6] transition"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/novarsistech_"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#32B6F6] transition"
  >
    <FaTwitter />
  </a>

  <a
    href="https://www.linkedin.com/company/87981778/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#32B6F6] transition"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/novarsistech/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#32B6F6] transition"
  >
    <FaInstagram />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919111720303?text=Hello%20Novarsis%20Tech%2C%20I%20am%20interested%20in%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-500 transition"
  >
    <FaWhatsapp />
  </a>

</div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="logo" className="h-12" />
          </Link>

          {/* ===== DESKTOP MENU ===== */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">

            <li><Link to="/" className={activeLink("/")}>Home</Link></li>
            <li><Link to="/about" className={activeLink("/about")}>About Us</Link></li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="hover:text-[#008300]">Services</span>
                <MdKeyboardArrowDown />
              </div>

              {isServiceOpen && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-lg mt-2">
                  <ul className="divide-y">
                    {services.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.path}
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

            <li><Link to="/blog" className={activeLink("/blog")}>Blog</Link></li>
            <li><Link to="/faq" className={activeLink("/faq")}>FAQ</Link></li>
            <li><Link to="/portfolio" className={activeLink("/portfolio")}>Portfolio</Link></li>
            <li><Link to="/career" className={activeLink("/career")}>Careers</Link></li>
            <li><Link to="/project" className={activeLink("/project")}>Project</Link></li>
            <li><Link to="/contact" className={activeLink("/contact")}>Contact</Link></li>
          </ul>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden lg:flex items-center space-x-6">
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

          {/* ===== HAMBURGER (Tablet + Mobile) ===== */}
          <button
            className="lg:hidden border p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MdMenu className="text-2xl" />
          </button>

        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeAll}
        />
      )}

      {/* ================= LEFT SLIDE MENU ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        lg:hidden`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <img src={logo} alt="logo" className="h-10" />
          <button onClick={closeAll}>
            <MdClose className="text-3xl" />
          </button>
        </div>

        {/* MOBILE MENU ITEMS */}
        <ul className="p-6 space-y-5 font-medium text-lg">
          <li><Link to="/" onClick={closeAll}>Home</Link></li>
          <li><Link to="/about" onClick={closeAll}>About Us</Link></li>

          {/* SERVICES MOBILE DROPDOWN */}
          <li>
            <button
              onClick={() => setIsServiceOpen(!isServiceOpen)}
              className="flex justify-between w-full"
            >
              Services
              <MdKeyboardArrowDown />
            </button>

            {isServiceOpen && (
              <ul className="ml-4 mt-3 border-l space-y-3">
                {services.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      onClick={closeAll}
                      className="block pl-4 hover:text-[#008300]"
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

      {/* SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
