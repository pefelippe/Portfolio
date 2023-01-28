import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center py-40
     items-center align-center space-y-20"
    >
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
