
import React from "react";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover text-center  bg-center"
      style={{ backgroundImage: "url('/hero3.jpg')" }} 
    // style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}

    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Idea Meets Tech</h2>
        <p className="text-lg md:text-xl mb-6">
          We craft beautiful digital experiences and modern tech solutions to grow your brand.
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full transition"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

