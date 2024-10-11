import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_etsyu1n', 'template_hqpfy3m', form.current, 'K5Hk5CLpSE2vk-sNa')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-800">Contact Us</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center"
            >
              <FontAwesomeIcon icon={contact.icon} className={`${contact.iconColor} mr-3 h-8 sm:h-10`} />
              <div>
                <h3 className="text-sm sm:text-md font-semibold text-gray-600">{contact.title}</h3>
                <p className="text-gray-800">{contact.details}</p>
              </div>
            </a>
          ))}

          {/* Google Maps */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 col-span-1 sm:col-span-2">
            <h3 className="text-sm sm:text-md font-semibold text-gray-600 text-center mb-2">Geo Location</h3>
            <div className="w-full h-48 sm:h-64">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.543990027919!2d80.06458391522163!3d12.828223690945527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f8f7d2ef209%3A0x2f43cbe0aeb6c44a!2sRajiv%20Gandhi%20Nagar%2C%20Pandur%2C%20Guduvanchery%2C%20Tamil%20Nadu%20603202!5e0!3m2!1sen!2sin!4v1697027780076!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <InputField id="name" name="user_name" label="Your Name" required />
            <InputField id="email" name="user_email" label="Your Email" type="email" required />
            <TextAreaField id="message" name="message" label="Your Message" required />
            <div className="text-center">
              <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-800 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// InputField Component
const InputField = ({ id, name, label, type = 'text', required }) => (
  <div>
    <label className="block text-gray-600 font-medium mb-1" htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200"
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
    />
  </div>
);

// TextAreaField Component
const TextAreaField = ({ id, name, label, required }) => (
  <div>
    <label className="block text-gray-600 font-medium mb-1" htmlFor={id}>{label}</label>
    <textarea
      id={id}
      name={name}
      rows="4"
      className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200"
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
    ></textarea>
  </div>
);

// Contact Info Data
const contactInfo = [
  {
    title: 'WhatsApp',
    details: (
      <a href="https://wa.me/919840438849" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        +91 9840438849
      </a>
    ),
    link: "tel:+919840438849",
    icon: faWhatsapp,
    iconColor: "text-green-800",
  },
  {
    title: 'Facebook',
    details: 'spmenterprises',
    link: "https://www.facebook.com/yourpage",
    icon: faFacebook,
    iconColor: "text-blue-800",
  },
  {
    title: 'Instagram',
    details: 'spmenterprises',
    link: "https://www.instagram.com/yourinstagramhandle",
    icon: faInstagram,
    iconColor: "text-rose-800",
  },
  {
    title: 'Email',
    details: 'manikandaprabhu.spm',
    link: "mailto:manikandaprabhu.spm@gmail.com",
    icon: faEnvelope,
    iconColor: "text-amber-500",
  },
];

export default ContactUs;
