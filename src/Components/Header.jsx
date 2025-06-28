
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black bg-opacity-70 backdrop-blur text-white shadow-md"
          : "bg-transparent text-indigo-600 text-xl"
      }`}
    >
      <h1 className="text-xl font-bold">TechStudio</h1>

      <nav className="space-x-4 hidden md:flex">
        <a
          href="#services"
          className={`transition ${
            scrolled ? "text-white font-bold" : "hover:text-orange-600"
          }`}
        >
          Services
        </a>
        <a
          href="#contact"
          className={`transition ${
            scrolled ? "text-white font-semibold" : "hover:text-orange-600"
          }`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};


