import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";
import CallToContact from "../src/components/CallToContact";

export default function Home() {
  return (
    <div className="w-screen space-y-20 md:space-y-32 py-20 max-xl:px-10 max-w-7xl mx-auto">
      <Hero />
      <About />
      <Projects />
      <CallToContact />
    </div>
  );
}
