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
    <footer className="bg-[#008300] text-white pt-20 pb-6">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* ========== ABOUT COMPANY ========== */}
        <div>
          <Reveal>
            <img
              src="/Images/Novarsis-Logo-For-Footer-Pic-600x115.png"
              alt="Novarsis Technology"
              className="h-12 mb-4"
            />
          </Reveal>
          <Reveal>
            <p className="text-white/80 text-sm leading-relaxed text-justify">
              Novarsis Technology is a trusted IT solutions company providing
              web development, mobile apps, UI/UX design, CMS solutions and
              digital marketing services to help businesses grow digitally.
            </p>
          </Reveal>
        </div>

        {/* ========== QUICK LINKS ========== */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* ========== SERVICES ========== */}
        <div>
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-list">
            <li><Link to="/webdeveloper">Web Development</Link></li>
            <li><Link to="/appdevelopment">App Development</Link></li>
            <li><Link to="/digitalmarketing">UI / UX Design</Link></li>
            <li><Link to="/graphicdesigning">CMS Development</Link></li>
            <li><Link to="/uiuxdesign">Graphic Designing</Link></li>
            <li><Link to="/cmsdevelopment">Digital Marketing</Link></li>
            <li><Link to="/seooptimization">SEO Optimization</Link></li>
          </ul>
        </div>

        {/* ========== CONTACT & TIMING ========== */}
        <div>
          <h3 className="footer-title">Contact Info</h3>
          <ul className="space-y-4 text-sm text-white/80">

            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-[#f1a7a7] mt-1" />
              <a
                href="https://maps.app.goo.gl/1VWNa3CsZPsuK6YEA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                301, 3rd Floor, Vikram Urban, Vijay Nagar, Indore, MP 452010
              </a>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-[#f1a7a7]" />
              <a href="tel:+919111720303" className="hover:text-white">
                +91 91117 20303
              </a>
            </li>

            <li className="flex gap-3">
              <FaEnvelope className="text-[#f1a7a7]" />
              <a
                href="mailto:info@novarsistech.com"
                className="hover:text-white"
              >
                info@novarsistech.com
              </a>
            </li>

            <li className="flex gap-3">
              <FaClock className="text-[#f1a7a7] mt-1" />
              <p>
                Mon – Sat:{" "}
                <span className="text-white font-medium">
                  10:00 AM – 6:00 PM
                </span>
              </p>
            </li>
             <li className="flex gap-3">
  <FaPhoneAlt className="text-[#f1a7a7] mt-1" />
  <p>
    Client Support:{" "}
    <span className="text-white font-medium">
      24×7 via Call , Email & WhatsApp
    </span>
  </p>
</li>


          </ul>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-white/30 pt-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[
              ["https://www.facebook.com/NovarsisTechindia/", <FaFacebookF />],
              ["https://x.com/novarsistech_", <FaTwitter />],
              ["https://www.instagram.com/novarsistech/", <FaInstagram />],
              ["https://www.linkedin.com/company/87981778/", <FaLinkedinIn />],
            ].map(([url, icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#008300] rounded-md hover:bg-white/30 transition"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/80 text-center">
            © 2025{" "}
            <span className="font-semibold text-white">
              Novarsis Technology
            </span>. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ================= FOOTER UTILITY STYLES ================= */}
      <style>
        {`
          .footer-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            border-left: 4px solid #f1a7a7;
            padding-left: 0.75rem;
          }
          .footer-list li {
            margin-bottom: 0.5rem;
          }
          .footer-list a {
            color: rgba(255,255,255,0.8);
            font-size: 0.9rem;
            transition: 0.2s;
          }
          .footer-list a:hover {
            color: #ffffff;
            padding-left: 4px;
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
