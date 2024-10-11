import React from "react";
import Logo from '../assets/LOGO.svg';

const StatsBanner = () => {
  return (
    <div className="relative bg-red-800 w-full text-white mt-12">
      {/* Fullwidth Container */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-700 to-red-800 opacity-60"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto py-12 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center lg:items-start lg:space-x-12 space-y-8 lg:space-y-0 w-full">
          
          {/* Left Container - Logo Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-full h-full object-cover"
                loading="lazy" // Lazy load the logo for better performance
              />
            </div>
          </div>

          {/* Right Container - Vision Statement */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 text-center lg:text-left pt-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Our Vision</h2>
            <p className="text-base sm:text-lg lg:text-3xl italic leading-relaxed">
              "அகர முதல எழுத்தெல்லாம் ஆதி<br />
              பகவன் முதற்றே உலகு."
            </p>
            <p className="text-sm sm:text-md lg:text-xl font-light">
              A is the first of all letters; the first and foremost is God in the world.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default React.memo(StatsBanner); // Prevent unnecessary re-renders
