import React from 'react';

const Clients = () => {
  const clients = [
    'src/assets/ma images/clients/1.jpg',
    'src/assets/ma images/clients/2.jpg',
    'src/assets/ma images/clients/3.jpg',
    'src/assets/ma images/clients/4.jpg',
    'src/assets/ma images/clients/5.jpg',
    'src/assets/ma images/clients/6.jpg',
    'src/assets/ma images/clients/7.jpg',
    'src/assets/ma images/clients/8.jpg',
    'src/assets/ma images/clients/9.jpg',
    'src/assets/ma images/clients/10.jpg',
    'src/assets/ma images/clients/11.jpg',
    'src/assets/ma images/clients/12.jpg',
  ];

  return (
    <section id="clients" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-gray-800">Our Clients</h3>
          <p className="text-gray-600 mt-2">Meet our happy clients</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-40 border border-gray-300 bg-white transition-transform hover:scale-105"
            >
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
