// src/components/Services.jsx
import { FaHome, FaBuilding, FaPalette, FaCouch } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Real Estate',
      description: 'We help you find the best property deals in the real estate market.',
      icon: <FaHome className="text-6xl mb-4 text-red-800" />,
    },
    {
      id: 2,
      title: 'Building Construction',
      description: 'We offer high-quality construction services from planning to completion.',
      icon: <FaBuilding className="text-6xl mb-4 text-red-800" />,
    },
    {
      id: 3,
      title: 'Architecture',
      description: 'We design functional and aesthetic spaces tailored to your needs.',
      icon: <FaPalette className="text-6xl mb-4 text-red-800" />,
    },
    {
      id: 4,
      title: 'Interior Design',
      description: 'We create stunning interior designs that elevate your living or workspace.',
      icon: <FaCouch className="text-6xl mb-4 text-red-800" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 px-4 md:px-8 lg:px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-800 mb-6">Our Services</h2>
        <p className="text-gray-700 mb-16 text-lg leading-relaxed">
          We offer a variety of services including construction, architecture design, and interior design.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl text-left transition-shadow duration-300 transform hover:scale-105"
              aria-labelledby={`service-${id}`}
            >
              {/* Icon */}
              <div className="flex justify-center">{icon}</div>
              {/* Title */}
              <h3 id={`service-${id}`} className="text-2xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
