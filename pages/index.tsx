import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./../src/content/AboutMe";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center align-center space-y-10 md:space-y-20 pt-20 xl:pt-40 pb-40 ">
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
    </div>
  );
}
