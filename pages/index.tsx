import React from "react";

import Icons from "../src/atoms/Icons";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./About";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-20 py-20 md:pt-40">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Icons />
    </div>
  );
}
