import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../../slice/teamSlice";
import { motion } from "framer-motion";

const TeamPage = () => {
  const dispatch = useDispatch();
  const { team = [], loading, error } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#008300]/10 rounded-full"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-[#008300]/10 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-4">
          Meet Our <span className="text-[#008300]">Expert Team</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-base sm:text-lg">
          Passionate professionals dedicated to building innovative, reliable,
          and scalable digital solutions for growing businesses.
        </p>

        {loading && <p className="text-gray-600">Loading team members...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.length > 0 ? (
            team.map((member, index) => (
              <motion.div
                key={member._id || member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl shadow-lg
                hover:shadow-2xl transition-all duration-500
                hover:-translate-y-2 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-72 bg-gray-50 overflow-hidden">
                  {/* Image Accent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                  <img
                    src={member.image || "/Images/default-user.png"}
                    alt={member.name}
                    className="w-full h-full object-contain object-top
                    transform transition-transform duration-700
                    group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#008300] font-medium">
                    {member.title}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-1 bg-[#008300] transition-all duration-500
                  group-hover:w-24 rounded-full"></div>
              </motion.div>
            ))
          ) : (
            !loading && (
              <p className="text-gray-500 col-span-full">
                No team members found.
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
