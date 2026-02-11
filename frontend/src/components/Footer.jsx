import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Reveal from "./Reveal";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* ======== FOOTER TOP GREEN UNDERLINE ======== */}
      <div className="h-[5px] w-full bg-[#008300]"></div>

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        {/* ===== ABOUT ===== */}
        <div>
          <Reveal>
            <img
              src="/Images/FooterLogo.jpeg"
              alt="Novarsis Technology"
              className="
    mx-auto
    w-44 sm:w-48 md:w-52 lg:w-60
    h-auto
    mb-4
    object-contain
  "
            />
          </Reveal>
          <p className="text-sm text-black/80 leading-relaxed text-justify">
            Novarsis Technology is a trusted IT solutions company providing web
            development, mobile apps, UI/UX design, CMS solutions and digital
            marketing services to help businesses grow digitally.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-list">
            <li>
              <Link to="/webdeveloper">Web Development</Link>
            </li>
            <li>
              <Link to="/appdevelopment">App Development</Link>
            </li>
            <li>
              <Link to="/digitalmarketing">UI / UX Design</Link>
            </li>
            <li>
              <Link to="/graphicdesigning">CMS Development</Link>
            </li>
            <li>
              <Link to="/uiuxdesign">Graphic Designing</Link>
            </li>
            <li>
              <Link to="/cmsdevelopment">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/seooptimization">SEO Optimization</Link>
            </li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="footer-title">Contact Info</h3>
          <ul className="space-y-4 text-sm text-black/80">
           <li className="flex gap-3">
  <FaMapMarkerAlt className="text-[#008300] mt-1" />
  <a
    href="https://maps.app.goo.gl/6uPVnRKNiNk1GMX96, 3rd Floor, Vikram Urban, Vijay Nagar, Indore, MP 452010"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    301, 3rd Floor, Vikram Urban, Vijay Nagar, Indore, MP 452010
  </a>
</li>

<li className="flex gap-3">
  <FaPhoneAlt className="text-[#008300]" />
  <a href="tel:+919111720303" className="hover:underline">
    +91 91117 20303
  </a>
</li>

<li className="flex gap-3">
  <FaEnvelope className="text-[#008300]" />
  <a href="mailto:info@novarsistech.com" className="hover:underline">
    info@novarsistech.com
  </a>
</li>


            <li className="flex gap-3">
              <FaClock className="text-[#008300] mt-1" />
              <span>
                <strong>Mon – Sat:</strong> 10:00 AM – 6:00 PM
              </span>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-[#008300] mt-1" />
              <span>
                <strong>Client Support:</strong> 24×7 via Call, Email & WhatsApp
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="bg-[#008300]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[
              <FaFacebookF />,
              <FaTwitter />,
              <FaInstagram />,
              <FaLinkedinIn />,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center bg-white text-[#008300] rounded-md cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/90 text-center">
            © 2025 <span className="font-semibold">Novarsis Technology</span>.
            All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ===== CUSTOM STYLES ===== */}
      <style>
        {`
          .footer-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #008300;
            border-left: 4px solid #008300;
            padding-left: 0.75rem;
          }

          .footer-list li {
            margin-bottom: 0.5rem;
          }

          .footer-list a {
            color: rgba(0,0,0,0.75);
            font-size: 0.9rem;
            transition: 0.25s;
          }

          .footer-list a:hover {
            color: #008300;
            padding-left: 6px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
