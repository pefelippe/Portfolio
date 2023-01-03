import React from "react";

import About from "../src/content/About";
import Contact from "../src/content/Contact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-[#121212] text-[#FFFFFFDE]">
        <Hero />
      </section>

      <section id="about" className="">
        <About />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      {/* <section id="experience" className="snap-center ">
        <Projects />
      </section> */}

      <section id="contact" className=" bg-[#121212] text-[#FFFFFFDE]">
        <Contact />
      </section>
    </>
  );
}
