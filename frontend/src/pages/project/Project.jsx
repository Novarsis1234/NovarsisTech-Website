import React from "react";
import Reveal from "../../components/Reveal";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Images/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#0a0f1a]/70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <Reveal>
            <p className="text-gray-300 text-lg md:text-xl mb-2">
              <Link to="/" className="hover:text-[#008300]">
                Home
              </Link>
              <span className="mx-2 text-[#008300]">/</span> Projects
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold">
              Our Projects
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-28">

          {/* PROJECT 1 – SEO */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <img
                src="/Images/SEO LOGO11.png"
                alt="SEO Project"
                className="rounded-2xl shadow-xl"
              />
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-4xl font-extrabold text-[#008300] mb-6">
                  SEO Optimization & Digital Growth
                </h2>

                <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
                  <li>
                    Conducted in-depth keyword research and competitor analysis
                    to identify high-impact search opportunities.
                  </li>
                  <li>
                    Implemented advanced on-page SEO including meta tags,
                    structured data, internal linking, and content optimization.
                  </li>
                  <li>
                    Improved website performance through technical SEO,
                    page speed optimization, and mobile responsiveness.
                  </li>
                  <li>
                    Built high-quality backlinks and authority signals to
                    improve domain trust and ranking positions.
                  </li>
                  <li>
                    Monitored performance using analytics tools and delivered
                    monthly reports with actionable insights.
                  </li>
                </ul>

                <p className="mt-6 text-lg text-gray-600">
                  <strong>Result:</strong> Significant growth in organic traffic,
                  higher keyword rankings, increased leads, and long-term
                  digital visibility.
                </p>
              </div>
            </Reveal>
          </div>

          {/* PROJECT 2 – SCHOOL MANAGEMENT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div>
  <h2 className="text-4xl font-extrabold text-[#008300] mb-6">
    Complete School Management System
  </h2>

  <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
    <li>
      Manages admissions, student records, faculty details,
      academic sections, syllabus, and school calendar in one place.
    </li>
    <li>
      Handles online admission, fee structure, fee management,
      transport policy, hostel facilities, and student uniform details.
    </li>
    <li>
      Supports examinations, holidays, academic activities,
      school assemblies, events, and achievement records.
    </li>
    <li>
      Provides secure access for management, teachers,
      students, and parents with clear communication.
    </li>
    <li>
      Shares updates through notifications, blogs, news,
      gallery, and enquiry support for parents.
    </li>
  </ul>

  <p className="mt-6 text-lg text-gray-600">
    <strong>Result:</strong> Smooth school operations, better communication,
    organized academics, and easy access to all school information.
  </p>
</div>

            </Reveal>

            <Reveal>
              <img
                src="/Images/school2.gif"
                alt="School Management Project"
                className="rounded-2xl shadow-xl"
              />
            </Reveal>
          </div>

          {/* PROJECT 3 – HOTEL MANAGEMENT */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <img
                src="/Images/hotel1.gif"
                alt="Hotel Management Project"
                className="rounded-2xl shadow-xl"
              />
            </Reveal>

            <Reveal>
             <div>
  <h2 className="text-4xl font-extrabold text-[#008300] mb-6">
    Smart Hotel Management System
  </h2>

  <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
    <li>
      Manages hotel rooms, availability, pricing, online booking,
      guest details, and secure payment processing.
    </li>
    <li>
      Includes banquet and function hall booking with capacity details,
      packages, decorations, and enquiry forms.
    </li>
    <li>
      Supports restaurant menu management, table booking,
      special offers, opening hours, and food gallery.
    </li>
    <li>
      Displays hotel services, testimonials, rooms, events,
      and image galleries in an attractive way.
    </li>
    <li>
      Provides contact page with enquiry form, Google map,
      call, WhatsApp, and email support.
    </li>
  </ul>

  <p className="mt-6 text-lg text-gray-600">
    <strong>Result:</strong> Easy hotel operations, smooth bookings,
    better guest experience, and improved business management.
  </p>
</div>

            </Reveal>
          </div>

           {/* PROJECT 2 – Tour & Travel Management  */}
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
             <div>
  <h2 className="text-4xl font-extrabold text-[#008300] mb-6">
    Smart Tour & Travel Management System
  </h2>

  <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
    <li>
      Manages tour packages, travel destinations, itineraries,
      pricing details, and package listings on the website.
    </li>
    <li>
      Supports online booking for tours, hotels, vehicles,
      and travel services with secure payment options.
    </li>
    <li>
      Includes vehicle and traveller management such as buses,
      cars, tempo travellers, drivers, and trip schedules.
    </li>
    <li>
      Displays travel galleries, customer reviews, offers,
      and popular destinations to attract customers.
    </li>
    <li>
      Provides enquiry forms, contact details, call and WhatsApp
      support for easy customer communication.
    </li>
  </ul>

  <p className="mt-6 text-lg text-gray-600">
    <strong>Result:</strong> Easy tour bookings, better trip management,
    improved customer experience, and increased travel business growth.
  </p>
</div>


            </Reveal>

            <Reveal>
              <img
                src="/Images/travel.png"
                alt="School Management Project"
                className="rounded-2xl shadow-xl"
              />
            </Reveal>
          </div>

        </div>
      </section>
    </>
  );
};

export default Project;
