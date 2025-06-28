// src/components/Services.jsx
import React from "react";

const services = [
  { title: "UI/UX Design", desc: "Modern and minimal interface design for all platforms." },
  { title: "Web Development", desc: "Responsive, fast and secure websites & apps." },
  { title: "Brand Strategy", desc: "Creating brand identity and digital presence." },
];

export const Services = () => {
  return (
    <section id="services" className="px-4 py-16 bg-white text-center">
      <h3 className="text-3xl font-semibold mb-10 text-indigo-600">Our Services</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 shadow hover:shadow-lg transition rounded-lg bg-gray-50"
          >
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

