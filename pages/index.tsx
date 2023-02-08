import React from "react";

import ContactMessage from "./contact";
import Details from "./details";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "./projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center items-center "
    >
      <Hero />
      {/* <Skills />
      <Details />
      <Projects />
      {/* <Experience /> x
      <ContactMessage /> */}
    </div>
  );
}
