const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-red-800 via-red-700 to-red-800 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        {/* Content on the left side (text + video on mobile) */}
        <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0 text-center md:text-left">

          {/* Title */}
          <h2 className="text-5xl font-extrabold text-gray-50 mb-6 md:mb-8">About Us</h2>

          {/* Video inside the title for mobile */}
          <div className="md:hidden mb-6 flex justify-center">
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" 
                src="https://www.youtube.com/embed/FcTIAwc_bwY?si=ggSThZAnYcB2tdb5" 
                title="YouTube video player" 
                frameBorder="0" 
                loading="lazy" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content */}
          <ul className="list-disc list-inside p-0 text-left space-y-2 mb-6 text-lg leading-relaxed px-2 md:px-0 text-gray-100">
            <li>A trusted leader in Tamil Nadu's construction and real estate industry.</li>
            <li>Specializing in custom-built homes, from 2BHK and 3BHK to luxurious duplexes.</li>
            <li>Offering innovative architectural design and tailored interior solutions.</li>
            <li>Committed to quality, customer satisfaction, and bringing your vision to life.</li>
          </ul>

          {/* Download Brochure Button */}
          <a
            href="/SPM Enterprises.pdf" // Updated path to the public folder
            download
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 font-semibold transform hover:translate-y-1">
            Download Brochure
          </a>

        </div>

        {/* Video on the right side for larger screens */}
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg" 
              src="https://www.youtube.com/embed/FcTIAwc_bwY?si=ggSThZAnYcB2tdb5" 
              title="YouTube video player" 
              frameBorder="0" 
              loading="lazy" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
