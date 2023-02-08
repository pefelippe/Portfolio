import React from "react";


import Hero from "../src/content/Hero";

import Skills from "../src/content/Skills";
import About from "../src/content/About";
import Experience from "../src/content/Experience";
import Projects from "../src/content/Projects";
import Contact from "../src/content/Contact";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center items-center pb-60"
    >
      <Hero />
      <div className=" flex flex-col justify-center items-center space-y-32 w-full max-w-7xl">
        <Skills/>
        <Projects/>
        <About />
        {/* <Experience /> */}
        <Contact/>
      </div>
    </div>
  );
}
