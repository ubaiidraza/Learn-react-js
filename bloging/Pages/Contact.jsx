import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-8">
      <div className="w-11/12 max-w-4xl mx-auto mt-8 text-gray-800 font-serif">
        <h4 className="text-xl font-bold text-primary mb-2 capitalize">Contact Us</h4>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form Section */}
          <form className="space-y-4">
            <h1 className="text-2xl font-bold">Need Support!</h1>
            <p className="text-gray-600 text-base">Contact us for a quote, help to join the theme.</p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message..."
              className="w-full p-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-lg bg-[#4267B2] font-bold hover:bg-yellow-300"
            >
              Send Message
            </button>
          </form>

          {/* Map Section */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-24 h-3/4 bg-primary rounded-lg hidden lg:block"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3615.383801299157!2d67.069454!3d25.021046000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzE1LjgiTiA2N8KwMDQnMTAuMCJF!5e0!3m2!1sen!2s!4v1721402664986!5m2!1sen!2s"
              className="w-full h-96 rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mt-8 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4">
            <i className="fas fa-location-dot text-primary text-2xl"></i>
            <div>
              <h1 className="text-xl font-bold">Location</h1>
              <p className="text-gray-600">123 Your Street, Your City</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-envelope text-primary text-2xl"></i>
            <div>
              <h1 className="text-xl font-bold">Email</h1>
              <p className="text-gray-600">ma.Grafics.293@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone text-primary text-2xl"></i>
            <div>
              <h1 className="text-xl font-bold">Phone</h1>
              <p className="text-gray-600">0315-0257389</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
