import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const SocialBar = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/NovarsisTechindia/" },
    { icon: <FaTwitter />, url: "https://x.com/novarsistech_" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/87981778/" },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919111720303?text=Hello%20Novarsis%20Tech%2C%20I%20am%20interested%20in%20your%20services.",
    },
    { icon: <FaInstagram />, url: "https://www.instagram.com/novarsistech/" },
  ];

  return (
    <div
      className="
        fixed top-1/2 left-0
        -translate-y-1/2
        hidden lg:flex
        flex-col space-y-4
        p-2 z-50
      "
    >
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white
            p-6
            text-[#008300]
            rounded-full
            shadow-lg
            hover:bg-[#008300]
            hover:text-white
            transition
            transform hover:translate-x-1
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
