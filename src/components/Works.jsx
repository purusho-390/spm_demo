// src/components/Works.jsx
import img1 from '../assets/projects/p (1).webp';
import img2 from '../assets/projects/p (2).webp';
import img3 from '../assets/projects/p (3).webp';
import img4 from '../assets/projects/p (4).webp';
import img5 from '../assets/projects/p (5).webp';
import img6 from '../assets/projects/p (6).webp';
import img7 from '../assets/projects/p (7).webp';
import img8 from '../assets/projects/p (8).webp';
import img9 from '../assets/projects/p (9).webp';

const Works = () => {
  const projects = [
    {
      name: '2BHK Apartment',
      site: 'Coimbatore',
      imgSrc: img1,
    },
    {
      name: '3BHK Villa',
      site: 'Chennai',
      imgSrc: img2,
    },
    {
      name: 'Luxury Duplex House',
      site: 'Madurai',
      imgSrc: img3,
    },
    {
      name: 'Modern Interior Design',
      site: 'Tiruchirappalli',
      imgSrc: img4,
    },
    {
      name: 'Elevation Design for Commercial Complex',
      site: 'Salem',
      imgSrc: img5,
    },
    {
      name: 'Farmhouse Development',
      site: 'Erode',
      imgSrc: img6,
    },
    {
      name: 'Beachside Villa',
      site: 'Kanyakumari',
      imgSrc: img7,
    },
    {
      name: 'Premium 3BHK Apartments',
      site: 'Tiruppur',
      imgSrc: img8,
    },
    {
      name: 'Bungalow with Garden Landscaping',
      site: 'Ooty',
      imgSrc: img9,
    },
  ];

  return (
    <section id="works" className="py-18 bg-gray-50 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-800 mb-6">Our Works</h2>
        <p className="text-gray-700 mb-12 text-lg leading-relaxed">
          Check out some of our completed projects that highlight our dedication to quality and design.
        </p>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              {/* Overlay with Project Info */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-300 text-sm">{project.site}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
