import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: "Ravi Kumar",
    testimonial: "SPM Enterprises ennoda kanavu sirandha tharamoda purinthuduthaanga.",
    position: "Business Owner",
  },
  {
    name: "Meena Devi",
    testimonial: "Team romba professional-a irundhanga, avanga oda response good.",
    position: "Business Owner",
  },
  {
    name: "Arun Prasad",
    testimonial: "Renovation work ku SPM Enterprises pakkathula santhoshama irukku.",
    position: "Property Investor",
  },
  {
    name: "Lakshmi Priya",
    testimonial: "SPM Enterprises ennoda office space-a azhaga maarithanga.",
    position: "Office Manager",
  },
  {
    name: "Karthik Raja",
    testimonial: "Start-lendhu finish varaikum romba nalla experience-a irundhuchu.",
    position: "Client",
  },
  {
    name: "Divya Shree",
    testimonial: "SPM Enterprises kooda thirumba work panna romba wish panna vendum!",
    position: "Architect",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Adjust testimonials per slide based on screen width
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 2; // 1 item on mobile, 2 on tablet and above
  const totalSlides = Math.ceil(testimonialsData.length / itemsPerSlide);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Move to the next slide
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [totalSlides]);

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerSlide;
    return testimonialsData.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-red-800 text-center mb-8">What Our Clients Say</h2>

        <div className="flex justify-center overflow-hidden">
          <motion.div 
            className="flex"
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Animate into view
            exit={{ opacity: 0, x: -100 }} // Animate out to the left
            transition={{ duration: 0.5 }} // Animation duration
            key={currentIndex} // Key prop to trigger re-render
            style={{ paddingBottom: '20px' }} // Add bottom padding here
          >
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/2 px-4">
                <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 text-center flex flex-col justify-between h-full">
                  <p className="text-gray-600 mb-4 italic text-lg">"{testimonial.testimonial}"</p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition duration-300 ${
                index === currentIndex ? 'bg-red-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)} // Allows manual navigation
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;