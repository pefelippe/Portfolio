import React from "react";

import ContactMessage from "../src/content/ContactMessage";
import Details from "../src/content/Details";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div
      className="relative flex flex-col mx-auto justify-center 
     items-center align-center max-sm:space-y-14 space-y-28  min-w-[400px] py-20"
    >
      <Hero />
      <Skills />
      <Projects />
      <Details />
      {/* <Experience /> */}
      {/* <ContactMessage /> */}
    </div>
  );
}
