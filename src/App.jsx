import React from "react";
import { Hero } from "./Components/Hero";
import { Services } from "./Components/Services";
import { Contact } from "./Components/Contact";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
