import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./about";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center
     items-center align-center space-y-10 md:space-y-28 py-40"
    >
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  );
}
