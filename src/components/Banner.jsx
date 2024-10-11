import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Bg from '../assets/bg2.webp';

const StatsBanner = () => {
  // Use Intersection Observer to trigger counting when the banner is in view
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust the threshold as needed (0.2 means 20% of the banner is in view)
  });

  return (
    <div 
      ref={ref} 
      className="relative bg-red-800 w-full text-white"
      style={{ 
        backgroundImage: `url(${Bg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-60"></div>

      {/* Container with padding */}
      <div className="relative z-10 container mx-auto mt-24 py-28 px-8 flex flex-col lg:flex-row justify-around items-center text-center space-y-8 lg:space-y-0">
        
        {/* Years Box */}
        <div className="flex flex-col items-center space-y-2">
          <div className="border-4 border-gray-50 px-4 py-2 text-4xl lg:text-6xl font-bold">
            {inView ? <CountUp end={10} duration={3} /> : "0"}+
          </div>
          <span className="text-xl lg:text-2xl font-medium">Years</span>
        </div>

        {/* Projects Box */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-4xl lg:text-4xl font-bold">
            {inView ? <CountUp end={50} duration={3} /> : "0"}+
          </p>
          <p className="text-lg lg:text-md">Projects</p>
        </div>

        {/* Team Strength Box */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-4xl lg:text-4xl font-bold">
            {inView ? <CountUp end={50} duration={3} /> : "0"}+
          </p>
          <p className="text-lg lg:text-md">Team Strength</p>
        </div>

        {/* Machinery Value Box */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-4xl lg:text-4xl font-bold">
            {inView ? <CountUp end={50} duration={3} /> : "0"}+
          </p>
          <p className="text-lg lg:text-md">Machinery Value</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
