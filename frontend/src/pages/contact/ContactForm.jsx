import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, clearContactStatus } from "../../slice/contactSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(submitContactForm(formData));
    }
    setErrors(validationErrors);
  };

  useEffect(() => {
    if (success || error) {
      if (success) {
        setFormData({ name: "", mobile: "", subject: "", message: "" });
        setErrors({});
      }
      setTimeout(() => dispatch(clearContactStatus()), 3000);
    }
  }, [success, error, dispatch]);

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div
        className="
          max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl
          mx-auto bg-white rounded-2xl shadow-xl
          p-6 sm:p-8 md:p-10 lg:p-12
          border border-gray-100
        "
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#008300] mb-2">
          Contact <span className="text-[#008300]">Us</span>
        </h1>

        <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you soon.
        </p>

        {/* Status Messages */}
        {success && (
          <p className="text-green-600 text-center mb-3 text-sm sm:text-base">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center mb-3 text-sm sm:text-base">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full p-3 sm:p-3.5
                text-sm sm:text-base
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#008300]
                transition
              "
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="
                w-full p-3 sm:p-3.5
                text-sm sm:text-base
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#008300]
                transition
              "
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.mobile}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="
                w-full p-3 sm:p-3.5
                text-sm sm:text-base
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#008300]
                transition
              "
            />
            {errors.subject && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="
                w-full p-3 sm:p-3.5
                text-sm sm:text-base
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-[#008300]
                transition resize-none
              "
            />
            {errors.message && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 sm:py-3.5
              text-sm sm:text-base
              bg-gradient-to-r from-[#008300] to-[#008300]
              text-white font-semibold
              rounded-md shadow-lg
              hover:opacity-90 transition
            "
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
