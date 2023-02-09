import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "../src/content/About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-14 xl:space-y-20 py-20 md:py-40">
      <Hero />
      <Skills />
      <Projects />
      <About />

    </div>
  );
}
