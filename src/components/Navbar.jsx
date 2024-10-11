import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'; 
import Logo from '../assets/LOGO.svg';

const Navbar = () => {
  const navItems = ['home', 'about', 'services', 'works', 'testimonials', 'contact'];
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Update menu visibility based on viewport width
  useEffect(() => {
    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 768;
      if (isNowDesktop && isOpen) setIsOpen(false);
      setIsDesktop(isNowDesktop);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-lg z-50 transition-all duration-300" aria-label="Main navigation">
      <div className="container mx-auto p-2 md:px-8 md:py-1 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="SPM Enterprises Logo - Building construction company" className="h-12 md:h-14 lg:h-20" /> {/* Adjust height as needed */}
        </div>

        {/* Navigation Items (Desktop) */}
        {isDesktop ? (
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => (
              <Link
                to={item}
                key={item}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-red-900 transition-colors duration-300 cursor-pointer text-base lg:text-lg font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <a
              href="tel:+919176517841"
              className="flex items-center px-4 py-2 bg-red-800 text-white rounded-lg shadow-md hover:bg-black transition duration-300 font-semibold"
              aria-label="Phone enquiry"
            >
              <FaPhoneAlt className="mr-2" /> Enquiry
            </a>
          </div>
        ) : (
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900" aria-controls="mobile-menu" aria-expanded={isOpen}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && !isDesktop && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col p-2 space-y-4">
            {navItems.map((item) => (
              <Link
                to={item}
                key={item}
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-600 transition-colors duration-300 cursor-pointer text-lg font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <a
              href="tel:+919840438849"
              onClick={toggleMenu}
              className="flex items-center px-4 py-2 bg-red-800 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 font-semibold text-center"
              aria-label="Phone enquiry"
            >
              <FaPhoneAlt className="mr-2" /> Enquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
