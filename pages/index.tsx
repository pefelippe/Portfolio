import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center pb-40 max-w-7xl space-y-40">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
