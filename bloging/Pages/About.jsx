// import React from "react";

// const About = () => {
//   return (
//     <div style={{ backgroundColor: "white", height: "100vh" }}>
//       <h1>About Page</h1>
//       <p>Welcome to the About Page!</p>
//     </div>
//   );
// };

// export default About; // Make sure to use default export



import React from "react";

const About = () => {
  const services = [
    {
      img: "path/to/card.png",
      title: "DESIGNING",
      description: `MA Graphics offers a range of design services, including logo design,
      brochure design, banner design, and more. Our experienced designers will
      work with you to create custom designs.`,
    },
    {
      img: "path/to/web.png",
      title: "Website Development",
      description: `At MA Graphics, we offer tailored website development services, including:
      - Responsive Design for all devices.
      - Custom Features to meet your needs.
      - E-Commerce Solutions with secure integration.
      - SEO Optimization for better visibility.
      - Ongoing Support for updates and maintenance.`,
    },
    {
      img: "path/to/card3.png",
      title: "Panaflex Printing",
      description: `MA Graphics offers Panaflex printing services for a variety of products,
      including banners, signs, posters, and more. We specialize in custom
      designs, lettering, and graphics to create eye-catching signs.`,
    },
    {
      img: "path/to/card5.png",
      title: "Promotional Items",
      description: `MA Graphics provides promotional items such as mugs, pens, keychains,
      and other items with custom designs and branding.`,
    },
    {
      img: "path/to/card6.png",
      title: "STATIONERY",
      description: `MA Graphics offers a wide range of stationery products, such as
      business cards, letterheads, envelopes, and more.`,
    },
    {
      img: "path/to/card7.png",
      title: "OFFSET PRINTING",
      description: `MA Graphics offers high-quality offset printing services for a variety
      of products, including books, brochures, flyers, magazines, catalogs,
      and more.`,
    },
    {
      img: "path/to/card8.png",
      title: "COLORS PRINT",
      description: `MA Graphics provides color printing services for a variety of products,
      specializing in full-color flyers, brochures, catalogs, books, and more.`,
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">OUR SERVICES</h1>
        <p className="text-gray-600">
          Ink Your Ideas, Banner Your Brand – Your Printing Partner
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-32 h-32 mx-auto mb-5"
            />
            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
            <p className="text-gray-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

