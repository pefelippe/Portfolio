import React from "react";

import Details from "../src/content/Details";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center 
     items-center align-center max-sm:space-y-10 space-y-20 py-20 md:py-40 min-w-[400px]"
    >
      <Hero />
      <Skills />
      <Details />
      <Experience />
      <Projects />
    </div>
  );
}
