import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Reveal from "../../components/Reveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/novarsis-home3.webp"
        />

        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300] transition">
                Home
              </Link>
              <span className="text-[#008300] mx-1">/</span> Contact
            </p>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative bg-white py-24 px-4 overflow-hidden">

        {/* ===== Decorative Green Circles ===== */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008300]/10 rounded-full"></div>
 
        <div className="absolute bottom-24 left-1/4 w-72 h-72 bg-[#008300]/10 rounded-full"></div>
       

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start px-6">

          {/* ===== LEFT CONTENT ===== */}
          <div>
            <Reveal>
              <p className="text-[#008300] uppercase text-sm font-semibold mb-3 tracking-widest">
                Contact With Us
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                Feel Free to Get in{" "}
                <span className="text-[#008300]">Touch</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-gray-600 mb-12 max-w-lg leading-relaxed">
                Have a project in mind or need expert guidance?  
                Our team is here to help you turn your ideas into powerful digital solutions.
              </p>
            </Reveal>

            {/* Contact Info */}
            <div className="space-y-8">

              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#008300] text-[#008300] text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Anytime</p>
                  <p className="text-black font-semibold text-lg">
                    +91 91117 20303
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#008300] text-[#008300] text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Send Email</p>
                  <p className="text-black font-semibold text-lg">
                    info@novarsistech.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <ContactForm />
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <Reveal>
            <p className="text-[#008300] uppercase text-sm font-semibold tracking-widest">
              Our Location
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
              Visit Our <span className="text-[#008300]">Office</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with us at our workspace and explore how we collaborate
              with businesses to deliver scalable IT solutions.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="max-w-5xl mx-auto h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Novarsis Tech Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4578262972927!2d75.8875728750832!3d22.74838477936685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44772b3af2956b11%3A0x238e732b1eb8401e!2sNovarsistech%20IT%20Solution!5e0!3m2!1sen!2sin!4v1761650473171!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Contact;
