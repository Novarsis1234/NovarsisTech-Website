import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Novarsis Technology | Get in Touch With Our IT Experts
        </title>

        <meta
          name="description"
          content="Contact Novarsis Technology for web development, app development, digital marketing, and IT solutions. Reach out via phone, email, or our contact form."
        />

        <meta
          name="keywords"
          content="Contact Novarsis Technology, IT company contact India, software development company contact, digital marketing agency contact, NovarsisTech support"
        />

        <link rel="canonical" href="https://novarsistech.com/contact" />
        <meta name="robots" content="index, follow" />

        {/* ===== GEO SEO ===== */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Novarsis Technology" />
        <meta
          property="og:description"
          content="Get in touch with our IT experts to discuss your project and grow your business with innovative digital solutions."
        />
        <meta property="og:url" content="https://novarsistech.com/contact" />
        <meta
          property="og:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ===== TWITTER ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Novarsis Technology" />
        <meta
          name="twitter:description"
          content="Have a project in mind? Contact our team today for professional IT services and solutions."
        />
        <meta
          name="twitter:image"
          content="https://novarsistech.com/Images/novarsis-og-image.jpg"
        />

        {/* ===== CONTACT PAGE SCHEMA ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"ContactPage",
            "name":"Contact Novarsis Technology",
            "url":"https://novarsistech.com/contact",
            "publisher":{
              "@type":"Organization",
              "name":"Novarsis Technology",
              "url":"https://novarsistech.com",
              "logo":"https://novarsistech.com/logo.png"
            }
          }
        `}
        </script>

        {/* ===== LOCAL BUSINESS SCHEMA (LOCAL SEO BOOST) ===== */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"LocalBusiness",
            "name":"Novarsis Technology",
            "image":"https://novarsistech.com/logo.png",
            "url":"https://novarsistech.com",
            "telephone":"+91 91117 20303",
            "email":"info@novarsistech.com",
            "address":{
              "@type":"PostalAddress",
              "streetAddress":"301, 3rd Floor, Vikram Urban, Vijay Nagar",
              "addressLocality":"Indore",
              "addressRegion":"MP",
              "postalCode":"452010",
              "addressCountry":"IN"
            },
            "sameAs":[
              "https://www.facebook.com/NovarsisTechindia/",
              "https://www.instagram.com/novarsistech/",
              "https://www.linkedin.com/company/87981778/",
              "https://x.com/novarsistech_"
            ]
          }
        `}
        </script>

        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script type="application/ld+json">
          {`
          {
           "@context":"https://schema.org",
           "@type":"BreadcrumbList",
           "itemListElement":[
            {
             "@type":"ListItem",
             "position":1,
             "name":"Home",
             "item":"https://novarsistech.com"
            },
            {
             "@type":"ListItem",
             "position":2,
             "name":"Contact",
             "item":"https://novarsistech.com/contact"
            }
           ]
          }
        `}
        </script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/Images/bannerImage.png"
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
            {/* ✅ SEO OPTIMIZED H1 */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Novarsis Technology
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative bg-white py-24 px-4 overflow-hidden">
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
              <p className="text-gray-600 mb-10 max-w-lg leading-relaxed">
                Have a project in mind? Explore our{" "}
                <Link to="/services" className="text-[#008300]">
                  IT services
                </Link>{" "}
                or learn more{" "}
                <Link to="/about" className="text-[#008300]">
                  about our experts
                </Link>
                .
              </p>
            </Reveal>

            {/* ================= CONTACT INFO ================= */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#008300] text-[#008300] text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Anytime</p>
                  <a
                    href="tel:+919111720303"
                    className="text-black font-semibold text-lg hover:text-[#008300] transition"
                  >
                    +91 91117 20303
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#008300] text-[#008300] text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Send Email</p>
                  <a
                    href="mailto:info@novarsistech.com"
                    className="text-black font-semibold text-lg hover:text-[#008300] transition"
                  >
                    info@novarsistech.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/919111720303?text=Hello%20Novarsis%20Tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-semibold text-lg hover:text-green-500 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 min-w-14 min-h-14 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-[#008300] text-[#008300] text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Visit Office</p>

                  <a
                    href="https://maps.app.goo.gl/1VWNa3CsZPsuK6YEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Novarsis Technology Office Location - Vijay Nagar Indore"
                    className="text-black font-semibold text-lg hover:text-[#008300] transition"
                  >
                    <address className="not-italic">
                      301, 3rd Floor, Vikram Urban, Vijay Nagar, Indore, MP
                      452010
                    </address>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= SOCIAL MEDIA ================= */}
            <div className="mt-12">
              <p className="text-black font-semibold text-lg mb-4">
                Follow Us On
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: <FaFacebookF />,
                    link: "https://www.facebook.com/NovarsisTechindia/",
                    label: "Facebook",
                  },
                  {
                    icon: <FaTwitter />,
                    link: "https://x.com/novarsistech_",
                    label: "Twitter",
                  },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/novarsistech/",
                    label: "Instagram",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    link: "https://www.linkedin.com/company/87981778/",
                    label: "LinkedIn",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    aria-label={`Novarsis Technology ${item.label}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white text-[#008300] rounded-lg shadow-xl hover:bg-[#008300] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                  </a>
                ))}
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
