import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Contact from "./Contact";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className=" space-y-10 md:space-y-20 py-20 md:py-40  ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
