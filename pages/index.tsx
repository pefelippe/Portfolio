import React from "react";

import LetsTalk from "../src/content/LetsTalk";
import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-14  py-20 md:py-40">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <LetsTalk />
    </div>
  );
}
