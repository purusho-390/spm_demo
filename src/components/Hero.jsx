import React, { useState, useEffect, useMemo } from 'react';

// Import images from the assets folder
import ConstructionSite from '../assets/bgp (1).webp';
import InteriorDesign from '../assets/bgp (2).webp';
import RealEstate from '../assets/bgp (3).webp';
import ArchitecturalDesign from '../assets/bgp (4).webp';
import ModernLiving from '../assets/bgp (5).webp';
import ConstructionWorkers from '../assets/bgp (6).webp';

// Image data array
const images = [
  { src: ConstructionSite, alt: 'REAL ESTATE' },
  { src: InteriorDesign, alt: 'CONSTRUCTION SITE' },
  { src: RealEstate, alt: 'ARCHITECTURAL DESIGN' },
  { src: ArchitecturalDesign, alt: 'INTERIOR DESIGN' },
  { src: ModernLiving, alt: 'MODERN LIVING' },
  { src: ConstructionWorkers, alt: 'BUILDING CONTRACT' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle slide change with interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Memoize the formatted text to avoid unnecessary recalculations
  const formatText = useMemo(() => {
    return images.map((image) => {
      const upperCaseText = image.alt.toUpperCase();
      const words = upperCaseText.split(' ');
      const firstWord = words[0]; // Bold first word
      const secondWord = words.slice(1).join(' ');
      return (
        <span key={image.alt} className="text-4xl md:text-5xl font-semibold text-red-800">
          {firstWord}{' '}
          <span className="font-thin text-red-800">{secondWord}</span>
        </span>
      );
    });
  }, [images]);

  return (
    <section
      id="home"
      className="w-full h-[90vh] md:h-[91vh] flex items-center justify-center bg-gray-100 relative overflow-hidden"
    >
      <div className="w-full h-full overflow-hidden relative">
        <div className="slider relative w-full h-full">
          {/* Preloading images */}
          {images.map((image) => (
            <link rel="preload" href={image.src} as="image" key={image.alt} />
          ))}

          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? 'eager' : 'lazy'} // Lazy load images except the first one
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '90vh' }} // Ensure the image takes a comfortable height
            />
          ))}
        </div>

        {/* Centered Text Box with synchronized transition */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-center py-8 px-8 shadow-md transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {formatText[index]}
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-red-800' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)} // Allow clicking dots to change slides
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
