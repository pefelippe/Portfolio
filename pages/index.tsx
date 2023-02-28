import React from "react";

import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Projects from "./../src/content/Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-screen space-y-10  md:space-y-32 py-20 md:py-40 px-10">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
