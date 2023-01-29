import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import Experience from "../src/content/Experience";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center max-sm:py-20 py-40
     items-center align-center max-sm:space-y-10 space-y-20"
    >
      <Hero />
      <Skills />
      <About />
      {/* <Experience /> */}
      <Projects />
    </div>
  );
}
