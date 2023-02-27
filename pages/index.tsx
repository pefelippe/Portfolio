import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Projects from "./../src/content/Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-screen  space-y-10 md:space-y-20 py-20 md:py-40  px-8">
      <Hero />
      <Projects />
      <Skills />
      <About />
      {/* <Contact /> */}
    </div>
  );
}
