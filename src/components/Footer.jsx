import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const navItems = ['home', 'about', 'services', 'works', 'testimonials', 'contact'];
  
  const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook size={28} />, label: "Facebook" },
    { href: "https://instagram.com", icon: <FaInstagram size={28} />, label: "Instagram" },
    { href: "https://whatsapp.com", icon: <FaWhatsapp size={28} />, label: "WhatsApp" },
    { href: "https://youtube.com", icon: <FaYoutube size={28} />, label: "YouTube" },
  ];

  return (
    <footer className="py-12 bg-red-800 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Overview of the Business */}
          <div className="lg:text-left text-center">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">About SPM Enterprises</h4>
            <p className="text-sm lg:text-base leading-relaxed">
              SPM Enterprises is a leading construction and real estate company committed to delivering quality and innovation in every project. Our team ensures customer satisfaction through personalized services and attention to detail.
            </p>
          </div>

          {/* Contact Information */}
          <div className="lg:text-left text-center">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h4>
            <p className="text-sm lg:text-base">Phone: <a href="tel:+919840438849" className="hover:text-gray-200 transition duration-300">+91 9840438849</a></p>
            <p className="text-sm pt-3 lg:text-base">Address: No.23, Rajiv Gandhi Nagar, Pandur, Guduvanchery - 603202</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="flex flex-col lg:flex-row lg:justify-end space-y-2 lg:space-y-0 lg:space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-200 transition duration-300 cursor-pointer text-base lg:text-lg"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center mt-10 space-x-6">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-gray-200 transition duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-10">
          <p className="text-sm lg:text-base text-gray-100">&copy; 2024 SPM Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
