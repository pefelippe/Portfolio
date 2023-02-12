import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./About";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-20   py-20 ">
      <Hero />
      {/* <Skills /> */}
      <About />
      <Projects />
    </div>
  );
}
