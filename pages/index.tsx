import React from "react";

import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "./../src/content/Skills";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-14 py-10 xl:py-20 ">
      <Hero />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}
