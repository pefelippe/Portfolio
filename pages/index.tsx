import React from "react";

import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center max-w-7xl space-y-14  py-10  md:py-20 ">
      <Hero />
      <Skills />
      <Projects />
      <About />
      {/* <Contact /> */}
    </div>
  );
}
