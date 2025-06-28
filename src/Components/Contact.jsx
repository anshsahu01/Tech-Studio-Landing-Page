
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 bg-gray-100 text-center">
      <h3 className="text-3xl font-semibold mb-6 text-indigo-600">Get In Touch</h3>
      <p className="mb-6 text-gray-700">We’d love to hear about your project or idea!</p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border border-gray-300"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded border border-gray-300"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

