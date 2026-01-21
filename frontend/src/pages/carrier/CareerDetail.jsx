import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareers } from "../../slice/careerSlice";
import { Briefcase, MapPin, Clock } from "lucide-react";

const CareerDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { careers = [], loading } = useSelector(
    (state) => state.career
  );

  useEffect(() => {
    if (!careers.length) {
      dispatch(fetchCareers());
    }
  }, [dispatch, careers.length]);

  const job = careers.find(
    (item) =>
      String(item.id) === id || String(item._id) === id
  );

  if (loading) {
    return <p className="text-center py-20">Loading job details...</p>;
  }

  if (!job) {
    return (
      <p className="text-center py-20 text-red-500">
        Job not found
      </p>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <Link
          to="/career"
          className="text-[#008300] font-semibold mb-6 inline-block"
        >
          ← Back to Careers
        </Link>

        <h1 className="text-4xl font-bold text-[#008300] mb-4">
          {job.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
          <span className="flex items-center gap-1">
            <MapPin size={18} /> {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={18} /> {job.type}
          </span>
          {job.experience && (
            <span className="flex items-center gap-1">
              <Briefcase size={18} /> {job.experience}
            </span>
          )}
        </div>

        <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-10">
          {job.description}
        </div>

        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-[#008300] to-[#1E3A8A]
                     text-white px-8 py-3 rounded-xl font-semibold
                     hover:scale-105 transition"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default CareerDetail;
