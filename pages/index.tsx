import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Contact from "./Contact";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="snap-center space-y-20 md:space-y-32 pt-8 md:pt-32  ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
