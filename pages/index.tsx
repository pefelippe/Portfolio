import React from "react";

import CallToContact from "../src/components/CallToContact";
import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen space-y-20 py-20 px-10 max-w-7xl mx-auto pt-32">
      <Hero />
      <Projects />
      {/* <About /> */}
      <CallToContact />
    </div>
  );
}
