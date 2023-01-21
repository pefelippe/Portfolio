import React from "react";
import Experience from "../src/content/experience";

import Hero from "../src/content/Hero";

import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="min-h-[80vh] relative flex flex-col mx-auto justify-center items-centeralign-center space-y-20 pt-20">
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}
