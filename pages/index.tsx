import React from "react";

import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./../src/content/About";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center align-center space-y-10 md:space-y-20 pt-40 pb-40 ">
      <Hero />
      <Skills />
      {/* <About /> */}
      {/* <Experience /> */}
      <Projects />
    </div>
  );
}
